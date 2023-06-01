<script>
import { services } from '../data/services';

export default {
    name: 'AppBlock',
    props: {
        content: Object
    },
    data() {
        return {
            services
        }
    },
    methods: {
        getAlign() {
            if (!this.content.infoLeft) {
                return 'flex justify-end'
            }
        }
    }
}
</script>

<template>
    <article class="relative text-white w-full">
        <img class="bg absolute -z-10 h-[48rem] object-cover" :src="services.getImagePath(content.backgroundSrc)"
            :alt="content.backgroundAlt">
        <div class="h-[48rem] flex flex-col justify-between px-28 pt-16 pb-24">
            <div class="flex justify-between items-center">
                <h2 class="my-heading w-2/5">{{ content.heading }}</h2>
                <span class="text-8xl font-thin">{{ content.number }}</span>
            </div>
            <div :class="getAlign()">
                <div class="flex flex-col gap-4 w-2/5">
                    <small class="my-subheading">{{ content.subheading }}</small>
                    <p class="text-xl">{{ content.paragraph }}</p>
                </div>
            </div>
        </div>
    </article>
</template>

<style lang="scss" scoped>
article {
    h2 {
        font-size: 3.25rem;
        line-height: 1;
        color: white;
    }

    .bg {
        filter: brightness(50%) grayscale(.1)
    }

    small {
        color: rgb(230, 229, 229);
    }
}
</style>