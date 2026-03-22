<script>
export default {
  name: "AppHome",
};
</script>

<template>
  <div class="home">
    <!-- Hero -->
    <section class="hero">
      <div class="hero-bg"></div>
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <p class="hero-label">Milano — Acconciatori dal 2005</p>
        <h1 class="hero-title">Officina 05<br />Acconciatori</h1>
        <p class="hero-sub">L'arte del capello, con cura artigianale</p>
        <div class="hero-actions">
          <router-link to="/prenotazioni" class="btn-orange"
            >Prenota ora</router-link
          >
          <router-link to="/storia&contatti" class="btn-outline"
            >Scopri di più</router-link
          >
        </div>
      </div>
      <div class="hero-scroll">
        <div class="scroll-line"></div>
        <span>Scorri</span>
      </div>
    </section>

    <!-- Servizi -->
    <section class="services">
      <div class="services-inner">
        <p class="section-label">I nostri servizi</p>
        <h2 class="section-title">Ogni dettaglio conta</h2>
        <div class="services-grid">
          <div class="service-card">
            <div class="service-num">01</div>
            <h3>Taglio</h3>
            <p>Tagli personalizzati per ogni tipo di capello e stile di vita</p>
          </div>
          <div class="service-card">
            <div class="service-num">02</div>
            <h3>Colore</h3>
            <p>Colorazione professionale con prodotti di alta qualità</p>
          </div>
          <div class="service-card">
            <div class="service-num">03</div>
            <h3>Trattamenti</h3>
            <p>Trattamenti rigeneranti per capelli sani e luminosi</p>
          </div>
          <div class="service-card">
            <div class="service-num">04</div>
            <h3>Acconciature</h3>
            <p>Acconciature per cerimonie e occasioni speciali</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Elia & Francesca -->
    <section class="team">
      <div class="team-inner">
        <p class="section-label">Il nostro team</p>
        <h2 class="section-title">I tuoi acconciatori</h2>
        <div class="team-grid">
          <div class="team-card elia">
            <div class="team-accent"></div>
            <div class="team-info">
              <h3>Elia</h3>
              <p>Specializzato in tagli moderni e colorazione creativa</p>
            </div>
            <router-link to="/prenotazioni" class="team-cta"
              >Prenota con Elia →</router-link
            >
          </div>
          <div class="team-card francesca">
            <div class="team-accent"></div>
            <div class="team-info">
              <h3>Francesca</h3>
              <p>
                Esperta in acconciature da cerimonia e trattamenti rigeneranti
              </p>
            </div>
            <router-link to="/prenotazioni" class="team-cta"
              >Prenota con Francesca →</router-link
            >
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta">
      <div class="cta-inner">
        <p class="section-label">Prenota il tuo appuntamento</p>
        <h2 class="cta-title">Prenditi cura di te</h2>
        <p class="cta-sub">
          Scegli il tuo acconciatore e prenota online in pochi secondi
        </p>
        <router-link to="/prenotazioni" class="btn-orange large"
          >Prenota ora →</router-link
        >
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables" as *;

/* ─── PALETTE ─────────────────────────────────── */
// Viola profondo (soffitto scuro della foto)
$bg: #0e0b14;
$surface1: #181323;
$surface2: #221a30;
// Arancio cuoio (legno delle poltrone)
$orange: #d4722a;
$orange-lt: #e8944a;
// Viola accento
$violet: #7c52b8;
$violet-lt: #9b7ec8;
// Testo
$text: #f0ebe0;
$text-dim: rgba(240, 235, 224, 0.5);
$text-hint: rgba(240, 235, 224, 0.28);

.home {
  background: $bg;
  color: $text;
  font-family: "Jost", sans-serif;
}

/* ─── HERO ─────────────────────────────────────── */
.hero {
  position: relative;
  height: calc(100vh - 62px);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background-image: url("../assets/img/o05a-cover-bg.jpg");
  background-size: cover;
  background-position: center 30%;
  opacity: 0.35;
  transform: scale(1.04);
  transition: transform 10s ease;
}

.hero:hover .hero-bg {
  transform: scale(1.07);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(
      ellipse at 20% 50%,
      rgba(124, 82, 184, 0.2) 0%,
      transparent 60%
    ),
    linear-gradient(
      180deg,
      rgba(14, 11, 20, 0.5) 0%,
      rgba(14, 11, 20, 0.2) 40%,
      rgba(14, 11, 20, 0.75) 100%
    );
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 0 2rem;
  max-width: 820px;
}

.hero-label {
  font-size: 0.68rem;
  font-weight: 400;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: rgba(232, 148, 74, 0.75);
  margin-bottom: 1.2rem;
}

.hero-title {
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(3.2rem, 9vw, 7rem);
  font-weight: 300;
  color: $text;
  letter-spacing: 0.03em;
  line-height: 1.02;
  margin: 0 0 1.2rem;
  text-shadow: 0 4px 40px rgba(14, 11, 20, 0.6);
}

