const ChapterCreditData = require("../../model/curriculum/chapterCredit");

const addChapter = async (req, res) => {
  try {
    const addChapterData = new ChapterCreditData(req.body);
    res.status(201).send(addChapterData.save());
  } catch (error) {
    res.status(400).send(error);
  }
};

const getChapter = async (req, res) => {
  try {
    const getChapterData = await ChapterCreditData.find({});
    res.send(getChapterData);
  } catch (error) {
    res.status(400).send(error);
  }
};
const getChapterById = async (req, res) => {
  try {
    const getChapterDataById = await ChapterCreditData.findById(req.params.id);
    res.send(getChapterDataById);
  } catch (error) {
    res.status(400).send(error);
  }
};

const patchChapter = async (req, res) => {
  try {
    const _id = req.params.id;
    const patchChapterData = await ChapterCreditData.findByIdAndUpdate(
      _id,
      req,
      body,
      { new: true }
    );
    res.send(patchChapterData);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteChapter = async (req, res) => {
  try {
    const deleteChapterData = await ChapterCreditData.findByIdAndDelete(
      req.params.id
    );
    res.send(deleteChapterData);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  addChapter,
  getChapter,
  getChapterById,
  patchChapter,
  deleteChapter,
};
