<script>
import { store } from './data/store';
import AppNavbar from './components/AppNavbar.vue';
import AppHero from './components/AppHero.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  components: {
    AppNavbar,
    AppHero,
    AppMain,
    AppFooter
  },
  data() {
    return {
      store
    }
  }
}
</script>

<template>
  <!-- header -->
  <header id="header">
    <AppNavbar />
    <AppHero />
  </header>

  <!-- main -->
  <AppMain />

  <!-- footer -->
  <footer>
    <AppFooter />
  </footer>
</template>

<style lang="scss" scoped>
@use './styles/partials/variables.scss' as *;

header {
  height: 55rem;
  background-image: url('./assets/img/hero-header-bakery.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
