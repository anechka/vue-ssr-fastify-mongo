<template lang="pug">
    #container
        h1.title Users from MongoDB:
        Users(:users="usersArray")
</template>

<script>
    import ky from 'ky'
    import Users from './components/Users.vue'

    const jsonUsersApi = 'http://127.0.0.1:3000/users'

    export default {
        el: '#container',
        data() {
            return {
                usersArray: []
            }
        },
        components: {
            Users
        },
        methods: {
            async getUsers() {
                this.usersArray = await ky.get(jsonUsersApi).json()
            }
        },
        mounted() {
            console.log(`Vue running`);

            this.getUsers()
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

        background-color lighten(grey-color, 5%)

</style>