const mongoose = require("mongoose");

const subjectCreditSchema = new mongoose.Schema({
  level: {
    type: Number,
    trim: true,
  },
  subjectId: {
    type: String,
    trim: true,
  },
  creditHours: {
    type: Number,
    trim: true,
  },
  annualWorkHours: {
    type: String,
    trim: true,
  },
});

const SubjectCreditData = mongoose.model("subjectcredit", subjectCreditSchema);
module.exports = SubjectCreditData;
