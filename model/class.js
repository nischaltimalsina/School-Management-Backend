const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    medium:{
        type:String,
        trim:true
    },
    name:{
        type:String,
        trim:true
    },
    sections:{
        type:[String],
        trim:true
    },
})