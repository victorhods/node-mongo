//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID("5a16c1575e031249e335d8f0")
    }, {
        $set: {
            completed: true
        }
    }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        });

    //db.close();
});