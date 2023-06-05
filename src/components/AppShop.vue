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
            store,
            slides: 2,
        }
    },
    methods: {
        getClass() {
            return `my-carousel w-3/4 relative grid gap-6 grid-cols-${this.slides}`
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
            <div class="my-carousel w-3/4 relative grid gap-6 grid-flow-col">
                <div class="absolute -translate-y-full text-sky-500 py-2 font-bold">
                    <label for="slides-num" class="uppercase italic">Slides: </label>
                    <select id="slides-num" v-model="this.slides">
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </div>
                <AppSlider :products="store.products" v-model:slides="this.slides" :info="true" :selectHover="true" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped></style>