<script>
export default {
  name: 'AppHeader',
  props: {
    menu: Array
  }
}
</script>

<template>
  <!-- navbar -->
  <nav class="my-purple ms-6 me-12 py-3">
    <div>
      <img src="../assets/img/avada-bakery-logo.png" alt="bakery-logo">
    </div>
    <div>
      <ul class="my-subheading">
        <a href="#" class="uppercase" v-for="link in menu">
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

  ul {
    @include flex(row, flex-end, center, 2.5rem);

    li {
      font-family: 'Roboto', sans-serif;
    }


    li:hover div {
      display: block;
    }
  }
}
</style>
