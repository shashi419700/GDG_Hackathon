import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

import Header from "../components/Header";
import Footer from "../components/Footer";
import logo from "../assets/logo.jpeg";

import {API} from "../Urls/url.jsx"
export default function Game() {
  const [question, setQuestion] = useState("");
  const [questionId, setQuestionId] = useState("");
  const [started, setStarted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const [step, setStep] = useState(0);
  const totalSteps = 10;

  // const API = "https://gdg-hackathon-hmj3.onrender.com";

  //  Start Game
const startGame = async () => {
  setLoading(true);
  try {
    const res = await axios.post(`${API}/api/game/start`);
    
    setQuestion("Click yes to start"); // first trigger
    setQuestionId(res.data.sessionId);
    setStarted(true);
    setResult(null);
    setStep(0);
  } catch (err) {
    console.error(err);
  }
  setLoading(false);
};

  // Send Answer
const sendAnswer = async (ans) => {
  setLoading(true);
  try {
    const res = await axios.post(`${API}/api/game/move`, {
      sessionId: questionId,
      userInput: ans,
    });

    if (res.data.type === "guess") {
      setResult({
        guess: res.data.content,
        image: res.data.imageUrl,
        confidence: 0.9,
      });
    } else {
      setQuestion(res.data.content);
      setStep((prev) => prev + 1);
    }
  } catch (err) {
    console.error(err);
  }
  setLoading(false);
};

  // ================= COMPONENTS =================

  const QuestionCard = ({ question }) => (
    <motion.div
      key={question}
      initial={{ opacity: 0, scale: 0.8, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      className="w-full max-w-xl p-8 rounded-3xl text-center 
      bg-white/10 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-white/10"
    >
      <div className="text-5xl mb-4 animate-bounce">🤖</div>

      <h2 className="text-2xl md:text-3xl font-bold">
        {question || "Thinking... 🤔"}
      </h2>
    </motion.div>
  );

  const AnswerButtons = ({ onAnswer }) => (
    <div className="flex flex-wrap justify-center gap-4 mt-8">
      {[
        { label: "👍 Yes", value: "yes", color: "green" },
        { label: "👎 No", value: "no", color: "red" },
        { label: "🤔 Maybe", value: "maybe", color: "yellow" },
      ].map((btn, i) => (
        <motion.button
          key={i}
          whileHover={{ scale: 1.1 }}
          onClick={() => onAnswer(btn.value)}
          className={`px-6 py-3 rounded-xl font-semibold 
          bg-${btn.color}-500 hover:bg-${btn.color}-600 
          shadow-lg hover:shadow-${btn.color}-500/50`}
        >
          {btn.label}
        </motion.button>
      ))}
    </div>
  );

  const ProgressBar = ({ step, total }) => {
    const percent = ((step + 1) / total) * 100;

    return (
      <div className="w-full max-w-xl mt-6">
        <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-500"
            style={{ width: `${percent}%` }}
          />
        </div>

        <p className="text-sm text-gray-400 mt-2 text-center">
          Question {step + 1} / {total}
        </p>
      </div>
    );
  };

  const ResultCard = ({ result }) => (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-xl text-center mt-6"
    >
      <div className="text-6xl mb-4 animate-bounce">🏆</div>

      {/* 🖼 Image */}
      <img
        src={result?.image || "https://via.placeholder.com/150"}
        alt="player"
        className="w-32 h-32 mx-auto rounded-full border-4 border-green-400 shadow-xl mb-4"
      />

      <h2 className="text-2xl font-bold text-green-400">
        {result?.guess || "Not Found 😢"}
      </h2>

      <p className="text-gray-400 mt-2">
        {result?.confidence
          ? `Confidence: ${(result.confidence * 100).toFixed(1)}%`
          : "Confidence: Unknown"}
      </p>

      <button
        onClick={startGame}
        className="mt-6 px-6 py-2 bg-yellow-500 hover:bg-yellow-600 rounded-xl text-black"
      >
        Play Again
      </button>
    </motion.div>
  );

  // ================= UI =================

  return (
    <div className="min-h-screen flex flex-col bg-black text-white relative overflow-hidden">
      {/* 🔥 Animated Gradient Background */}
      <div className="absolute inset-0 -z-20 animate-gradient bg-gradient-to-r from-purple-900 via-black to-blue-900 bg-[length:400%_400%]"></div>

      {/* ✨ Floating Glow Orbs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-72 h-72 bg-purple-500/20 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-pink-500/20 rounded-full blur-3xl top-1/2 left-1/3 animate-pulse"></div>
      </div>

      <Header />

      <div className="flex-grow flex flex-col items-center justify-center px-4 relative z-10">
        {/* 🔥 Logo with Advanced Animation */}
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="mb-4"
        >
          <motion.img
            src={logo}
            className="w-24 h-24 rounded-full border-4 border-yellow-400 shadow-[0_0_40px_rgba(255,215,0,0.7)]"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </motion.div>

        {/* 🔥 Title */}
        <h1 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 drop-shadow-lg">
          Guess The IPL Cricketer
        </h1>

        {!started && (
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={startGame}
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 px-8 py-3 rounded-2xl text-black font-semibold shadow-xl hover:shadow-yellow-500/50 transition"
          >
            {loading ? "Starting..." : "Start  🎮 "}
          </motion.button>
        )}

        {started && !result && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-xl bg-white/10 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/20"
          >
            <QuestionCard question={question} />

            <ProgressBar step={step} total={totalSteps} />

            {loading && (
              <div className="mt-4 animate-pulse text-blue-400 text-center">
                🤖 Thinking...
              </div>
            )}

            {!loading && <AnswerButtons onAnswer={sendAnswer} />}
          </motion.div>
        )}

        {result && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="mt-6"
          >
            <ResultCard result={result} />
          </motion.div>
        )}
      </div>

      <Footer />

      {/* 🔥 Custom CSS Animation */}
      <style jsx>{`
        .animate-gradient {
          animation: gradientMove 12s ease infinite;
        }

        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
}
