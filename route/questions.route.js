const express = require('express');
const router = express.Router();
const questionController = require('../controller/questions.controller')

router.post('/question/add', questionController.addQuestion);
router.get('/question/find', questionController.getQuestion);
router.patch('/question/edit', questionController.patchQuestion);
router.delete('question/delete', questionController.deleteQuestion);

module.exports = router