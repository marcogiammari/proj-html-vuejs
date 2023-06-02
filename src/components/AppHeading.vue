<script>
export default {
    name: 'AppHeading',
    props: {
        heading: String,
        subheading: String,
        hasButton: Boolean,
        buttonTxt: String
    }
}
</script>

<template>
    <small class="my-subheading">{{ subheading }}</small>
    <h2 class="my-heading">{{ heading }}</h2>
    <button v-show="hasButton" class="my-primary-btn mt-8 w-fit">{{ buttonTxt }}</button>
</template>

