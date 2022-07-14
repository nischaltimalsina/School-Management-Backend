const express = require('express');
const router = express.Router()
const routineSlotController = require('../controller/routineSlot.controller');
router.post('/addslot',routineSlotController.addSlot);
router.get('/getslot',routineSlotController.getSlot);
router.patch('/editslot',routineSlotController.patchSlot);
router.delete('/deleteslot',routineSlotController.deleteSlot);

module.exports=router;