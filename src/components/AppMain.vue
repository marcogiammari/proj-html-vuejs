<script>
import AppOurProducts from './AppOurProducts.vue';
import AppCorporateAndWeddings from './AppCorporateAndWeddings.vue';
import AppShop from './AppShop.vue';
import AppBlocks from './AppBlocks.vue';
import AppLocations from './AppLocations.vue';
import AppSharing from './AppSharing.vue';
import AppOrder from './AppOrder.vue';

export default {
    name: 'AppMain',
    components: {
        AppOurProducts,
        AppCorporateAndWeddings,
        AppShop,
        AppBlocks,
        AppLocations,
        AppSharing,
        AppOrder
    },
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="flex flex-col gap-48 mx-auto">
        <AppOurProducts />
        <AppCorporateAndWeddings />
        <AppShop />
        <AppBlocks />
        <AppLocations />
        <AppSharing />
        <AppOrder />
    </div>
</template>

<style lang="scss"></style>