<script>
import { ref } from "vue";
import { Calendar as VCalendar } from "v-calendar";

// setupCalendar({
//   themeStyles: {
//     wrapper: {
//       backgroundColor: "lightblue",
//     },
//     header: {
//       backgroundColor: "darkblue",
//       color: "white",
//     },
//   },
// });
const calendar = ref(null);
const date = ref(new Date());
</script>

<template>
  <div class="container">
    <div class="row">
      <h1 class="text-center p-5">Prenota un Appuntamento</h1>
      <form class="col-12 col-md-6" action="">
        <div class="mb-3">
          <label for="name" class="form-label text-uppercase">Nome</label>
          <input
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
            type="text"
            name="email"
            id="email"
            class="form-control"
            placeholder="email@example.com"
            aria-describedby="emailHelper"
          />
          <small id="emailHelper" class="text-muted">Type your email</small>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">Messagio</label>
          <textarea
            class="form-control"
            name="message"
            id="message"
            rows="3"
            placeholder="Your message here..."
          ></textarea>
        </div>
      </form>
      <div class="col-12 col-md-6 p-4">
        <VDatePicker v-model="date" mode="dateTime" is24hr expanded />
      </div>
      <button type="submit" class="btn btn-primary mb-4">Prenota</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *;

section {
  background-color: whitesmoke;
}
</style>
