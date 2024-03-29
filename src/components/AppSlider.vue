<script>
import { services } from '../data/services';
import { store } from '../data/store';

export default {
    name: 'AppSlider',
    props: ['products', 'slides', 'info', 'infoHover', 'selectHover', 'filter', 'current'],
    data() {
        return {
            store,
            services,
        }
    },
    methods: {
        isDisplayed(i) {
            let diff = i - this.store.current
            return diff < this.slides && diff >= 0
        },
        next() {
            this.store.current == this.products.length - this.slides ? this.store.current = 0 : this.store.current++
        },
        previous() {
            this.store.current == 0 ? this.store.current = this.products.length - this.slides : this.store.current--
        }
    }
}
</script>

<template>
    <button v-if="this.products.length > this.slides" @click="previous()"
        class="absolute left-0 bottom-1/2 flex justify-center items-center h-20 w-10 z-10">
        <div class="h-2 w-2 rotate-45" id="prev-btn"></div>
    </button>
    <button v-if="this.products.length > this.slides" @click="next()"
        class="absolute right-0 bottom-1/2 flex justify-center items-center h-20 w-10 z-10">
        <div class="h-2 w-2 rotate-[225deg]" id="next-btn"></div>
    </button>
    <div class="my-card" v-for="product, i in products" v-show="isDisplayed(i)">
        <div class="relative h-full">
            <img class="h-4/5 w-full" :src="services.getImagePath(product.img)" :alt="product.name">
            <div class="info-txt text-center" v-show="info">
                <h3 class="my-heading">{{ product.name }}</h3>
                <p>${{ product.minPrice.toFixed(2) }} - ${{ product.maxPrice.toFixed(2) }}</p>
            </div>
            <div v-show="infoHover" id="info-hover"
                class="hidden my-heading absolute flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-full text-center">
                <h5>{{ product.name }}</h5>
                <p class="text-sm">{{ product.type }}</p>
                <p class="thin">${{ product.minPrice.toFixed(2) }} - ${{ product.maxPrice.toFixed(2) }}</p>
            </div>
            <div v-show="selectHover" id="select-hover"
                class="hidden my-heading absolute top-1/3 -translate-y-1/2 text-center w-full">
                <div class="w-full font-bold">
                    <a href="#"><span class="uppercase">Select options</span></a> /
                    <a href="#"><span class="uppercase">Quick view</span></a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;

.my-card:hover img {
    filter: grayscale(.5) brightness(.8);

}

.my-card:hover #info-hover,
.my-card:hover #select-hover {
    display: flex;
}

.my-carousel button {
    background-color: $secondarycolor;

    &:hover {
        background-color: $primarycolor;
    }

    div {
        border-bottom: 1px solid white;
        border-left: 1px solid white;
    }
}

.info-txt {

    h3 {
        font-size: 1.5rem;
    }

    p {
        color: $primarycolor;
    }
}

#info-hover {
    color: white;
    font-size: 1.5rem;

    p:last-child {
        font-size: 1.25rem;
        font-family: Arial, Helvetica, sans-serif;
    }
}

#select-hover {
    color: white;
    font-size: .75rem;
    font-family: Arial, Helvetica, sans-serif;
}
</style>