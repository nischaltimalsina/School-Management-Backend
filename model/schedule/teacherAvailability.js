const mongoose = require("mongoose");

const teacherAvaliabilitySchema = new mongoose.Schema({
  teacherId: {
    type: String,
    trim: true,
  },
  startTime: {
    type: Date,
    trim: true,
  },
  endTime: {
    type: Date,
    trim: true,
  },
  assignedPeriods: [
    {
      period: { type: String },
      assigned: { type: Boolean },
    },
  ],
});

const TeacherAvaliabilityData = mongoose.model(
  "teacherslot",
  teacherAvaliabilitySchema
);
module.exports = TeacherAvaliabilityData;
