const quizzes = [
    {
      id: 1,
      title: "JavaScript Basics",
      questions: [
        {
          question: "What is the output of `2 + '2'`?",
          options: ["22", "4", "undefined", "error"],
          answer: "22"
        },
        {
          question: "Which keyword is used to declare a variable in ES6?",
          options: ["var", "let", "int", "none"],
          answer: "let"
        }
      ]
    },
    {
      id: 2,
      title: "Node.js Basics",
      questions: [
        {
          question: "Which of the following is a Node.js framework?",
          options: ["React", "Express", "Django", "Flask"],
          answer: "Express"
        }
      ]
    }
  ];
  
  module.exports = {
    getAllQuizzes: () => quizzes,
    getQuizById: (id) => quizzes.find(quiz => quiz.id === id),
  };
  