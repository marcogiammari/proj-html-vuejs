<script>
import AppHeading from './AppHeading.vue';
export default {
    name: 'AppSharing',
    components: {
        AppHeading
    },
    data() {
        return {
            heading: 'Let\'s stay in touch',
            subheading: 'Made for sharing',
            buttonTxt: 'Follow Us'
        }
    }
}
</script>

<template>
    <section>
        <div class="w-11/12 mx-auto grid-container place-content-between">
            <div><img src="../assets/img/social-1.jpg" alt="social"></div>
            <div class="cta flex justify-center items-center flex-col text-center">
                <AppHeading :heading="heading" :subheading="subheading" :hasButton="true" :buttonTxt="buttonTxt" />
            </div>
            <div><img src="../assets/img/social-2.jpg" alt="social"></div>
            <div><img src="../assets/img/social-3.jpg" alt="social"></div>
            <div><img src="../assets/img/social-4.jpg" alt="social"></div>
            <div><img src="../assets/img/social-5.jpg" alt="social"></div>
            <div><img src="../assets/img/social-6.jpg" alt="social"></div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;

.grid-container {
    display: grid;
    gap: 3rem;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, auto);

    .card {
        border: 1px solid red;
    }

    .cta {
        grid-column: span 2;
        background: $tertiarycolor;
    }

}
</style>