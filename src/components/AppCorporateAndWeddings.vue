<script>
import AppHeading from './AppHeading.vue';
export default {
    name: 'AppCorporateAndWeddings',
    components: {
        AppHeading
    },
    data() {
        return {
        }
    }
}
</script>

<template>
    <section>
        <div class="w-11/12 mx-auto flex flex-col gap-12">
            <div class="text-center px-1">
                <AppHeading heading='Baking Special Moments' subheading='Corporate & Weddings' />
            </div>
            <div class="flex gap-10">
                <div class="w-1/2 relative" id="corporate">
                    <div class="w-full h-full justify-center items-center absolute -z-10" id="corporate-hover">
                        <div class="hidden h-full flex-col items-center justify-center">
                            <AppHeading heading="Corporate Events" subheading="International Bakery" hasButton="true"
                                buttonTxt="Explore More" />
                        </div>
                    </div>
                </div>
                <div>

                </div>
                <div class="w-1/2 relative" id="weddings">
                    <div class="w-full h-full justify-center items-center absolute -z-10" id="weddings-hover">
                        <div class="hidden h-full flex-col items-center justify-center">
                            <AppHeading heading="Weddings & Parties" subheading="Private Dining Hall" hasButton="true"
                                buttonTxt="Explore More" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    #corporate {
        background: center / contain no-repeat url('../assets/img/corporate-bg.jpg');

        &:hover #corporate-hover {
            z-index: 10;
        }

        #corporate-hover {
            background: center / contain no-repeat url('../assets/img/corporate-hover-bg.jpg');
        }
    }

    #weddings {
        background: center / contain no-repeat url('../assets/img/wedding-bg.jpg');

        &:hover #weddings-hover {
            z-index: 10;
        }

        #weddings-hover {
            background: center / contain no-repeat url('../assets/img/wedding-hover-bg.jpg');
        }
    }
}
</style>