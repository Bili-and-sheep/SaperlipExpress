const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
  UserName: { type: String, required: true },
  pseudo: { type: String, required: true },
  pp: { type: String, required: true },
  userId: { type: String, required: true },
});

module.exports = mongoose.model('rouble', thingSchema);