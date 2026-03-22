<script>
import { RouterView } from "vue-router";
import ComponentFooter from "./components/ComponentFooter.vue";
import ComponentNavbar from "./components/ComponentNavbar.vue";

export default {
  name: "App",
  components: { ComponentNavbar, RouterView, ComponentFooter },
};
</script>

<template>
  <ComponentNavbar />
  <main>
    <router-view></router-view>
  </main>
  <ComponentFooter />
</template>

<style lang="scss" scoped>
@use "./assets/scss/partials/variables" as *;

main {
  background: #0e0b14;
  min-height: calc(100vh - 62px);
}
</style>
