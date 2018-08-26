const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const session = require('express-session');
const passport = require('./passport');

let db = null;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(
  session({
    secret: 'leaping-llama',
    resave: false,
    saveUninitialized: false
  })
);
app.use((req, res, next) => {
  console.log('req.session', req.session);
  return next();
});
app.use(passport.initialize());
app.use(passport.session()); // calls serializeUser and deserializeUser

app.post('/sign-in', (req, res) => {
  console.log('user signin');
  req.session.username = req.body.username;
  res.end();
});

app.get('/', (req, res) => {
  db.collection('users').find({}).toArray(
    (err, data) => {
      if (err) throw err;
      console.log(data);
      res.json(data);
    });
});

app.post('/sign-up', (req, res) => {
  console.log('this is body', req.body);
  let data = {
    email: req.body.email,
    password: req.body.password,
    human_name: req.body.name
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
