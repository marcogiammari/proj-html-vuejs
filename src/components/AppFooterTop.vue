<script>
import AppMenu from './AppMenu.vue';
export default {
    name: 'AppFooterLeft',
    components: {
        AppMenu
    },
    data() {
        return {
            menu: {
                items: [
                    'Shop',
                    'About',
                    'Gallery',
                    'Locations',
                    'Journal',
                    'Contact',
                    'Orders'
                ],
                isCartActive: true,
                style: 'capitalize text-[1rem]'
            }
        }
    }
}
</script>

<template>
    <section>
        <div class="flex">
            <div class="w-1/2 flex flex-col items-start gap-10">
                <img class="w-fit" src="../assets/img/avada-bakery-logo.png" alt="bakery logo">
                <AppMenu :menu="this.menu" />
            </div>
            <div class="w-1/2 flex flex-col items-end gap-10">
                <h3 class="my-heading">Subscribe to our Newsletter</h3>
                <div class="flex justify-end gap-5 w-full">
                    <input type="email" class="border rounded-[6px] py-2 ps-3 w-[50%]" placeholder="Enter email address*">
                    <button class="my-primary-btn">Subscribe</button>
                </div>
            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped>
h3 {
    font-size: 1.5rem;
}
</style>