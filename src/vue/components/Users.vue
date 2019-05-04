<template lang="pug">
    ul.subtitle
        li(v-for="user in users") {{ user }}
</template>

<script>
    export default {
        name: "Users",
        data() {
            return {
                gamers: ['Andrey']
            }
        },
        props: ['users'],
        /*props: {
            users: Array
        },*/
        mounted() {
            console.log("Users mounted...", this.users);
        }
    }
</script>

<style lang="stylus" scoped>
    @import "../stylus/colors"

    ul.subtitle
        padding 25px

        color lighten(cherry-color, 50%)
        background-color cherry-color
</style>