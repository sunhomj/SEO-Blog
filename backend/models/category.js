const mongoose = require("mongoose");
// new arrival
const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      max: 32
    },
    // slug does get rid of white space between words to store in database
    slug: {
      type: String,
      unique: true,
      index: true
    }
  },
  { timestamp: true }
);

module.exports = mongoose.model("Category", categorySchema);
