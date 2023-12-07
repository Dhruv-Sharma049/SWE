const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
});

const newUser = mongoose.model("newUser", schema);

module.exports = newUser;
