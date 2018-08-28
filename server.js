const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const session = require('express-session');
const passport = require('passport');

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
  req.session.username = req.body.email;

  // maybe we want to do a DB query for more info here?
  res.json({
    message: "good job, you did it!",
    superSuccessDog: true,
  })
  //res.end();
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
    name: req.body.name
  };
  db.collection('users').insertOne(data, (err, data) => {
    if (err) throw err;
    console.log(data);
    res.json(data);
  });
});

<<<<<<< HEAD
app.post('/sign-in', (req, res) => {
  console.log('body', req.body);
  let data = {
    email: req.body.email,
    password: req.body.password,
  };
  db.collection('users').findOne({email: data.email}, (err, user) => {
    if (err) throw err;
    console.log(data);
    //passport.authenticate(data),
    // (req, res) => {
      // console.log('logged in', req.user);
      // var userInfo = {
        // email: req.user.email
      // }
      // res.send(userInfo);
    }
    res.json(data);
  })
})


const MONGODB_URL = 'mongodb://localhost:27017/fetchr';
=======
const MONGODB_URL = 'mongodb://<fetchr>:<Rv6zRxd&r<a3:4-j>@ds233452.mlab.com:33452/lazer-cat-shark';
>>>>>>> 7b605f8a55285252b7752ce2a709eae1619719ad
const MONGODB_DATABASE = 'fetchr';
const PORT = 3001;

// const MONGODB_URL = 'mongodb://localhost:27017/fetchr';
// const MONGODB_DATABASE = 'fetchr';
// const PORT = 3001;
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
