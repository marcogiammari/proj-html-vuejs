<script>
import AppHeading from './AppHeading.vue';
export default {
    name: 'AppCorporateAndWeddings',
    components: {
        AppHeading
    },
    data() {
        return {
            heading: 'Baking Special Moments',
            subheading: 'Corporate & Weddings'
        }
    }
}
</script>

<template>
    <section class="pb-48">
        <div class="w-11/12 mx-auto flex flex-col gap-12">
            <div class="text-center px-1">
                <AppHeading :heading="this.heading" :subheading="this.subheading" />
            </div>
            <div class="flex">
                <div class="w-1/2" id="corporate"></div>
                <div class="w-1/2" id="weddings"></div>
            </div>
        </div>
    </section>
</template>

<style scoped>
#corporate {
    background: center / contain no-repeat url(../assets/img/corporate-bg.jpg);
    height: 45rem;
}

#weddings {
    background: center / contain no-repeat url(../assets/img/wedding-bg.jpg);
    height: 45rem;
}
</style>