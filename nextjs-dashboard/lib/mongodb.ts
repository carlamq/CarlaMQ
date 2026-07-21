import { MongoClient } from "mongodb";

import dns from 'dns'
dns.setServers(['8.8.8.8', '8.8.4.4'])


const uri = process.env.MONGODB_URI
if (!uri) {
    throw new Error("Falta la variable de entorno MONGO_URI");
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>

declare global {
    var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri);
        global._mongoClientPromise = client.connect();
    }   
    clientPromise = global._mongoClientPromise;
} else {
    client = new MongoClient(uri);
    clientPromise = client.connect();
}

export default clientPromise;