<script>
export default {
    name: 'AppOurProducts',
    props: {
        products: Array
    },
    data() {
        return {
            current: {
                first: 0,
                second: 1
            },
        }
    },
    methods: {
        getImagePath(imgPath) {
            return new URL(imgPath, import.meta.url).href;
        },
        next() {
            this.current.second == this.products.length - 1 ? this.current.second = 0 : this.current.second++
            this.current.first == this.products.length - 1 ? this.current.first = 0 : this.current.first++
        },
        previous() {
            this.current.first == 0 ? this.current.first = this.products.length - 1 : this.current.first--
            this.current.second == 0 ? this.current.second = this.products.length - 1 : this.current.second--
        }
    }
}
</script>

<template>
    <section>
        <div class="flex justify-between w-11/12 mx-auto px-1 py-48">
            <article class="w-1/3 flex flex-col justify-start">
                <small class="uppercase my-subheading text-xs text-gray-600 font-semibold">Our products</small>
                <h1 class="my-purple text-4xl">All our delectable pastries are backed fresh in our Kitchen very morning, and
                    are made with all-natural, all organic ingredients</h1>
                <button class="my-purple bg-white py-3 px-9 rounded-[8px] text-sm font-semibold">Start Shopping</button>
            </article>
            <div class="w-2/3 h-[42rem] flex justify-end">
                <div class="my-carousel relative flex gap-5">
                    <button @click="previous()"
                        class="absolute left-0 bottom-1/2 flex justify-center items-center h-20 w-10">
                        <div class="h-2 w-2 rotate-45" id="prev-btn"></div>
                    </button>
                    <img :src="getImagePath(products[current.first].img)" :alt="products[current.first].name">
                    <img :src="getImagePath(products[current.second].img)" :alt="products[current.second].name">
                    <button @click="next()" class="absolute right-0 bottom-1/2 flex justify-center items-center h-20 w-10">
                        <div class="h-2 w-2 rotate-[225deg]" id="prev-btn"></div>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins.scss' as *;
@use '../styles/partials/variables.scss' as *;

section {
    article {
        @include flex(column, flex-start, flex-start, 2rem);

        h1 {
            font-family: 'Source Serif Pro', serif;
        }

        button {
            color: white;
            background-color: $purple;

            &:hover {
                color: $purple;
                background-color: $pink;
                transform: scale(1.1);
                transition: .3s;
            }
        }
    }

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
}
</style>