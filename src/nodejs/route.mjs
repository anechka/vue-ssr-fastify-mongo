import pug from 'pug'

const indexTemplate = pug.compileFile('src/nodejs/templates/index.pug');

export default
function setRoutes(db) {
    return {
        async index(request, reply) {

            const users = await db.collection("users").find({}).toArray();

            const HTML = indexTemplate({
                users
            });

            reply.type('text/html; charset=UTF-8');

            return HTML
        },
        appJS(request, reply) {
            reply.sendFile('app.js')
        },
        icon(request, reply) {
            reply.type('image/x-icon').code(200).send()
        }
    }
}