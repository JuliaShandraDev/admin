const { model, Schema } = require("mongoose");

const Admin = new Schema({
  name: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  gender: { type: String, required: false },
  birthdate: { type: Date, required: false },
  city: { type: String, required: false },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, required: true },
  profiles: { type: Array, required: false },
});

module.exports = model("Admin", Admin);
