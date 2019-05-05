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
        created() {
            console.log(`Vue running`);

            this.getUsers()
        }
    }
</script>

<style lang="stylus">
    @import "stylus/main"

    #container
        width 100%
        max-width 960px
        margin 0 2em

        background-color lighten(grey-color, 5%)

        h1.title
            padding 0 1.5em

</style>