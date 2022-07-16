const mongoose = require("mongoose");

const chapterCreditSchema = new mongoose.Schema({
  grade: {
    type: String,
    trim: true,
  },
  subjectId: {
    type: String,
    trim: true,
  },
  units: [
    {
      unit: {
        type: String,
        trim: true,
      },
      description: {
        type: String,
        trim: true,
      },
      chapters: {
        type: [String],
        trim: true,
      },
      creditHour: {
        type: String,
        trim: true,
      },
    },
  ],
});

const ChapterCreditData = mongoose.model("chaptercredit", chapterCreditSchema);
module.exports = ChapterCreditData;
