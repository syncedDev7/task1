const quizModel = require("../models/quizModel");

exports.getAllQuizzes = (req, res) => {
  const quizzes = quizModel.getAllQuizzes();
  res.json({ success: true, data: quizzes });
};

exports.getQuizById = (req, res) => {
  const quizId = parseInt(req.params.id, 10);
  const quiz = quizModel.getQuizById(quizId);

  if (quiz) {
    res.json({ success: true, data: quiz });
  } else {
    res.status(404).json({ success: false, message: "Quiz not found" });
  }
};
