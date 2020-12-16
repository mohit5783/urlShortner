const dotenv = require("dotenv")
dotenv.config()
const MongoClient = require('mongodb').MongoClient;
let _db;
const connectDB = async (callback) => {
   try {
        MongoClient.connect(process.env.CONNECTIONSTRING, { useUnifiedTopology: true }, async (err, client) => {
            _db = client.db("urldb");
            return callback(err);
        })
    }
    catch (e) {
        throw e;
    }
};
const getDb = () => _db;

module.exports = { connectDB, getDb }