const mongoose = require("mongoose");

const guestSchema = new mongoose.Schema({
  name : String,
  mobile : String,
  email : String,
});

const guest = mongoose.model("guest", guestSchema);
module.exports = {guest};