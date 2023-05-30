<script>
export default {
    name: 'AppHero'
}
</script>

<template>
    <!-- Hero -->
    <section class="w-11/12 mx-auto px-1 py-48">
        <article class="w-1/3">
            <small class="uppercase my-subheading text-xs text-gray-600 font-semibold">Fresh & tasty bakery every
                day</small>
            <h1 class="my-purple text-6xl">The Perfect Fresh Bread</h1>
            <p class="text-gray-600 text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, iure sed ex
                molestias hic eligendi sit voluptatibus soluta veritatis. Id pariatur architecto cupiditate natus, atque
                nisi.</p>
            <button class="my-purple bg-white py-3 px-9 rounded-[8px] text-sm font-semibold">Explore our products</button>
        </article>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins.scss' as *;
@use '../styles/partials/variables.scss' as *;

article {
    @include flex(column, space-between, flex-start, 2rem);

    h1 {
        font-family: 'Times New Roman', Times, serif;
        font-weight: 900;
    }
}
</style>