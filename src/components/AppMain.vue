<script>
import AppOurProducts from './AppOurProducts.vue';
import AppCorporateAndWeddings from './AppCorporateAndWeddings.vue';
import AppShop from './AppShop.vue';
export default {
    name: 'AppMain',
    components: {
        AppOurProducts,
        AppCorporateAndWeddings,
        AppShop
    },
    data() {
        return {

        }
    }
}
</script>

<template>
    <AppOurProducts />
    <AppCorporateAndWeddings />
    <AppShop />
</template>

<style lang="scss"></style>