<script>
import AppFooterTop from './AppFooterTop.vue';
import AppFooterBottom from './AppFooterBottom.vue';

export default {
    name: 'AppFooter',
    components: {
        AppFooterTop,
        AppFooterBottom
    }
}
</script>

<template>
    <div class="flex flex-col px-20 pt-36 pb-20 gap-24 relative">
        <AppFooterTop />
        <AppFooterBottom />
    </div>
</template>

<style lang="scss" scoped></style>