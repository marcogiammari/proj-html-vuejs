<script>

export default {
    name: 'AppMenu',
    props: {
        menu: Object
    }
}
</script>

<template>
    <div>
        <ul class="my-subheading">
            <a href="#" :class="menu.style" v-for="item in menu.items">
                <li>
                    {{ item }}
                    <div class="hidden h-[2px] mt-2 bg-current"></div>
                </li>
            </a>
            <div class="flex items-center gap-2">
                <i class="fa-solid fa-cart-shopping text-sm"></i>
                <span v-show="menu.isCartActive"
                    class="my-cart-counter w-5 h-5 grid place-content-center rounded-full p-3">0</span>
            </div>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins.scss' as *;
@use '../styles/partials/variables.scss' as *;

ul {
    @include flex(row, flex-end, center, 2.5rem);
    height: 2rem;

    li,
    i {
        color: $primarycolor;
        font-weight: 600;
    }


    li:hover div {
        display: block;
    }

    .my-cart-counter {
        font-size: 1rem;
        color: $primarycolor;
        background: $tertiarycolor;
    }
}
</style>