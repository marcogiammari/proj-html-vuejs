<script>
import AppMenu from './AppMenu.vue';

export default {
  name: 'AppHeader',
  components: {
    AppMenu
  },
  data() {
    return {
      menu: {
        items: [
          'home',
          'shop',
          'about',
          'gallery',
          'locations',
          'journal',
          'contact',
          'my account',
        ],
        isCartActive: false,
        style: 'uppercase text-xs'
      }
    }
  }
}
</script>

<template>
  <!-- navbar -->
  <nav class="my-purple ms-6 me-12 py-3">
    <div>
      <img src="../assets/img/avada-bakery-logo.png" alt="bakery-logo">
    </div>
    <AppMenu :menu="this.menu" />
  </nav>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins.scss' as *;


nav {
  @include flex(row, space-between);
}
</style>
