const { MongoClient, MongoRuntimeError } = require('mongodb');
// Connection URI
const uri = "mongodb://127.0.0.1:27017/testemongodb"
// Create a new MongoClient
const client = new MongoClient(uri)

async function run(){
    try{
        await client.connect();
        console.log("Conectado ao MongoDB!");
    }
    catch{
        console.log(err);
    }
}
run();

module.exports = client;