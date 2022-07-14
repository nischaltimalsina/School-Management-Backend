const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const courseContentSchema = new Schema({
  subCode: {
    type: String,
    required: true,
    trim: true,
  },
  chapters: [
    {
      name: {
        type: String,
        trim: true,
      },
      question: [
        {
          type: { type: String, trim: true },
          marks: { type: String, trim: true },
        },
      ],
    },
  ],
  subType: {
    theory: {
      marks: {
        type: Number,
      },
    },
    practical: {
      marks: {
        type: Number,
      },
    },
    project: {
      marks: {
        type: Number,
      },
    },
  },
});
