const mongoose = require("mongoose");

const argonautSchema = mongoose.Schema({
  nom: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("argonaut", argonautSchema);
