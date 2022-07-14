const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  subCode: {
    type: String,
    required: true,
    trim: true,
  },
  subName: {
    type: String,
    required: true,
    trim: true,
  },
  subClass: {
    type: String,
    required: true,
    trim: true,
  },
  subTeacher: {
    type: [String],
  },
});

const CourseData = mongoose.model("course", courseSchema);
module.exports = CourseData;
