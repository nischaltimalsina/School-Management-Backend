const mongoose = require("mongoose");

const routineSchema = new mongoose.Schema({
  day: {
    type: String,
    trim: true,
  },
  session: [{
    class: {
      type: String,
      trim: true,
    },
    period: {
      type: String,
      trim: true,
    },
    subject: {
      type: String,
      trim: true,
    },
  }],
});
