# 🎮 IPL AI Guessing Game

A web-based AI game that tries to guess the cricketer you are thinking of by asking a series of smart questions.

Inspired by the idea of Akinator, but focused on IPL players with a custom-built decision engine.

---

## 🚀 Overview

This project combines a rule-based decision system with basic machine learning concepts to simulate intelligent guessing.

The system asks dynamic yes/no/maybe questions and narrows down the possible players until it can confidently make a guess.

---

## 🧠 How It Works

* Player data is stored with multiple features (Indian, batsman, bowler, etc.)
* A question selection engine uses entropy-based logic (similar to decision trees)
* Each answer filters the dataset
* The system keeps optimizing the next question
* Finally, it predicts the most probable player with a confidence score

---

## 🛠️ Tech Stack

### 💻 Frontend

* React.js
* Tailwind CSS
* Framer Motion

### ⚙️ Backend

* Node.js
* Express.js
* REST API architecture

### 🤖 AI / ML Concepts

* Decision Tree Logic (Entropy & Information Gain)
* Rule-based filtering engine
* Probability-based confidence scoring

### 🔗 AI & Future Integration

* LangChain (planned for conversational flow)
LLM Model
* Vector Search (for scalable player dataset)

---

## 📡 API Endpoints

### Start Game

```id="8q6s2t"
POST /start
```

Response:

```id="qf8m2z"
{
  "question": "Is the player from India?",
  "question_id": "is_indian"
}
```

---

### Answer Question

```id="n4x9ka"
POST /answer
```

Request:

```id="c1z8rb"
{
  "question_id": "is_indian",
  "answer": "yes"
}
```

Response:

```id="e5m7yv"
{
  "done": false,
  "question": "Is the player a batsman?",
  "question_id": "is_batsman"
}
```

Final Response:

```id="d3k9pl"
{
  "done": true,
  "guess": "Virat Kohli",
  "confidence": 0.87
}
```

---

## 🎮 How to Run

### Backend

```id="6l2vpa"
cd backend
npm install
node app.js
```

### Frontend

```id="c9t4qx"
cd frontend
npm install
npm run dev
```

---

## ✨ Features

* Smart AI-based question selection
* Dynamic filtering engine
* Smooth animated UI
* Confidence-based predictions
* Clean modular architecture

---

## 🔮 Future Improvements

* Natural language questions using AI
* Chat-based interface (LangChain)
* Voice input/output
* Larger dataset with auto-learning
* Multiplayer mode (WebSockets)

---

## 👨‍💻 Author

Built as a practical project to explore:

* AI decision-making systems
* Backend architecture design
* Frontend animation and UX

---

## 📌 Note

This project uses simplified ML concepts and is designed for learning and experimentation.
It can be extended into a full AI-driven system with real model training and NLP integration.

---

Enjoy the game! 🎯
![Game UI](/Frontend//src/assets/IMG2.jpeg)
![Question Screen](/Frontend//src/assets/IMG4.jpeg)
![Answer Flow](/Frontend//src/assets/IMG5.jpeg)

