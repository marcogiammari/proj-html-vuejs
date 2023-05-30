<script>
import { store } from './data/store';
import AppNavbar from './components/AppNavbar.vue';
import AppHero from './components/AppHero.vue';

export default {
  components: {
    AppNavbar,
    AppHero,
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
  <header>
    <AppNavbar :menu='store.headerMenu' />
    <AppHero />
  </header>

  <!-- main -->
  <main>

  </main>

  <!-- footer -->
  <footer>

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
