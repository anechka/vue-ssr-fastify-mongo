<template lang="pug">
    #container
        h1.title Vue app
</template>

<script>
    export default {
        el: "#container",
        data() {
            return {}
        },
        methods: {
        },
        mounted() {
            console.log("Vue running...");
        }
    }
</script>

<style lang="stylus">
    @import "stylus/main"

    #container
        display grid

        width 100%
        max-width 960px

        align-items center
        justify-self center

        padding 0 25px

        background-color darken(grey-color, 10%)

</style>