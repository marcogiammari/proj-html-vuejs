<script>
import { store } from './data/store';
import AppNavbar from './components/AppNavbar.vue'

export default {
  components: {
    AppNavbar
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
  background-color: $bg-pink;
}
</style>
