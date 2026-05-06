const express = require("express");
const cors = require("cors");
const engine = require("./engine/gameEngine");

const app = express();
app.use(cors());
app.use(express.json());

function formatQuestion(feature) {
  const map = {
    is_indian: "Is the player from India?",
    is_batsman: "Is the player a batsman?",
    is_bowler: "Is the player a bowler?",
    is_wk: "Is the player a wicketkeeper?",
    plays_rcb: "Has the player played for RCB?",
    plays_mi: "Has the player played for Mumbai Indians?",
    plays_csk: "Has the player played for CSK?",
    is_captain: "Has the player captained a team?",
    is_pacer: "Is the player a fast bowler?",
    is_spinner: "Is the player a spinner?"
  };

  return map[feature] || `Does the player have ${feature}?`;
}

app.get("/check", (req,res) => {
    res.send("Hello");
});

app.post("/start", (req, res) => {
  engine.reset();
  const feature = engine.nextQuestion();

  res.json({
    question: formatQuestion(feature),
    question_id: feature
  });
  console.log("Game started, first question:", feature);
});



app.post("/answer", (req, res) => {
  const { question_id, answer } = req.body;

  engine.update(question_id, answer);

  if (engine.shouldGuess()) {
    const result = engine.guess();

    return res.json({
      done: true,
      guess: result.name,
      confidence: result.confidence
    });
  }

  const nextFeature = engine.nextQuestion();

  res.json({
    done: false,
    question: formatQuestion(nextFeature),
    question_id: nextFeature
  });
});

app.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});