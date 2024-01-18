<script>
export default {
  name: "ComponentFooter",
};
</script>

<template>
  <footer>
    <div class="footer-top">
      <div class="container footer flex-wrap">
        <div class="text-center m-auto pb-3">
          <img
            id="logo"
            src="../assets/img/o05a-logo.jpg"
            alt="logo"
            class="col-md-12 m-3"
          />
          <div class="line text-center" style="width: auto"></div>
          <ul
            class="list-unstyled text-white d-flex flex-wrap justify-content-around my-2"
          >
            <li>Email : <i href="#">supporto@deliveboo.com</i></li>
            <li>Telefono : +39 3215684795</li>
            <li>
              Indirizzo : Via Roma, 1900, 02040 Cantalupo in Sabina (RI) Italia
            </li>
          </ul>
        </div>
        <!-- End section Contatti -->
        <div id="social-media-icons" class="about col-12 py-3">
          <ul
            class="list-unstyled social-icons d-flex justify-content-around align-items-center m-0"
          >
            <li>
              <a href="https://www.facebook.com/officina05acconciatori/"
                ><i class="fab fa-facebook-f icon"></i
              ></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-x-twitter icon"></i></a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/officina05acconciatori/?igsh=a3M2M2w4OWh3bnhu"
                ><i class="fab fa-linkedin-in icon"></i
              ></a>
            </li>
            <li>
              <a
                href="https://www.google.com/search?q=officina+05+acconciatori&rlz=1C2VDKB_en-GBGB989IT1064&sca_esv=597772508&sxsrf=ACQVn08PG4G8x3m8n-sWQeOcEGUBhN6tzA%3A1705057322173&ei=KhyhZfORCsXw6AP0l7LIAw&gs_ssp=eJwFwTkOgCAQAMDYmthb0lizgFw-wV8sCygWEIwFz3dmXvjFhXhu17uREaZjgyGUzJBt8sEESCEcMIx2SkaN4N1uiehcW86FSkUGmiFRq1Twa2_5AZahGDc&oq=officina+05+acc&gs_lp=Egxnd3Mtd2l6LXNlcnAiD29mZmljaW5hIDA1IGFjYyoCCAAyCxAuGIAEGMcBGK8BMhoQLhiABBjHARivARiXBRjcBBjeBBjgBNgBAkiQ5BxQ4RBYkGNwAngAkAEAmAG1AaAB_QOqAQMwLjS4AQHIAQD4AQHCAgcQABgeGLADwgIJEAAYCBgeGLADwgIUEC4YrwEYxwEYgAQYyAMYsAPYAQHCAgYQABgWGB7iAwQYASBBiAYBkAYEugYECAEYCLoGBggCEAEYFA&sclient=gws-wiz-serp"
                ><i class="fab fa-google icon"></i
              ></a>
            </li>
          </ul>
        </div>
        <!-- End section Social Media Icons -->
      </div>
    </div>

    <!-- End Footer top -->

    <div class="footer-bottom text-white bg-dark p-2">
      <div class="d-flex justify-content-center flex-wrap mx-2 pt-3">
        <div class="left d-flex">
          <p>CB</p>
        </div>
        <div class="right d-flex">
          <img src="" alt="" />
          <p>&#169; 2024 All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables" as *;
@use "../assets/scss/partials/social_media_icons" as *;

footer {
  background: linear-gradient(rgba(23, 32, 43, 0.9), rgba(55, 67, 81, 0.753));

  .aiuto,
  .note_legali,
  .scopri_deliveboo,
  .lists {
    color: $oa_light;
    padding-top: 2rem;
  }

  .icons {
    justify-content: space-between;
  }

  .line {
    border: 2px solid $oa_orange;
    width: 60px;
  }

  .list-unstyled a {
    text-decoration: none;
    color: white;
    margin-bottom: 10px;
  }

  .list-unstyled li {
    font-size: large;
    margin-bottom: 10px;
  }

  .footer-bottom {
    color: $oa_light;
  }

  #logo {
    width: 140px;
  }

  p {
    padding-right: 2rem;
  }

  @media (max-width: 576px) {
    .about {
      padding-left: 1rem;
    }
  }
}
</style>
