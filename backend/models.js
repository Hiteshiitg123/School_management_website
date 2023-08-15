const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,  // hashed password
  role: { type: String, enum: ["admin", "teacher", "student", "guest"] },
  firstName: String,
  lastName: String,
  father: String,
  mother: String,
  DOB: String,
  class: String,
  adress: String,
  rollcall : String,
  gender : String,
  mobile : String,
  email : String,
  Performance : String,
  subject : String,
  qualifications : String,
});

const User = mongoose.model("User", userSchema);

module.exports = {User};