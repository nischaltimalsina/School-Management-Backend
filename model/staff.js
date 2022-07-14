const mongoose = require("mongoose");

const StaffSchema = new mongoose.Schema({
  staffId: {
    type: String,
    trim: true,
  },
  username: {
    type: String,
    trim: true,
  },
  firstname: {
    type: String,
    trim: true,
  },
  middlename: {
    type: String,
    trim: true,
  },
  lastname: {
    type: String,
    trim: true,
  },
  dateOfBirth: {
    type: Date,
    trim: true,
  },
  nationality: {
    type: String,
    trim: true,
  },
  gender: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  mobile: {
    type: String,
    trim: true,
  },
  employeeType: {
    type: String,
    trim: true,
  },
  role: {
    type: [String],
    trim: true,
  },
  citizenship: {
    type: String,
    trim: true,
  },
  pan: {
    type: String,
    trim: true,
  },
  education: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    trim: true,
  },
});
const StaffData = new mongoose.model("staff", StaffSchema);
module.exports = StaffData;
