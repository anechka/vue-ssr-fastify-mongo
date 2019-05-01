import Mongo from 'mongodb'

const
    dataBase = Mongo.MongoClient,
    mongoServer = 'mongodb://localhost:27017',
    mongoDatabase = 'vue'
;

export default {
    index(request, reply) {

        dataBase.connect(
            mongoServer,
            { useNewUrlParser: true },
            (err, client) => {

            console.log("[mongo] Connected successfully to server");

            const db = client.db(mongoDatabase);

            client.close();
        });

        reply
            .type('text/html')
            .send(`<html>Fastify</html>`)
    }
}