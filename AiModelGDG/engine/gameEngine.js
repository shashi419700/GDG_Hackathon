const playersData = require("../data/players.json");
const selectBestQuestion = require("./questionSelector");

class GameEngine {
  constructor() {
    this.players = playersData;
    this.features = Object.keys(this.players[0]).filter(
      k => k !== "name"
    );

    this.reset();
  }

  reset() {
    this.currentPlayers = this.players;
    this.asked = [];
    this.questionCount = 0;
  }

  nextQuestion() {
    return selectBestQuestion(this.currentPlayers, this.asked);
  }

  update(feature, answer) {
    const filtered = [];
    for (let p of this.currentPlayers) {
      if (answer === "yes" && p[feature] === 1) {
        filtered.push(p);
      } 
      else if (answer === "no" && p[feature] === 0) {
        filtered.push(p);
      } 
      else if (answer === "maybe") {
        filtered.push(p);
      }
    }

    this.currentPlayers = filtered;

    this.asked.push(feature);
    this.questionCount++;
  }

  shouldGuess() {
    return (
      this.questionCount >= 8 ||
      this.currentPlayers.length <= 2
    );
  }

  guess() {
    if (this.currentPlayers.length === 0) {
      return { name: "Unknown", confidence: 0 };
    }

    const confidence = 1 - (this.currentPlayers.length / this.players.length);

    return {
      name: this.currentPlayers[0].name,
      confidence: Math.max(0.1, confidence.toFixed(2))
    };
  }
}

module.exports = new GameEngine();