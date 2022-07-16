const SubjectCreditData = require("../../model/curriculum/subjectCredit");

const addSubject = async (req, res) => {
  try {
    const addSubjectData = new SubjectCreditData(req.body);
    res.status(201).send(addSubjectData.save());
  } catch (error) {
    res.status(400).send(error);
  }
};

const getSubject = async (req, res) => {
  try {
    const getSubjectData = await SubjectCreditData.find({});
    res.send(getSubjectData);
  } catch (error) {
    res.status(400).send(error);
  }
};
const getSubjectById = async (req, res) => {
  try {
    const getSubjectDataById = await SubjectCreditData.findById(req.params.id);
    res.send(getSubjectDataById);
  } catch (error) {
    res.status(400).send(error);
  }
};

const patchSubject = async (req, res) => {
  try {
    const _id = req.params.id;
    const patchSubjectData = await SubjectCreditData.findByIdAndUpdate(
      _id,
      req.body,
      { new: true }
    );
    res.send(patchSubjectData);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteSubject = async (req, res) => {
  try {
    const deleteSubjectData = await SubjectCreditData.findByIdAndDelete(
      req.params.id
    );
    res.send(deleteSubjectData);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  addSubject,
  getSubject,
  getSubjectById,
  patchSubject,
  deleteSubject,
};
