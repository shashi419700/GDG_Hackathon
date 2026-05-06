const entropy = require("../utils/entropy");

function selectBestQuestion(players, asked) {
  if (!players || players.length === 0) return null;

  const sample = players[0];

  
  const features = Object.keys(sample).filter(
    k => k !== "name"
  );

  let bestFeature = null;
  let bestScore = Infinity;

  const total = players.length;

  for (let feature of features) {
    if (asked.includes(feature)) continue;

    let yesCount = 0;

    
    for (let p of players) {
      if (p[feature] === 1) yesCount++;
    }

    const noCount = total - yesCount;

    if (yesCount === 0 || noCount === 0) continue;

    const pYes = yesCount / total;
    const pNo = noCount / total;

   
    const score =
      pYes * entropy(yesCount) +
      pNo * entropy(noCount);

    if (score < bestScore) {
      bestScore = score;
      bestFeature = feature;
    }
  }

  return bestFeature;
}

module.exports = selectBestQuestion;