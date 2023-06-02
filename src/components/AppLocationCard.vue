<script>
import { services } from '../data/services';

export default {
    name: 'AppLocationCard',
    props: {
        card: Object
    },
    data() {
        return {
            services
        }
    }
}
</script>

<template>
    <div class="w-1/2 flex flex-col text-center text-gray-600 font-semibold">
        <img :src="services.getImagePath(card.thumb)" :alt="card.city">
        <div :style="card.bg" class="pb-12">
            <h2 class="my-heading p-4">{{ card.city }}</h2>
            <div class="flex">
                <div class="w-1/3">
                    <small class="my-subheading">Call us</small>
                    <p class="pt-2">{{ card.phone }}</p>
                </div>
                <div class="w-1/3">
                    <small class="my-subheading">Open all week</small>
                    <p class="pt-2">{{ card.timetable.opens }} - {{ card.timetable.closes }}</p>
                </div>
                <div class="w-1/3">
                    <button class="my-white-btn py-3 px-9 rounded-[8px] text-sm font-semibold">
                        View Map
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>