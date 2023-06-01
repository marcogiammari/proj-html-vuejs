<script>
export default {
    name: 'AppSlider',
    props: {
        products: Array,
        slides: Number,
        info: Boolean
    },
    data() {
        return {
            current: [...Array(this.slides).keys()]
        }
    },
    methods: {
        getImagePath(imgPath) {
            return new URL(imgPath, import.meta.url).href;
        },
        isDisplayed(i) {
            return (this.current.includes(i));
        },
        next() {
            if (this.current.at(-1) <= this.products.length - 2) {
                for (let i = 0; i < this.current.length; i++) {
                    this.current[i]++
                }
            }
        },
        previous() {
            if (this.current[0] > 0) {
                for (let i = 0; i < this.current.length; i++) {
                    this.current[i]--
                }
            }
        }
    }
}
</script>

<template>
    <button @click="previous()" class="absolute left-0 bottom-1/2 flex justify-center items-center h-20 w-10">
        <div class="h-2 w-2 rotate-45" id="prev-btn"></div>
    </button>
    <button @click="next()" class="absolute right-0 bottom-1/2 flex justify-center items-center h-20 w-10">
        <div class="h-2 w-2 rotate-[225deg]" id="next-btn"></div>
    </button>
    <div v-for="product, i in products" v-show="isDisplayed(i)">
        <img :src="getImagePath(product.img)" :alt="product.name">
        <div class="info-txt text-center" v-show="info">
            <h3 class="my-heading">{{ product.name }}</h3>
            <p>${{ product.minPrice.toFixed(2) }} - ${{ product.maxPrice.toFixed(2) }}</p>
        </div>

    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;

.my-carousel button {
    background-color: $lightpurple;

    &:hover {
        background-color: $purple;
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
        color: $purple;
    }
}
</style>