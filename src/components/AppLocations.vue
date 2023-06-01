<script>
import AppHeading from './AppHeading.vue';
export default {
    name: 'AppLocations',
    components: {
        AppHeading
    },
    data() {
        return {
            heading: 'Visit our Bakeries',
            subheading: 'Locations'
        }
    }
}
</script>

<template>
    <section>
        <AppHeading :heading="heading" :subheading="subheading" />
    </section>
</template>

<style lang="scss" scoped></style>