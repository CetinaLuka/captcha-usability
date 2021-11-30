const { MongoClient } = require('mongodb');

class MongoService {
    client;
    constructor() {
        const uri = `mongodb+srv://${process.env.REACT_APP_MONGO_USERNAME}:${process.env.REACT_APP_MONGO_PASSWORD}@cluster0.ululh.mongodb.net/<dbname>?retryWrites=true&w=majority`;
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log(uri);
        this.client = client;
    }

    async createUser(user) {
        this.client.connect(err => {
            const collection = this.client.db("captcha").collection("uporabniki");
            const result = collection.insertOne(user);
            console.log(result);
            this.client.close();
            return result;
        });
    }

    async getUser(userId) {
        this.client.connect(err => {
            const collection = this.client.db("captcha").collection("uporabniki");
            const result = collection.findOne(userId);
            this.client.close();
            return result;
        });
    }
}

export default (function () {
    var instance;

    function createInstance() {
        var object = new MongoService();
        return object;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();
