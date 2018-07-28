const MongoClient = require("mongodb").MongoClient;

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, client) => {
    if (err) {
      return console.log("Unable to conneect to Mongo DB");
    }
    console.log("Connected to mongodb Server");
    const db = client.db("TodoApp");

    db.collection("Todos")
      .find({ text: "Study Node JS" })
      .toArray()
      .then(
        docs => {
          console.log("Todos");
          console.log(JSON.stringify(docs, undefined, 2));
        },
        err => {
          console.log("Unable to fetch", err);
        }
      );

    // client.close();
  }
);
