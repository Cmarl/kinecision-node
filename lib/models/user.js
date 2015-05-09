'use strict';

var Mongoose = require('mongoose');

var userSchema = Mongoose.Schema({
  firebaseId: {type: String, required: true},
  createdAt : {type: Date, required: true, default: Date.now},
<<<<<<< HEAD
  name: {type: String},
  age: {type: Number},
  email: {type: String}
=======
  sex: {type: String},
  name: {type: String},
  age: {type: Number},
  email: {type: String},
  twitter: {type: String}
>>>>>>> 6d2e75af937a5ffbbffe582f268f2b939cd93622
});

var User = Mongoose.model('User', userSchema);
module.exports = User;
