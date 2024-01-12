<script>
import { state } from "../state.js";

export default {
  name: "ComponentNavbar",
  data() {
    return {
      state,
    };
  },
};
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark p-1">
      <div class="container">
        <router-link id="logo" class="navbar-brand" to="/">
          <img
            src="../assets/img/o05a-logo.jpg"
            alt="deliveboo logo"
            class="img-fluid"
          />
        </router-link>

        <!-- dropdown button responsive -->
        <button
          class="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="mainNav">
          <ul class="navbar-nav me-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <router-link
                class="nav-link"
                to="/prenotazioni"
                aria-current="page"
              >
                Prenotazioni<span class="visually-hidden">(current)</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/prodotti" class="nav-link"
                >Prodotti</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/storia&contatti" class="nav-link"
                >Storia & Contatti</router-link
              >
            </li>
          </ul>
          <div class="admin">
            <a
              href="http://127.0.0.1:8000/dashboard"
              class="btn admin-btn p-2"
              target="__blank"
            >
              <img width="20" src="../assets/img/admin_lock.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables" as *;

#logo {
  width: 70px;
}

.navbar {
  background-color: linear-gradient(
    rgba(23, 32, 43, 0.9),
    rgba(55, 67, 81, 0.753)
  );
}

.navbar-brand {
  color: $oa_orange;
}

.nav-link {
  color: $oa_light;

  &:hover {
    color: $oa_orange;
  }
}

.btn:hover {
  color: $oa_orange;
}

.admin .btn {
  background-color: $oa_light;
  color: $oa_light;
  border: 1px solid $oa_light;

  &:hover {
    color: $oa_light;
    border: 1px solid white;
  }
}
</style>
