<script>
import { ref, reactive, computed, watch } from "vue";
import axios from "axios";

export default {
  setup() {
    // Proprietà reattive
    const formData = reactive({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
    const elia = ref(false);
    const francesca = ref(false);
    const appointment_date = ref(null);
    const appointment_slot = ref(null);
    const selectedTime = ref(null);

    // Osservatore per sincronizzare selectedTime con appointment_slot
    watch(selectedTime, (newValue) => {
      if (newValue !== null) {
        appointment_slot.value = newValue;
      }
    });

    // Definisci la funzione checkIfTimeIsNine qui
    const checkIfTimeIsNine = (time) => {
      return time === "09:00";
    };
    // Regole per orari e giorni
    const rules = {
      hours: (hour, { weekday }) => {
        if ([0, 1].includes(weekday)) return false;
        return (hour >= 9 && hour < 13) || (hour >= 15 && hour < 19);
      },
      minutes: (minute, { hour, weekday }) => {
        if ([2, 3, 4, 5].includes(weekday) && hour === 9 && minute < 30)
          return false;
        return minute % 30 === 0;
      },
    };

    // Calcolo dei tempi disponibili
    const availableTimes = computed(() => {
      const times = [];
      for (let hour = 9; hour <= 19; hour++) {
        for (let minute = 0; minute < 60; minute += 30) {
          const time = `${hour.toString().padStart(2, "0")}:${minute
            .toString()
            .padStart(2, "0")}`;
          if (
            rules.hours(hour, {
              weekday: new Date(appointment_date.value).getDay(),
            }) &&
            rules.minutes(minute, {
              hour,
              weekday: new Date(appointment_date.value).getDay(),
            })
          ) {
            times.push(time);
          }
        }
      }
      return times;
    });

    // Funzioni
    const checkForm = async () => {
      let isValid = true;
      let errorMessage = "";

      if (!elia.value && !francesca.value) {
        errorMessage += "Per favore, seleziona almeno Elia o Francesca.\n";
        isValid = false;
      }
      if (!selectedTime.value) {
        errorMessage += "Per favore, seleziona un orario per l'appuntamento.\n";
        isValid = false;
      }
      if (!formData.name) {
        errorMessage += "Per favore, inserisci il tuo nome.\n";
        isValid = false;
      }
      // You can add more specific validations for each field. For example:
      if (!formData.phone || !isValidPhoneNumber(formData.phone)) {
        errorMessage += "Per favore, inserisci un numero di telefono valido.\n";
        isValid = false;
      }
      if (!formData.email || !isValidEmail(formData.email)) {
        errorMessage += "Per favore, inserisci un'email valida.\n";
        isValid = false;
      }
      if (!formData.message) {
        errorMessage += "Per favore, inserisci un messaggio.\n";
        isValid = false;
      }
      if (!appointment_date.value || !appointment_slot.value) {
        errorMessage +=
          "Per favore, seleziona una data e un orario per l'appuntamento.\n";
        isValid = false;
      }

      if (!isValid) {
        alert(errorMessage);
        return;
      }

      await submitForm();
    };
    // Adjusted click handler for time selection
    const onTimeSelected = (time) => {
      selectedTime.value = time;
      appointment_slot.value = time; // This line updates the appointment_slot
    };

    const submitForm = async () => {
      const apiUrl = "http://127.0.0.1:8000/api/appointments";
      let hairdresserId = elia.value ? 1 : francesca.value ? 2 : null;

      if (!selectedTime.value) {
        alert("Per favore, seleziona un orario per l'appuntamento.");
        return;
      }

      const payload = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
        hairdresser_id: hairdresserId,
        appointment_date: appointment_date.value.toISOString().slice(0, 10),
        appointment_slot: appointment_slot.value,
      };

      try {
        console.log("Invio richiesta con payload:", payload);
        await axios.post(apiUrl, payload);
        alert("Prenotazione effettuata!");
      } catch (error) {
        console.error("Dettagli dell'errore API:", error.response.data);
        alert("Si è verificato un errore durante la prenotazione.");
      }
    };

    // Altre funzioni come necessario...

    return {
      formData,
      elia,
      francesca,
      appointment_date,
      onTimeSelected,
      appointment_slot,
      availableTimes,
      checkForm,
      submitForm,
      rules,
      checkIfTimeIsNine,
      selectedTime,
    };
  },
};
</script>

<template>
  <div class="container container_prenotazioni">
    <div class="row">
      <h1 class="text-center p-5">Prenota un Appuntamento</h1>
      <hr />
      <form class="col-12 col-md-6" @submit.prevent="checkForm">
        <div class="mb-3">
          <label for="name" class="form-label text-uppercase">Nome</label>
          <input
            v-model="formData.name"
            type="text"
            name="name"
            id="name"
            class="form-control"
            placeholder="Nome e Cogniome"
            aria-describedby="nameHelper"
          />
          <small id="nameHelper" class="text-muted">Type your name</small>
        </div>
        <div class="mb-3">
          <label for="phone" class="form-label text-uppercase">Telefono</label>
          <input
            v-model="formData.phone"
            type="tel"
            name="phone"
            id="phone"
            class="form-control"
            placeholder="+39"
            aria-describedby="phoneHelper"
          />
          <small id="phoneHelper" class="text-muted">Type your phone</small>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label text-uppercase">email</label>
          <input
            v-model="formData.email"
            type="email"
            name="email"
            id="email"
            class="form-control"
            placeholder="email@example.com"
            aria-describedby="emailHelper"
          />
          <small id="emailHelper" class="text-muted">Type your email</small>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label text-uppercase"
            >Messaggio</label
          >
          <textarea
            v-model="formData.message"
            class="form-control"
            name="message"
            id="message"
            rows="3"
            placeholder="Your message here..."
          ></textarea>
        </div>
      </form>
      <div class="col-12 col-md-6 p-1">
        <h4 class="text-center">Seleziona un Acconciatrice 05</h4>

        <div class="d-flex justify-content-center my-1">
          <div class="checkbox-container">
            <input type="checkbox" id="elia" v-model="elia" />
            <label class="text-success mx-3" for="elia">Elia</label>
          </div>
          <div class="checkbox-container">
            <input type="checkbox" id="francesca" v-model="francesca" />
            <label class="text-danger mx-3" for="francesca">Francesca</label>
          </div>
        </div>
        <hr />
        <div class="timepicker-container">
          <VDatePicker
            v-model="appointment_date"
            :rules="rules"
            expanded
            locale="it"
          />

          <ul class="time-select rounded">
            <li
              v-for="time in availableTimes"
              :key="time"
              :class="{
                'time-selected': selectedTime && time === selectedTime.value,
                'time-unavailable': checkIfTimeIsNine(time),
              }"
              @click="onTimeSelected(time)"
            >
              {{ time }}
            </li>
          </ul>
        </div>

        <!-- ...altro codice... -->
      </div>
    </div>
    <hr />
    <div class="text-center">
      <button
        type="submit"
        class="btn btn-primary w-0 mb-4"
        @click="submitForm"
      >
        Prenota
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;

.checkbox-container {
  font-size: x-large;
}
.checkbox-container label {
  text-transform: capitalize;
}

.timepicker-container {
  text-align: center;
  /* Posiziona a destra. Usa 'center' per centrare */

  .time-select {
    //width: 100px;
    list-style-type: none;
    padding: 0;
    margin-top: 10px;
    max-height: 100px; /* Altezza massima della lista */
    overflow-y: auto; /* Attiva la scrollbar verticale se necessario */
    border: 1px solid #ccc; /* Stile del bordo */
  }

  .time-select li {
    padding: -10px;
    cursor: pointer;
  }

  .time-select li:hover {
    background-color: #f0f0f0;
  }

  .time-selected {
    background-color: #ddd; /* Colore di sfondo per l'elemento selezionato */
  }

  // .time-unavailable {
  //   text-decoration: line-through;
  //   color: red;
  // }
}
</style>
