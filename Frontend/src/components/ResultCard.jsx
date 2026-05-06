import { motion } from "framer-motion";

export default function ResultCard({ result }) {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -10 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
      className="bg-gradient-to-br from-black/40 to-gray-900/40 
      backdrop-blur-xl p-8 rounded-3xl shadow-2xl text-center border border-blue-500/20"
    >
      {/* 🏆 Trophy */}
      <motion.div
        className="text-6xl mb-4"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        🏆
      </motion.div>

      <h2 className="text-2xl font-bold mb-4 text-gray-300">
        🎯 I guess:
      </h2>

      {/* 🖼 Player Image */}
      <motion.img
        src={result?.image || "https://via.placeholder.com/150"}
        alt="player"
        className="w-32 h-32 mx-auto rounded-full border-4 border-blue-400 shadow-lg mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />

      {/* 🧠 Name */}
      <h3 className="text-3xl font-bold text-blue-400 drop-shadow-lg">
        {result?.guess || "Not Found 😢"}
      </h3>

      {/* 📊 Confidence */}
      <p className="text-gray-400 mt-2">
        {result?.confidence !== undefined
          ? `Confidence: ${(result.confidence * 100).toFixed(1)}%`
          : "Confidence: Unknown"}
      </p>

      {/* 🔁 Button */}
      <button
        onClick={() => window.location.reload()}
        className="mt-6 px-6 py-2 bg-blue-500 rounded-xl hover:bg-blue-600 transition shadow-lg hover:shadow-blue-500/40"
      >
        Play Again
      </button>
    </motion.div>
  );
}