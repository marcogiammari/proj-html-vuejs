<script>
export default {
    name: 'AppHero'
}
</script>

<template>
    <!-- Hero -->
    <section class="relative">
        <div class="w-11/12 mx-auto pt-48">
            <article class="w-1/3">
                <small class="my-subheading">Fresh & tasty bakery every
                    day</small>
                <h1 class="my-heading">The Perfect Fresh Bread</h1>
                <p class="text-gray-500 text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, iure sed
                    ex
                    molestias hic eligendi sit voluptatibus soluta veritatis. Id pariatur architecto cupiditate natus, atque
                    nisi.</p>
                <button class="my-white-btn py-3 px-9 rounded-[8px] text-sm font-semibold">
                    Explore our products
                </button>
            </article>
        </div>
        <div class="absolute right-2 top-0 flex flex-col gap-2">
            <div class="box flex flex-col justify-between items-center gap-1 bg-white aspect-square rounded-[4px] p-2">
                <img src="../assets/img/demos-logo.png" alt="">
                <span class="text-sm text-gray-500 font-semibold">
                    Demos
                </span>
            </div>
            <div class="box flex flex-col justify-between items-center bg-white aspect-square rounded-[4px] p-2">
                <div class="flex justify-center text-green-500 ">
                    <small class="">$</small>
                    <p class="text-2xl font-bold">39</p>
                </div>
                <span class="text-sm text-gray-500 font-semibold">
                    On Sale
                </span>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins.scss' as *;

section {
    article {
        @include flex(column, space-between, flex-start, 2rem);

        h1 {
            font-size: 3.75rem;
            line-height: 1;
        }
    }

    .box {
        box-shadow: 0 0 10px 5px lightgray;
    }
}
</style>