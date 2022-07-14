const QuestionsData = require("../model/questions");

const addQuestion = async (req, res) => {
  try {
    const addQuestionData = new QuestionsData(req.body);
    res.status(201).send(addQuestionData.save());
  } catch (error) {
    res.status(400).send(error);
  }
};

const getQuestion = async (req, res) => {
  try {
    const getQuestionData = await QuestionsData.find({});
    res.send(getQuestionData);
  } catch (error) {
    res.status(400).send(error);
  }
};

const patchQuestion = async (req, res) => {
  try {
    const _id = req.params.id;
    const patchQuestionData = await QuestionsData.findByIdAndUpdate(
      _id,
      req.body,
      { new: true }
    );
    res.send(patchQuestionData);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteQuestion = async (req, res) => {
  try {
    const _id = req.params.id;
    const deleteQuestionData = await QuestionsData.findByIdAndDelete(_id);
    res.send(deleteQuestionData)
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports ={
    getQuestion,
    addQuestion,
    patchQuestion,
    deleteQuestion
}