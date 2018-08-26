const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  human_name: {
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

const User = mongoose.model('User', UserSchema);

module.exports = User;
