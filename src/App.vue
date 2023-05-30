<script>
import AppNavbar from './components/AppNavbar.vue'

export default {
  components: {
    AppNavbar
  }
}
</script>

<template>
  <!-- header -->
  <header>
    <AppNavbar />

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
