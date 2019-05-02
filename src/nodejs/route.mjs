export default
function setRoutes(db) {
    return {
        async index(request, reply) {

            const items = await db.collection("users").find({}).toArray();
            console.log(items);

            reply
                .type('text/html; charset=UTF-8')
                .send(`<html>${JSON.stringify(items)}</html>`)
        }
    }
}