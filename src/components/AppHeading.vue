<script>
export default {
    name: 'AppHeading',
    props: {
        heading: String,
        subheading: String
    }
}
</script>

<template>
    <small class="my-subheading">{{ subheading }}</small>
    <h2 class="my-heading">{{ heading }}</h2>
</template>

