import pug from 'pug'

export default
function setRoutes(db) {
    const
        indexTemplate = pug.compileFile(
            'src/nodejs/templates/index.pug',
            { pretty: true }
        ),
        mongo = {
            async getAllUsers(truncate = false) {
                const mongoFilter = {
                    projection: { name: 1, balance: 1, "_id": false }
                };

                return await db.
                collection("users")
                    .find( { }, truncate && mongoFilter )
                    .toArray();
            }
        };

    return {

        async index(request, response) {

            const users = await mongo.getAllUsers();

            const HTML = indexTemplate({
                users
            });

            response.type('text/html; charset=UTF-8');

            return HTML
        },

        async getJSON(request, response) {
            return await mongo.getAllUsers(true)
        },

        appJS(request, response) {
            response.sendFile('app.js')
        },

        icon(request, response) {
            response.type('image/x-icon').code(200).send()
        }
    }
}