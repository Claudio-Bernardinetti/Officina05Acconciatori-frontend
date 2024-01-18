<script>
import { RouterView } from "vue-router";
import ComponentFooter from "./components/ComponentFooter.vue";
import ComponentNavbar from "./components/ComponentNavbar.vue";

export default {
  name: "App",
  components: {
    ComponentNavbar,
    RouterView,
    ComponentFooter,
  },
};
</script>

<template>
  <ComponentNavbar />

  <main class="min-vh-100">
    <router-view></router-view>
  </main>

  <ComponentFooter />
</template>

<style lang="scss" scoped>
@use "./assets/scss/partials/variables" as *;

main {
  background-color: rgb(151, 173, 193);
}
</style>
