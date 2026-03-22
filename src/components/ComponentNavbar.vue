<script>
import { state } from "../state.js";

export default {
  name: "ComponentNavbar",
  data() {
    return { state, menuOpen: false };
  },
};
</script>

<template>
  <header class="navbar-wrapper">
    <nav class="main-nav">
      <div class="nav-inner">
        <router-link class="nav-logo" to="/">
          <img src="../assets/img/o05a-logo.jpg" alt="Officina 05" />
          <span class="nav-logo-name">Officina 05</span>
        </router-link>

        <ul class="nav-links">
          <li>
            <router-link to="/prenotazioni" class="nav-link"
              >Prenotazioni</router-link
            >
          </li>
          <li>
            <router-link to="/prodotti" class="nav-link">Prodotti</router-link>
          </li>
          <li>
            <router-link to="/storia&contatti" class="nav-link"
              >Storia & Contatti</router-link
            >
          </li>
        </ul>

        <div class="nav-right">
          <a
            href="http://127.0.0.1:8000/dashboard"
            class="admin-btn"
            target="_blank"
            title="Backoffice"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <rect x="2" y="7" width="12" height="8" rx="2" />
              <path d="M5 7V5a3 3 0 016 0v2" />
            </svg>
          </a>
          <button
            class="hamburger"
            @click="menuOpen = !menuOpen"
            :class="{ open: menuOpen }"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>

      <div class="mobile-menu" :class="{ open: menuOpen }">
        <router-link
          to="/prenotazioni"
          class="mobile-link"
          @click="menuOpen = false"
          >Prenotazioni</router-link
        >
        <router-link
          to="/prodotti"
          class="mobile-link"
          @click="menuOpen = false"
          >Prodotti</router-link
        >
        <router-link
          to="/storia&contatti"
          class="mobile-link"
          @click="menuOpen = false"
          >Storia & Contatti</router-link
        >
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables" as *;

.navbar-wrapper {
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
}

.main-nav {
  background: rgba(14, 11, 20, 0.97);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid rgba(212, 114, 42, 0.18);
}

.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  text-decoration: none;

  img {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    object-fit: cover;
    opacity: 0.9;
    border: 1px solid rgba(212, 114, 42, 0.3);
  }

  .nav-logo-name {
    font-family: "Cormorant Garamond", serif;
    font-size: 1.2rem;
    font-weight: 400;
    color: #e8944a;
    letter-spacing: 0.06em;
  }
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 0.2rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
  }
}

.nav-link {
  display: block;
  padding: 0.4rem 0.9rem;
  font-family: "Jost", sans-serif;
  font-size: 0.72rem;
  font-weight: 400;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(240, 235, 224, 0.5);
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 2px;
  transition: all 0.18s ease;

  &:hover,
  &.router-link-active {
    color: #e8944a;
    background: rgba(212, 114, 42, 0.08);
    border-color: rgba(212, 114, 42, 0.22);
  }
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.admin-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border: 1px solid rgba(124, 82, 184, 0.3);
  border-radius: 2px;
  color: rgba(155, 126, 200, 0.65);
  text-decoration: none;
  transition: all 0.18s ease;

  &:hover {
    border-color: #9b7ec8;
    color: #9b7ec8;
    background: rgba(124, 82, 184, 0.1);
  }
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;

  @media (max-width: 768px) {
    display: flex;
  }

  span {
    display: block;
    width: 22px;
    height: 1.5px;
    background: rgba(232, 148, 74, 0.7);
    transition: all 0.2s ease;
    transform-origin: center;
  }

  &.open span:nth-child(1) {
    transform: translateY(6.5px) rotate(45deg);
  }
  &.open span:nth-child(2) {
    opacity: 0;
  }
  &.open span:nth-child(3) {
    transform: translateY(-6.5px) rotate(-45deg);
  }
}

.mobile-menu {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  background: rgba(14, 11, 20, 0.99);
  border-top: 1px solid rgba(212, 114, 42, 0.1);

  &.open {
    max-height: 300px;
  }
}

.mobile-link {
  display: block;
  padding: 0.9rem 2rem;
  font-family: "Jost", sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(240, 235, 224, 0.5);
  text-decoration: none;
  border-bottom: 1px solid rgba(212, 114, 42, 0.08);
  transition: color 0.15s ease;

  &:hover,
  &.router-link-active {
    color: #e8944a;
  }
}
</style>
