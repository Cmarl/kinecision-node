'use strict';

var Mongoose = require('mongoose');

var decisionSchema = Mongoose.Schema({
  userId: {type: String, required: true},
  decisions: {type: Array}
});

var Decision = Mongoose.model('Decision', decisionSchema);
module.exports = Decision;