.hero-sub {
  font-size: 0.9rem;
  font-weight: 300;
  color: $text-dim;
  letter-spacing: 0.1em;
  margin-bottom: 2.8rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.hero-scroll {
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  z-index: 2;

  .scroll-line {
    width: 1px;
    height: 40px;
    background: linear-gradient(to bottom, $orange-lt, transparent);
    animation: scrollPulse 2s ease-in-out infinite;
  }

  span {
    font-size: 0.58rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: rgba(232, 148, 74, 0.35);
  }
}

@keyframes scrollPulse {
  0%,
  100% {
    opacity: 0.35;
  }
  50% {
    opacity: 1;
  }
}

/* ─── BUTTONS ─────────────────────────────────── */
.btn-orange {
  display: inline-block;
  font-family: "Jost", sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #0e0b14;
  background: $orange-lt;
  border: 1px solid $orange-lt;
  padding: 0.85rem 2.2rem;
  border-radius: 2px;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: #f0a060;
    border-color: #f0a060;
    color: #0e0b14;
  }

  &.large {
    font-size: 0.82rem;
    padding: 1rem 2.8rem;
  }
}

.btn-outline {
  display: inline-block;
  font-family: "Jost", sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: $violet-lt;
  background: transparent;
  border: 1px solid rgba(155, 126, 200, 0.35);
  padding: 0.85rem 2.2rem;
  border-radius: 2px;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    border-color: $violet-lt;
    background: rgba(124, 82, 184, 0.1);
    color: $violet-lt;
  }
}

/* ─── SHARED SECTION STYLES ───────────────────── */
.section-label {
  font-size: 0.65rem;
  font-weight: 400;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: rgba(232, 148, 74, 0.5);
  margin-bottom: 0.7rem;
}

.section-title {
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 300;
  color: $text;
  letter-spacing: 0.03em;
  margin: 0 0 3.5rem;
}

/* ─── SERVICES ────────────────────────────────── */
.services {
  padding: 6rem 2rem;
  background: $surface1;
  border-top: 1px solid rgba(212, 114, 42, 0.1);
}

.services-inner {
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.2rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
}

.service-card {
  background: $surface2;
  border: 1px solid rgba(212, 114, 42, 0.1);
  border-radius: 3px;
  padding: 2.5rem 1.5rem;
  text-align: left;
  transition: all 0.22s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, $orange, $violet);
    opacity: 0;
    transition: opacity 0.22s ease;
  }

  &:hover {
    border-color: rgba(212, 114, 42, 0.22);
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(14, 11, 20, 0.5);

    &::before {
      opacity: 1;
    }
  }

  .service-num {
    font-family: "Cormorant Garamond", serif;
    font-size: 2.5rem;
    font-weight: 300;
    color: rgba(212, 114, 42, 0.18);
    line-height: 1;
    margin-bottom: 1rem;
  }

  h3 {
    font-family: "Cormorant Garamond", serif;
    font-size: 1.35rem;
    font-weight: 400;
    color: $text;
    margin: 0 0 0.7rem;
    letter-spacing: 0.04em;
  }

  p {
    font-size: 0.8rem;
    font-weight: 300;
    color: $text-dim;
    line-height: 1.75;
    margin: 0;
  }
}

/* ─── TEAM ─────────────────────────────────────── */
.team {
  padding: 6rem 2rem;
  background: $bg;
  border-top: 1px solid rgba(124, 82, 184, 0.1);
}

.team-inner {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.team-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
}

.team-card {
  background: $surface1;
  border: 1px solid rgba(212, 114, 42, 0.1);
  border-radius: 3px;
  padding: 2.5rem 2rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  position: relative;
  overflow: hidden;
  transition: all 0.22s ease;

  &:hover {
    border-color: rgba(212, 114, 42, 0.2);
    transform: translateY(-3px);
    box-shadow: 0 16px 50px rgba(14, 11, 20, 0.5);
  }

  .team-accent {
    position: absolute;
    top: 0;
    left: 0;
    width: 3px;
    height: 100%;
  }

  &.elia .team-accent {
    background: linear-gradient(to bottom, $orange, $violet);
  }
  &.francesca .team-accent {
    background: linear-gradient(to bottom, $violet, $orange);
  }

  .team-info h3 {
    font-family: "Cormorant Garamond", serif;
    font-size: 1.8rem;
    font-weight: 300;
    color: $text;
    margin: 0 0 0.5rem;
    letter-spacing: 0.04em;
  }

  .team-info p {
    font-size: 0.82rem;
    font-weight: 300;
    color: $text-dim;
    line-height: 1.7;
    margin: 0;
  }

  .team-cta {
    font-size: 0.7rem;
    font-weight: 400;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: $orange-lt;
    text-decoration: none;
    transition: color 0.15s ease;
    margin-top: auto;

    &:hover {
      color: #f0a060;
    }
  }
}

/* ─── CTA ─────────────────────────────────────── */
.cta {
  padding: 7rem 2rem;
  background: $surface1;
  border-top: 1px solid rgba(212, 114, 42, 0.1);
  text-align: center;
}

.cta-inner {
  max-width: 600px;
  margin: 0 auto;
}

.cta-title {
  font-family: "Cormorant Garamond", serif;
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 300;
  color: $text;
  letter-spacing: 0.03em;
  margin: 0 0 1rem;
}

.cta-sub {
  font-size: 0.85rem;
  font-weight: 300;
  color: $text-dim;
  line-height: 1.85;
  margin-bottom: 2.5rem;
}
</style>
