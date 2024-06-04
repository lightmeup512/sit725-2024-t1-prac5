const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://hassan:7rF30j14IOS44u7K@cluster0.wtxmdcj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function connect() {
    await client.connect();
    return client.db('Cars');
}

module.exports = {
    connect,
    client
};
