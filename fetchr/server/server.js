const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
app.use(express.json());

function logger(req, res, next){
  console.log(req.method, req.url);
  next();
}
app.use(logger);
const MONGODB_URL = 'mongodb://localhost:27017/fetchr';
const MONGODB_DATABASE = 'fetchr';
const PORT = 3001;

let db;

MongoClient.connect(MONGODB_URL, { useNewUrlParser: true }, (err, client) => {
  if (err) throw err;
  console.log("--MongoDB connection successful");
  db = client.db(MONGODB_DATABASE);

  app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
  });
});
