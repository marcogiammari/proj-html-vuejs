<script>
import { store } from '../data/store';
import AppSlider from './AppSlider.vue';
import AppHeading from './AppHeading.vue';
export default {
    components: {
        AppSlider,
        AppHeading
    },
    name: 'AppOurProducts',
    data() {
        return {
            heading: 'All our delectable pastries are backed fresh in our Kitchen very morning, and are made with all-natural, all organic ingredients',
            subheading: 'Our products',
            store,
        }
    },

}
</script>

<template>
    <section>
        <div class="flex justify-between w-11/12 mx-auto px-1 pt-48 gap-20">
            <article class="w-1/3 flex flex-col items-start gap-8">
                <AppHeading :heading="this.heading" :subheading="this.subheading" />
                <button class="my-primary-btn py-3 px-9 rounded-[8px] text-sm font-semibold">Start Shopping</button>
            </article>
            <div class="my-carousel w-2/3 h-[42rem] flex justify-end">
                <div class="relative flex gap-5">
                    <AppSlider :products="store.products" :slides="2" :info="false" />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped></style>