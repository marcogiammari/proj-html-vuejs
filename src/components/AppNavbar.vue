<script>
import { store } from '../data/store';
export default {
  name: 'AppHeader',
  data() {
    return {
      store
    }
  }
}
</script>

<template>
  <!-- navbar -->
  <nav class="ms-6 me-12 py-3">
    <div>
      <img src="../assets/img/avada-bakery-logo.png" alt="bakery-logo">
    </div>
    <div>
      <ul class="font-sans font-semibold tracking-widest">
        <a href="#" class="uppercase" v-for="link in store.headerMenu">
          <li>
            {{ link }}
            <div class="hidden h-[2px] mt-2 bg-current"></div>
          </li>
        </a>
        <i class="fa-solid fa-cart-shopping text-sm"></i>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins.scss' as *;
@use '../styles/partials/variables.scss' as *;

nav {
  @include flex(row, space-between);
  color: $text-purple;

  ul {
    @include flex(row, flex-end, center, 2.5rem);
    letter-spacing: 2px;
    font-size: 11px;

    li:hover div {
      display: block;
    }
  }
}
</style>
