import path from 'path'
import Fastify from 'fastify'
import fastifyStatic from 'fastify-static'
import MongoDB from 'mongodb'

import setRoutes from './route.mjs'

const
    __dirname = process.cwd(),
    server = Fastify({ logger: false }),
    dataBaseServer = MongoDB.MongoClient,
    mongoURI = 'mongodb://localhost:27017',
    mongoDatabase = 'vue';

(async () => {
    server.register(fastifyStatic, {
        root: path.join(__dirname, 'static/'),
        prefix: '/static/', // optional: default '/'
    });

    console.log(`Starting project in PATH: ${__dirname}`);

    try {
        const
            mongo = await dataBaseServer.connect(mongoURI, { useNewUrlParser: true });

        console.log("[mongo] Connected successfully to server");


        server.addHook('onClose', async (instance, done) => {
            console.log("[fastify] Stop!");

            await mongo.close();

            console.log("[mongo] Stop!");
            done()
        });

        try {
            const db = await mongo.db(mongoDatabase);
            const routes = setRoutes(db);

            // Declare a routes
            // app.js
            server.get('/static/app.js', routes.appJS);
            // favicon
            server.get('/favicon.ico', routes.icon);
            // index route
            server.get('/', routes.index);

            try {
                let serverAddress = await server.listen(3000);
                console.info(`[fastify] Starting at ${serverAddress}`);
            } catch (e) {
                console.error(e);
                //console.error("[fastify] HTTP port busy");
            }

        } catch (e) {
            console.error(e)
        }


    } catch (e) {
        console.log("[mongo] Connection ERROR");
    }

    process.on('SIGINT', async () => {
        console.log('.. SIGINT ..');

        await server.close();

        console.log('Closing..');
        process.exit()
    })

})();