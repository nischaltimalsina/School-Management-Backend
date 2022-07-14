require('./config/database')
const express = require("express");
const app = express();
app.use(express.json());

const routineSlotRouter = require('./route/routineSlot.route')
const questionRouter = require('./route/questions.route')

app.use(routineSlotRouter);
app.use(questionRouter);

app.listen(4000,
    ()=>{
       console.log(`Connection is live at 4000`)
    }
)