<template lang="pug">
    ul
        li(v-for="user in users")
            | {{ user.name }}
            span.subtitle balance:
            span.balance {{ user.balance }}
</template>

<script>
    export default {
        name: 'Users',
        data() {
            return {
                gamers: ['Andrey']
            }
        },
        // props: ['users'],
        props: {
            users: Array
        },
        mounted() {
            console.log(`Users mounted...`);
        }
    }
</script>

<style lang="stylus" scoped>
    @import "../stylus/colors"

    ul
        max-width 240px
        padding 1em 3em

        font-size larger

        color lighten(cherry-color, 50%)
        background-color cherry-color

        li
            padding 0 .5em
            &:hover
                background-color darken(cherry-color, 12%)

        span
            &.subtitle
                margin 0 1em
                color cornflowerblue
            &.balance
                color aqua-color
</style>