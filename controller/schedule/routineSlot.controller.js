const RoutineSlotData = require("../model/routineSlot");

const getSlot = async (req, res) => {
  try {
    const getSlotData = await RoutineSlotData.find({});
    res.send(getSlotData);
  } catch (error) {
    res.status(400).send(error);
  }
};

const addSlot = async (req, res) => {
  try {
    const addSlotData = new RoutineSlotData(req.body);
    res.status(201).send(addSlotData.save());
  } catch (error) {
    res.status(400).send(error);
  }
};

const patchSlot = async (req, res) => {
  try {
    const _id = req.params.id
    const patchSlotData = await RoutineSlotData.findByIdAndUpdate(_id, req.body ,{new:true})
    res.send(patchSlotData)
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteSlot = async (req, res) => {
    try {
      const _id = req.params.id
      const deleteSlotData = await RoutineSlotData.findByIdAndDelete(_id)
      res.send(deleteSlotData)
    } catch (error) {
      res.status(500).send(error);
    }
  };

module.exports={
    getSlot,
    addSlot,
    patchSlot,
    deleteSlot
}