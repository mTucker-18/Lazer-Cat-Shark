const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
  password: {
    type: String,
    trim: true,
    required: true
  },
  address: {
    type: String,
    trim: true
  },
  radius: {
    type: Number,
    required: true
  },
  human_bio: {
    type: String
  },
  likes: {
    type: Array
  },
  likedBy: {
    type: Array
  },
  dog_name: {
    type: Number,
    required: true
  },
  dog_size: {
    type: Number,
    required: true
  },
  dog_energy: {
    type: Number,
    required: true
  }
});

userSchema.methods = {
  checkPassword: function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password);
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10);
  }
};

userSchema.pre('save', function (next) {
  if (!this.password) {
    console.log('models/user.js =======NO PASSWORD PROVIDED=======');
    next();
  } else {
    console.log('models/user.js hashPassword in pre save');
    this.password = this.hashPassword(this.password);
    next();
  }
});

const user = mongoose.model('user', userSchema);

module.exports = user;
