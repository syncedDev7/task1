const express = require("express");
const quizRoutes = require("./routes/quizRoutes");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api/quizzes", quizRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Quiz API!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
