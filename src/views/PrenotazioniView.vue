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

    // FIX 3: Sostituito elia/francesca con hairdresserId (radio button)
    const hairdresserId = ref(null);

    const appointment_date = ref(null);
    const appointment_slot = ref(null);
    const selectedTime = ref(null);

    // Osservatore per sincronizzare selectedTime con appointment_slot
    watch(selectedTime, (newValue) => {
      if (newValue !== null) {
        appointment_slot.value = newValue;
      }
    });

    const checkIfTimeIsNine = (time) => {
      return time === "09:00";
    };

    // FIX 2: Funzioni di validazione aggiunge (erano chiamate ma non definite)
    const isValidEmail = (email) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const isValidPhoneNumber = (phone) => {
      return /^[\d\s\+\-]{6,15}$/.test(phone);
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
      if (!appointment_date.value) return [];
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

    // Validazione form
    const checkForm = async () => {
      let isValid = true;
      let errorMessage = "";

      // FIX 3: Validazione con hairdresserId invece di elia/francesca
      if (!hairdresserId.value) {
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

    // Click handler per selezione orario
    const onTimeSelected = (time) => {
      selectedTime.value = time;
      appointment_slot.value = time;
    };

    const submitForm = async () => {
      const apiUrl = "http://127.0.0.1:8000/api/appointments";

      if (!selectedTime.value) {
        alert("Per favore, seleziona un orario per l'appuntamento.");
        return;
      }

      // FIX 1: Rinominato 'message' in 'description' per corrispondere al backend
      // FIX 3: Usato hairdresserId.value direttamente
      const payload = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        description: formData.message,
        hairdresser_id: hairdresserId.value,
        appointment_date: new Date(appointment_date.value)
          .toISOString()
          .slice(0, 10),
        appointment_slot: appointment_slot.value,
      };

      try {
        console.log("Invio richiesta con payload:", payload);
        await axios.post(apiUrl, payload);
        alert("Prenotazione effettuata con successo!");

        // Reset form dopo invio
        formData.name = "";
        formData.phone = "";
        formData.email = "";
        formData.message = "";
        hairdresserId.value = null;
        appointment_date.value = null;
        appointment_slot.value = null;
        selectedTime.value = null;
      } catch (error) {
        if (error.response) {
          console.error("Dettagli dell'errore API:", error.response.data);
          // Mostra errore specifico se slot già occupata
          if (error.response.status === 409) {
            alert("Questa slot è già prenotata. Scegli un altro orario.");
          } else if (error.response.status === 422) {
            const errors = Object.values(error.response.data.errors).flat();
            alert("Errore di validazione:\n" + errors.join("\n"));
          } else {
            alert("Si è verificato un errore durante la prenotazione.");
          }
        } else {
          alert("Impossibile contattare il server. Verifica la connessione.");
        }
      }
    };

    return {
      formData,
      hairdresserId,
      appointment_date,
      onTimeSelected,
      appointment_slot,
      availableTimes,
      checkForm,
      submitForm,
      rules,
      checkIfTimeIsNine,
      selectedTime,
      isValidEmail,
      isValidPhoneNumber,
    };
  },
};
</script>

<template>
  <div class="container container_prenotazioni">
    <div class="row">
      <h1 class="text-center p-5">Prenota un Appuntamento</h1>
      <hr />

      <!-- Form dati cliente -->
      <form class="col-12 col-md-6" @submit.prevent="checkForm">
        <div class="mb-3">
          <label for="name" class="form-label text-uppercase">Nome</label>
          <input
            v-model="formData.name"
            type="text"
            name="name"
            id="name"
            class="form-control"
            placeholder="Nome e Cognome"
            aria-describedby="nameHelper"
          />
          <small id="nameHelper" class="text-muted"
            >Inserisci il tuo nome</small
          >
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
          <small id="phoneHelper" class="text-muted"
            >Inserisci il tuo telefono</small
          >
        </div>

        <div class="mb-3">
          <label for="email" class="form-label text-uppercase">Email</label>
          <input
            v-model="formData.email"
            type="email"
            name="email"
            id="email"
            class="form-control"
            placeholder="email@example.com"
            aria-describedby="emailHelper"
          />
          <small id="emailHelper" class="text-muted"
            >Inserisci la tua email</small
          >
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
            placeholder="Descrivi il servizio che desideri..."
          ></textarea>
        </div>
      </form>

      <!-- Selezione parrucchiere, data e orario -->
      <div class="col-12 col-md-6 p-1">
        <h4 class="text-center">Seleziona un'Acconciatrice 05</h4>

        <!-- FIX 3: Radio button invece di checkbox -->
        <div class="d-flex justify-content-center my-1">
          <div class="checkbox-container">
            <input type="radio" id="elia" value="1" v-model="hairdresserId" />
            <label class="text-success mx-3" for="elia">Elia</label>
          </div>
          <div class="checkbox-container">
            <input
              type="radio"
              id="francesca"
              value="2"
              v-model="hairdresserId"
            />
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

          <!-- Lista orari disponibili -->
          <ul v-if="availableTimes.length > 0" class="time-select rounded">
            <li
              v-for="time in availableTimes"
              :key="time"
              :class="{
                'time-selected': selectedTime === time,
                'time-unavailable': checkIfTimeIsNine(time),
              }"
              @click="onTimeSelected(time)"
            >
              {{ time }}
            </li>
          </ul>
          <p v-else-if="appointment_date" class="text-muted text-center mt-2">
            Nessun orario disponibile per questa data.
          </p>
          <p v-else class="text-muted text-center mt-2">
            Seleziona una data per vedere gli orari disponibili.
          </p>
        </div>
      </div>
    </div>

    <hr />

    <div class="text-center">
      <button type="button" class="btn btn-primary w-0 mb-4" @click="checkForm">
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

  .time-select {
    list-style-type: none;
    padding: 0;
    margin-top: 10px;
    max-height: 100px;
    overflow-y: auto;
    border: 1px solid #ccc;
  }

  .time-select li {
    padding: 5px 10px;
    cursor: pointer;
  }

  .time-select li:hover {
    background-color: #f0f0f0;
  }

  .time-selected {
    background-color: #ddd;
    font-weight: bold;
  }
}
</style>
