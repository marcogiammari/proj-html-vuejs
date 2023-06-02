<script>
export default {
    name: 'AppSlider',
    props: {
        products: Array,
        slides: Number,
        info: Boolean,
        infoHover: Boolean,
        selectHover: Boolean
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
    <button @click="previous()" class="absolute left-0 bottom-1/2 flex justify-center items-center h-20 w-10 z-10">
        <div class="h-2 w-2 rotate-45" id="prev-btn"></div>
    </button>
    <button @click="next()" class="absolute right-0 bottom-1/2 flex justify-center items-center h-20 w-10 z-10">
        <div class="h-2 w-2 rotate-[225deg]" id="next-btn"></div>
    </button>
    <div class="my-card" v-for="product, i in products" v-show="isDisplayed(i)">
        <div class="relative">
            <img :src="getImagePath(product.img)" :alt="product.name">
            <div class="info-txt text-center" v-show="info">
                <h3 class="my-heading">{{ product.name }}</h3>
                <p>${{ product.minPrice.toFixed(2) }} - ${{ product.maxPrice.toFixed(2) }}</p>
            </div>
            <div v-show="infoHover" id="info-hover"
                class="hidden my-heading absolute flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <h5>{{ product.name }}</h5>
                <p class="thin">${{ product.minPrice.toFixed(2) }} - ${{ product.maxPrice.toFixed(2) }}</p>
            </div>
            <div v-show="selectHover" id="select-hover"
                class="hidden my-heading absolute top-1/2 -translate-y-1/2 text-center w-full">
                <div class="w-full">
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

    p {
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