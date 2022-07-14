const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/schoolmanagementsystem').then(()=>{
    console.log(`Connected to database Successfully!!`)
}).catch((e)=>{
    console.log(`Connection to database could not be established!!`)
})