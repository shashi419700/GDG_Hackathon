import { motion } from "framer-motion";

export default function QuestionCard({ question, feature }) {

  const detectFeature = () => {
    const text = question?.toLowerCase() || "";

    if (text.includes("india")) return "indian";
    if (text.includes("batsman")) return "batsman";
    if (text.includes("bowler")) return "bowler";
    if (text.includes("wicket")) return "wk";
    if (text.includes("rcb")) return "rcb";
    if (text.includes("mumbai")) return "mi";
    if (text.includes("csk")) return "csk";
    if (text.includes("captain")) return "captain";

    return null;
  };

  const finalFeature = feature || detectFeature();

  const getStyle = () => {
    if (!finalFeature) return "bg-white/10";

    if (finalFeature.includes("indian"))
      return "bg-gradient-to-r from-orange-500 via-white to-green-500 text-black";

    if (finalFeature.includes("batsman"))
      return "bg-gradient-to-r from-yellow-400 to-orange-500";

    if (finalFeature.includes("bowler"))
      return "bg-gradient-to-r from-blue-500 to-indigo-600";

    if (finalFeature.includes("wk"))
      return "bg-gradient-to-r from-purple-500 to-pink-500";

    if (finalFeature.includes("rcb"))
      return "bg-gradient-to-r from-red-700 to-black";

    if (finalFeature.includes("mi"))
      return "bg-gradient-to-r from-blue-700 to-blue-400";

    if (finalFeature.includes("csk"))
      return "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black";

    if (finalFeature.includes("captain"))
      return "bg-gradient-to-r from-green-500 to-emerald-700";

    return "bg-white/10";
  };

  const getIcon = () => {
    if (!finalFeature) return "🤖";
    if (finalFeature.includes("indian")) return "🇮🇳";
    if (finalFeature.includes("batsman")) return "🏏";
    if (finalFeature.includes("bowler")) return "🎯";
    if (finalFeature.includes("wk")) return "🧤";
    if (finalFeature.includes("rcb")) return "🔥";
    if (finalFeature.includes("mi")) return "💙";
    if (finalFeature.includes("csk")) return "🦁";
    if (finalFeature.includes("captain")) return "👑";
    return "🤖";
  };

  return (
    <motion.div
      key={question}
      initial={{ opacity: 0, scale: 0.8, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`w-full max-w-xl p-8 rounded-3xl text-center 
      shadow-[0_0_60px_rgba(0,0,0,0.5)] border border-white/10 
      ${getStyle()}`}
    >
      {/* ✨ Glow effect */}
      <div className="absolute inset-0 rounded-3xl blur-2xl opacity-20 bg-blue-500 -z-10"></div>

      {/* 🤖 Icon */}
      <div className="text-5xl mb-4 animate-bounce">
        {getIcon()}
      </div>

      <h2 className="text-2xl md:text-3xl font-bold leading-snug">
        {question || "Thinking... 🤔"}
      </h2>
    </motion.div>
  );
}