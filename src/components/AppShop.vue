<script>
import { store } from '../data/store';
import AppSlider from './AppSlider.vue';
export default {
    name: 'AppShop',
    components: {
        AppSlider
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <section>
        <div class="w-11/12 flex gap-8 mx-auto px-1">
            <article class="w-1/4 flex flex-col items-center gap-6 text-center">
                <h2 class="my-heading">Find a freshly baked product perfect for you</h2>
                <p class="text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, nesciunt.
                    Vero dignissimos quae
                    sapiente. Cupiditate nobis quos cumque adipisci accusantium.
                </p>
                <button class="my-primary-btn bg-white py-3 px-9 rounded-[8px] text-sm font-semibold">
                    Shop All Products
                </button>
            </article>
            <div class="my-carousel w-3/4 relative grid grid-cols-4 gap-6">
                <AppSlider :products="store.products" :slides="4" :info="true" :selectHover="true" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped></style>