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
            { name: "Andrey", balance: 100 },
            { name: "Anna",   balance: 200 },
            { name: "Sergey", balance: 300 },
        ]
    );

    await client.close();

})();
