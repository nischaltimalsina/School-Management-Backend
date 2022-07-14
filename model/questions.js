const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  subject: {
    type: String,
    trim: true,
  },
  category: {},
  questions: [],
});

const QuestionsData = mongoose.model("question", questionSchema);
module.exports = QuestionsData;
