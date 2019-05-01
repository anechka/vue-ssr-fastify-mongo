import Fastify from 'fastify'
import routes from './route.mjs'

(async () => {
    const server = Fastify();
    // Declare a route
    server.get('/', routes.index);

    try {
        let serverAddress = await server.listen(3000);
        console.info(`[fastify] Starting at ${serverAddress}`);
    } catch (e) {
        console.error("[fastify] HTTP port busy");
        throw e
    }

})();