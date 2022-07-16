const mongoose = require("mongoose");

const RoutineSlot = new mongoose.Schema({
  routineLevel: {
    type: String,
    trim: true,
  },
  startTime: {
    type: String,
    trim: true,
  },
  endTime: {
    type: String,
  },
  sessionDuration: {
    type: String,
    trim: true,
  },
  breakDuration: {
    type: String,
    trim: true,
  },
  dayOff:{
    type: String,
    trim: true,
  },
  slots: [
    {
      day: {
        type: String,
        trim: true,
      },
      sessions: {
        type: String,
        trim: true,
      },
      breakAfter: {
        type: String,
        trim: true,
      },
    },
  ],
});

const RoutineSlotData = mongoose.model("routineslot", RoutineSlot);
module.exports = RoutineSlotData;
