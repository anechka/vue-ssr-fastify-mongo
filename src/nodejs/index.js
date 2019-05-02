import Fastify from 'fastify'
import setRoutes from './route.mjs'

import Mongo from 'mongodb'

(async () => {
    const server = Fastify({ logger: false });

    try {
        const client = await Mongo.MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
        console.log("[mongo] Connected successfully to server");


        server.addHook('onClose', async (instance, done) => {
            console.log("[fastify] Stop!");

            await client.close();

            done()
        });

        try {
            const db = await client.db('vue');
            const routes = setRoutes(db);
            // Declare a route
            server.get('/', routes.index);

            try {
                let serverAddress = await server.listen(3000);
                console.info(`[fastify] Starting at ${serverAddress}`);
            } catch (e) {
                console.error("[fastify] HTTP port busy");
            }

        } catch (e) {
            console.log()
        }


    } catch (e) {
        console.log("[mongo] Connected ERROR");
    }

    process.on('SIGINT', async () => {
        await server.close();

        process.exit()
    })

})();