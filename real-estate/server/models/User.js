
const mongoose = require("mongoose");
Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;
const userSchema = new mongoose.Schema({
  userid: {
    type: String,
    unique: true
    // default: "06PPD" + Math.floor(1000 + Math.random() * 9000)
  },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
});
module.exports = mongoose.model("User", userSchema);