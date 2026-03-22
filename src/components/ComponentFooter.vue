<script>
export default {
  name: "ComponentFooter",
};
</script>

<template>
  <footer class="site-footer">
    <div class="footer-top">
      <div class="footer-inner">
        <!-- Brand -->
        <div class="footer-brand">
          <img
            src="../assets/img/o05a-logo.jpg"
            alt="Officina 05"
            class="footer-logo"
          />
          <div class="footer-brand-name">Officina 05</div>
          <p class="footer-tagline">
            L'arte del capello,<br />con cura artigianale
          </p>
          <div class="footer-divider"></div>
        </div>

        <!-- Contatti -->
        <div class="footer-col">
          <div class="footer-col-title">Contatti</div>
          <ul class="footer-list">
            <li>
              <span class="footer-list-label">Email</span>
              <a href="mailto:info@officina05.it">info@officina05.it</a>
            </li>
            <li>
              <span class="footer-list-label">Telefono</span>
              <a href="tel:+393215684795">+39 321 568 4795</a>
            </li>
            <li>
              <span class="footer-list-label">Indirizzo</span>
              <span>Via Roma 1900, Milano</span>
            </li>
          </ul>
        </div>

        <!-- Navigazione -->
        <div class="footer-col">
          <div class="footer-col-title">Menu</div>
          <ul class="footer-list">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/prenotazioni">Prenotazioni</router-link></li>
            <li><router-link to="/prodotti">Prodotti</router-link></li>
            <li>
              <router-link to="/storia&contatti">Storia & Contatti</router-link>
            </li>
          </ul>
        </div>

        <!-- Social -->
        <div class="footer-col">
          <div class="footer-col-title">Seguici</div>
          <div class="social-links">
            <a
              href="https://www.facebook.com/officina05acconciatori/"
              class="social-link"
              target="_blank"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                />
              </svg>
              Facebook
            </a>
            <a
              href="https://www.instagram.com/officina05acconciatori/"
              class="social-link"
              target="_blank"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
              Instagram
            </a>
            <a href="#" class="social-link" target="_blank">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z"
                />
              </svg>
              Google
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="footer-bottom-inner">
        <span class="footer-copy"
          >© 2024 Officina 05 Acconciatori. Tutti i diritti riservati.</span
        >
        <span class="footer-credit">Sviluppato da CB</span>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables" as *;

$bg: #0e0b14;
$surface1: #181323;
$orange: #d4722a;
$orange-lt: #e8944a;
$violet-lt: #9b7ec8;
$text: #f0ebe0;
$text-dim: rgba(240, 235, 224, 0.45);

.site-footer {
  background: $bg;
  border-top: 1px solid rgba(212, 114, 42, 0.15);
  font-family: "Jost", sans-serif;
  color: $text;
}

.footer-top {
  padding: 4.5rem 2rem;
}

.footer-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1fr;
  gap: 3rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.footer-logo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  opacity: 0.85;
  border: 1px solid rgba(212, 114, 42, 0.3);
}

.footer-brand-name {
  font-family: "Cormorant Garamond", serif;
  font-size: 1.3rem;
  font-weight: 400;
  color: $orange-lt;
  letter-spacing: 0.06em;
}

.footer-tagline {
  font-size: 0.78rem;
  font-weight: 300;
  color: $text-dim;
  line-height: 1.7;
  margin: 0;
}

.footer-divider {
  width: 32px;
  height: 1px;
  background: linear-gradient(90deg, $orange, rgba(124, 82, 184, 0.5));
  margin-top: 0.3rem;
}

.footer-col-title {
  font-size: 0.6rem;
  font-weight: 500;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(232, 148, 74, 0.4);
  margin-bottom: 1.2rem;
}

.footer-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  li {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
  }

  .footer-list-label {
    font-size: 0.58rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: rgba(155, 126, 200, 0.4);
  }

  a,
  span {
    font-size: 0.82rem;
    font-weight: 300;
    color: $text-dim;
    text-decoration: none;
    transition: color 0.15s ease;
  }

  a:hover {
    color: $orange-lt;
  }
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-size: 0.8rem;
  font-weight: 300;
  color: $text-dim;
  text-decoration: none;
  transition: color 0.15s ease;

  svg {
    opacity: 0.5;
    transition: opacity 0.15s ease;
  }

  &:hover {
    color: $orange-lt;
    svg {
      opacity: 1;
    }
  }
}

.footer-bottom {
  border-top: 1px solid rgba(212, 114, 42, 0.08);
  padding: 1.2rem 2rem;
}

.footer-bottom-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.footer-copy,
.footer-credit {
  font-size: 0.68rem;
  font-weight: 300;
  letter-spacing: 0.06em;
  color: rgba(240, 235, 224, 0.2);
}
</style>
