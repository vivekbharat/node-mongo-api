const MongoClient = require("mongodb").MongoClient;

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, client) => {
    if (err) {
      return console.log("Unable to conneect to Mongo DB");
    }
    console.log("Connected to mongodb Server");
    const db = client.db("TodoApp");

    // db.collection("Todos").insertOne(
    //   {
    //     text: "Something to do",
    //     completed: false
    //   },
    //   (err, result) => {
    //     if (err) {
    //       return console.log("unable to insert todo", err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //   }
    // );

    db.collection("Users").insertOne(
      {
        name: "Ravi",
        age: 28,
        location: "NY"
      },
      (err, result) => {
        if (err) {
          return console.log("Unable to insert user to db");
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
      }
    );

    client.close();
  }
);
