import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const useGameEngine = () => {
  const [question, setQuestion] = useState(null);
  const [questionId, setQuestionId] = useState(null);
  const [finished, setFinished] = useState(false);
  const [result, setResult] = useState(null);
  const [step, setStep] = useState(0);
  const total = 8;

  // ✅ function upar
  const startGame = async () => {
    try {
      const res = await axios.post(`${BASE_URL}/start`);
      setQuestion(res.data.question);
      setQuestionId(res.data.question_id);
      setStep(1);
    } catch (err) {
      console.error("Start error:", err);
    }
  };

  // 👇 ab error nahi aayega
  useEffect(() => {
    startGame();
  }, []);

  const handleAnswer = async (answer) => {
    try {
      const res = await axios.post(`${BASE_URL}/answer`, {
        question_id: questionId,
        answer: answer,
      });

      if (res.data.done) {
        setFinished(true);
        setResult({
          name: res.data.guess,
          confidence: res.data.confidence,
        });
      } else {
        setQuestion(res.data.question);
        setQuestionId(res.data.question_id);
        setStep((prev) => prev + 1);
      }
    } catch (err) {
      console.error("Answer error:", err);
    }
  };

  return {
    question: { question },
    handleAnswer,
    finished,
    result,
    step,
    total,
  };
};