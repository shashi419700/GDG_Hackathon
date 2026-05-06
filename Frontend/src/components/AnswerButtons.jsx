import { motion } from "framer-motion";

export default function AnswerButtons({ onAnswer }) {
  const btn =
    "px-6 py-3 rounded-xl font-semibold transition-all active:scale-90";

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-8">

      <motion.button
        whileHover={{ scale: 1.1 }}
        onClick={() => onAnswer(true)}
        className={`${btn} bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-green-500/50`}
      >
        👍 Yes
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        onClick={() => onAnswer(false)}
        className={`${btn} bg-red-500 hover:bg-red-600 shadow-lg hover:shadow-red-500/50`}
      >
        👎 No
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        onClick={() => onAnswer(null)}
        className={`${btn} bg-yellow-500 hover:bg-yellow-600 shadow-lg hover:shadow-yellow-500/50`}
      >
        🤔 Maybe
      </motion.button>

    </div>
  );
}