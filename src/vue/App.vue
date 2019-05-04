<template lang="pug">
    #container
        h1.title Users from MongoDB:
        Users(:users="usersArray")
</template>

<script>
    import Users from "./components/Users.vue"

    export default {
        el: "#container",
        data() {
            return {
                usersArray: ['Anna', 'Andrey']
            }
        },
        components: {
            Users
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

        background-color darken(grey-color, 1.7%)

</style>