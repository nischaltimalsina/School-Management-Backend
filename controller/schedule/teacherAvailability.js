const TeacherAvailabilityData = require('../../model/schedule/teacherAvailability')


const addTeacher = async (req, res) => {
  try {
    const addTeacherData = new TeacherAvailabilityData(req.body);
    res.status(201).send(addTeacherData.save());
  } catch (error) {
    res.status(400).send(error);
  }
};

const getTeacher = async (req, res) => {
  try {
    const getTeacherData = await TeacherAvailabilityData.find({});
    res.send(getTeacherData);
  } catch (error) {
    res.status(400).send(error);
  }
};
const getTeacherById = async (req, res) => {
  try {
    const getTeacherDataById = await TeacherAvailabilityData.findById(req.params.id);
    res.send(getTeacherDataById);
  } catch (error) {
    res.status(400).send(error);
  }
};

const patchTeacher = async (req, res) => {
  try {
    const _id = req.params.id;
    const patchTeacherData = await TeacherAvailabilityData.findByIdAndUpdate(
      _id,
      req,
      body,
      { new: true }
    );
    res.send(patchTeacherData);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteTeacher = async (req, res) => {
  try {
    const deleteTeacherData = await TeacherAvailabilityData.findByIdAndDelete(
      req.params.id
    );
    res.send(deleteTeacherData);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  addTeacher,
  getTeacher,
  getTeacherById,
  patchTeacher,
  deleteTeacher,
};
