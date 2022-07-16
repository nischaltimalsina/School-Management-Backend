const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  class: { type: String },
  sessions: [
    {
      id: { type: String },
      isAssigned: { type: Boolean },
      assignedTo: { type: String },
    },
  ],
});
