<script>
import AppHeading from './AppHeading.vue';
export default {
    name: 'AppOrder',
    components: {
        AppHeading
    }
}
</script>

<template>
    <section>
        <div class="w-2/3 mx-auto py-8">
            <small class="my-subheading">Try our seasonal products</small>
            <h2 class="my-heading w-3/5">Order for pick-up or delivery to your home</h2>
            <button class="my-white-btn mt-16 w-fit">Shop Now</button>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    background: center / cover url('../assets/img/call-to-action-bg.jpg');
    padding: 5rem;
    margin: -5rem 0;

    h2 {
        color: white;
        font-size: 3rem;
        line-height: 1;
    }

    button {
        padding: 1rem 2.5rem;
        font-size: 1.1rem;
    }
}
</style>