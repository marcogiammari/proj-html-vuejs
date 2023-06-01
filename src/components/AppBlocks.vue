<script>
import AppBlock from './AppBlock.vue';
export default {
    name: 'AppBlocks',
    components: {
        AppBlock
    },
    data() {
        return {
            content: [
                {
                    heading: 'Tell what you have in mind',
                    number: '01',
                    subheading: 'Manual ingredients selection',
                    paragraph: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et labore recusandae sit quidem quibusdam dignissimos aliquid. Provident molestiae non doloribus?',
                    backgroundSrc: '../assets/img/bakery-process-1.jpg',
                    backgroundAlt: 'Bakery Process 1',
                    infoLeft: false
                },
                {
                    heading: 'We Start Baking',
                    number: '02',
                    subheading: 'Sweet & delicious',
                    paragraph: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et labore recusandae sit quidem quibusdam dignissimos aliquid. Provident molestiae non doloribus?',
                    backgroundSrc: '../assets/img/bakery-process-2.jpg',
                    backgroundAlt: 'Bakery Process 2',
                    infoLeft: true
                },
                {
                    heading: 'Delivered to your home',
                    number: '03',
                    subheading: 'Baked to order & gift wrapped',
                    paragraph: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et labore recusandae sit quidem quibusdam dignissimos aliquid. Provident molestiae non doloribus?',
                    backgroundSrc: '../assets/img/bakery-process-1.jpg',
                    backgroundAlt: 'Bakery Process 1',
                    infoLeft: true
                },
            ]
        }
    }
}
</script>

<template>
    <section>
        <div class="w-11/12 mx-auto flex flex-col items-center gap-12 h-[1080px]">
            <AppBlock :content="content[0]" />
            <div class="grid grid-cols-2 gap-8">
                <AppBlock :content="content[1]" />
                <article id="quote-block" class="flex flex-col gap-10 p-20">
                    <small class="my-subheading">Don't just take our word for it</small>
                    <h2 class="my-heading">
                        "Finally found an alternative to the mass produced products. Something that
                        incorporates real organic ingredients, nutrients dense wellness while promoting sustainability and
                        activity."
                    </h2>
                    <p class="text-gray-600">Rachel Cooper, Founder</p>
                </article>
            </div>
            <AppBlock :content="content[2]" />
        </div>
    </section>
</template>    

<style lang="scss" scoped>
@use '../styles/partials/variables.scss' as *;

#quote-block {
    background-color: $tertiarycolor;

    h2 {
        font-size: 3rem;
        line-height: 1;
    }
}
</style>