<script>
import { store } from '../data/store';
export default {
    name: 'AppFooterBottom',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <section>
        <div class="flex">
            <div class="w-1/2">
                <small class="text-gray-500">
                    © Copyright 2012-2020 | Avada Theme by ThemeFusion | All Rights Reserved | Powered by Wordpress
                </small>
            </div>
            <div class="w-1/2 flex justify-end gap-12 text-xl">
                <a href="#" v-for="icon in store.icons"><i :class="icon"></i></a>
            </div>
        </div>
        <div class="up-btn absolute right-16 bottom-6">
            <a href="#header">
                <button class="bg-gray-600 w-11 h-11 rounded-lg">
                    <i class="fa-solid fa-chevron-up"></i>
                </button>
            </a>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;

i {
    color: $primarycolor
}

.up-btn i {
    color: white;
    font-size: 14px;
}
</style>