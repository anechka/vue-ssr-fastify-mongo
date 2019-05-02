import Mongo from 'mongodb'

const
    server = 'mongodb://localhost:27017',
    database = 'vue';

(async () => {
    const
        client = await Mongo.MongoClient.connect(server, { useNewUrlParser: true }),
        db     = await client.db(database);

    await db.collection("users").insertMany(
        [
            { user: "Andrey" },
            { user: "Anna" },
            { user: "Sergey" },
        ]
    );

    await client.close();

})();
