const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();

let db = null;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res) => {
  db.collection('users').find({}).toArray(
    (err, data) => {
      if (err) throw err;
      console.log(data);
      res.json(data);
    });
});

app.post('/sign-up', (req, res) => {
  let data = {
    email: req.body.email,
    password: req.body.password,
    human_name: req.body.human_name
  };
  db.collection('users').insertOne(data, (err, data) => {
    if (err) throw err;
    console.log(data);
    res.json(data);
  });
});



const MONGODB_URL = 'mongodb://localhost:27017/fetchr';
const MONGODB_DATABASE = 'fetchr';
const PORT = 3001;
//
//
MongoClient.connect(MONGODB_URL, { useNewUrlParser: true }, (err, client) => {
  if (err) throw err;
  console.log('--MongoDB connection successful');
  db = client.db(MONGODB_DATABASE);

  app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
  });
});
