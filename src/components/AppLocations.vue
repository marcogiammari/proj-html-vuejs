<script>
import AppLocationCard from './AppLocationCard.vue';
import AppHeading from './AppHeading.vue';
export default {
    name: 'AppLocations',
    components: {
        AppHeading,
        AppLocationCard
    },
    data() {
        return {
            heading: 'Visit our Bakeries',
            subheading: 'Locations',
            cards: [
                {
                    thumb: '../assets/img/new-york-bk-1200x794.jpg',
                    city: 'New York',
                    phone: '1.800.458.556',
                    timetable: {
                        opens: '9:00 AM',
                        closes: '6:00 PM'
                    },
                    bg: 'background-color: #F1F9FB'
                },
                {
                    thumb: '../assets/img/london-bk-1200x794.jpg',
                    city: 'London',
                    phone: '1.300.356.138',
                    timetable: {
                        opens: '8:00 AM',
                        closes: '5:00 PM'
                    },
                    bg: 'background-color: #FAF3E3'
                }
            ]
        }
    }
}
</script>

<template>
    <section>
        <div class="w-11/12 mx-auto flex flex-col gap-12">
            <div class="text-center px-1">
                <AppHeading :heading="heading" :subheading="subheading" />
            </div>
            <div class="flex">
                <AppLocationCard v-for="card in this.cards" :card="card" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped></style>