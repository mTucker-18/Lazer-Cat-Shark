const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const session = require('express-session');
const passport = require('passport');

let db = null;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
// Use passport session
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

// post request to sign in
// app.post('/sign-in', (req, res) => {
//   console.log('user signin');
//   let data = {
//     email: req.body.email,
//     password: req.body.password
//   };
//   db.collection('users').find({email: data.email}, (err, data) => {
//     if (err) throw err;
//     res.json(data);
    // if (!data) {
    //   console.log('noooooooo')
    // }
//     else {
//       res.json({
//         message: 'good job, you did it!',
//         superSuccessDog: true,
//         email: req.body.email
//   });
// }
  // res.end();
// });
// }

app.post('/sign-in', (req, res) => {
  console.log('user signin');
  let data = {
    email: req.body.email,
    password: req.body.password
  };
  db.collection('users').find({email: data.email}).toArray(
    (err, data) => {
      if (err) throw err;
      console.log("hello", data.email);
      res.json({
              message: 'good job, you did it!',
              superSuccessDog: true,
              email: req.body.email
        });
    }
  )
});

// get request finds all users at splash page - should likely be changed to browse page
app.get('/browse', (req, res) => {
  db.collection('users').find({}).toArray(
    (err, data) => {
      if (err) throw err;
      console.log(data);
      res.json(data);
    });
});

// app.post('/browse', (req, res) => {
  // db.collection('users').update({human_name: this.state.human_name},{$push{ likes: [this.state.human_name]}})
// })

// post request inserts user
app.post('/sign-up', (req, res) => {
  let data = {
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    address: req.body.address,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    radius: req.body.radius,
    likes: [],
    likedBy: [],
    dog_name: req.body.dog_name,
    dog_size: req.body.dog_size,
    dog_energy: req.body.dog_energy,
    bio: req.body.bio
  };
  db.collection('users').insertOne(data, (err, data) => {
    if (err) throw err;
    console.log(data);
    res.json(data);
  });
});

// post request updates user with user page fields
app.post('/user-page', (req, res) => {
  console.log('this is more body', req.body);
  let data = {
    address: req.body.address,
    radius: req.body.radius,
    dog_name: req.body.dog_name,
    dog_size: req.body.dog_size,
    dog_energy: req.body.dog_energy,
    bio: req.body.bio
  };
  db.collection('users').findOneAndUpdate({}, data, (err, data) => {
    if (err) throw err;
    console.log(data);
    res.json(data);
  });
});
// post request for saving likes and likedBy profiles in both user and user-liked profiles
// app.post('/browse', (req, res) => {
  // console.log('this is more body', req.body);
  // let data = {
  //   likes = [],  //how to add to these arrays without overriding previous likes?
  //   likedBy = []
  // };
  // db.collection('users').update(
    // {name: this.state.name},
    // {$push: {likes: {this.state.user?}}, data, (err, data) => {
      // if (err) throw err;
      // console.log(data);
      // res.json(data);
    // }} //push document or objectID to likes arrays

  // )
// })

// const MONGODB_URL = 'mongodb://<fetchr>:<Rv6zRxd&r<a3:4-j>@ds233452.mlab.com:33452/lazer-cat-shark';
// const MONGODB_DATABASE = 'fetchr';
// const PORT = 3001;

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
