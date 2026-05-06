// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import QuestionCard from "../components/QuestionCard";
// import AnswerButtons from "../components/AnswerButtons";
// import ProgressBar from "../components/ProgressBar";
// import ResultCard from "../components/ResultCard";
// import { useGameEngine } from "../hooks/useGameEngine";
// import logo from "../assets/logo.jpeg";

// import { motion } from "framer-motion";

// export default function Game() {
//   const { question, handleAnswer, finished, result, step, total } =
//     useGameEngine();

//   return (
//     <div className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-black text-white">

//       {/* 🔥 ULTRA BACKGROUND */}
//       <div className="absolute inset-0 z-0 overflow-hidden">

//         {/* 🎨 Gradient Layer */}
//         <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/40 to-black"></div>

//         {/* 💀 Smoke Glow */}
//         <div className="absolute w-[600px] h-[600px] bg-purple-700 opacity-20 blur-[150px] top-[-100px] left-[-100px] animate-pulse"></div>
//         <div className="absolute w-[500px] h-[500px] bg-red-600 opacity-20 blur-[150px] bottom-[-100px] right-[-100px] animate-pulse"></div>

//         {/* 👁️ Floating Orbs */}
//         <motion.div
//           animate={{ y: [0, -50, 0], x: [0, 30, 0] }}
//           transition={{ duration: 10, repeat: Infinity }}
//           className="absolute w-40 h-40 bg-blue-500 opacity-20 blur-3xl top-20 right-20"
//         />
//         <motion.div
//           animate={{ y: [0, 60, 0], x: [0, -40, 0] }}
//           transition={{ duration: 12, repeat: Infinity }}
//           className="absolute w-52 h-52 bg-pink-500 opacity-20 blur-3xl bottom-20 left-20"
//         />

//         {/* 🌀 BIG CENTER LOGO */}
//         <motion.img
//           src={logo}
//           alt="bg-logo"
//           animate={{
//             rotate: [0, 360],
//             scale: [0.9, 1.2, 0.9],
//           }}
//           transition={{
//             duration: 25,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//           className="absolute top-1/2 left-1/2 w-[300px] md:w-[600px]
//           -translate-x-1/2 -translate-y-1/2
//           opacity-10 blur-xl pointer-events-none"
//         />

//         {/* 🔁 MULTIPLE FLOATING LOGOS */}
//         {[...Array(5)].map((_, i) => (
//           <motion.img
//             key={i}
//             src={logo}
//             alt="floating-logo"
//             animate={{
//               y: [0, Math.random() * 100 - 50, 0],
//               x: [0, Math.random() * 100 - 50, 0],
//               rotate: [0, 360],
//             }}
//             transition={{
//               duration: 15 + i * 3,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             className="absolute w-16 md:w-24 opacity-10 blur-sm"
//             style={{
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//             }}
//           />
//         ))}
//       </div>

//       {/* HEADER */}
//       <Header />

//       {/* MAIN */}
//       <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-4 md:px-6 text-center">

//         {/* 🔥 TOP LOGO */}
//         <motion.img
//           src={logo}
//           alt="logo"
//           initial={{ scale: 0, y: -50 }}
//           animate={{ scale: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="w-16 h-16 md:w-24 md:h-24 object-cover rounded-full mb-4 
//           border border-white/20 shadow-[0_0_30px_rgba(255,0,0,0.5)]"
//         />

//         {/* 🎮 TITLE */}
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-2xl md:text-4xl font-bold mb-4 tracking-wide"
//         >
//           🎮 IPL AI Guessing Game
//         </motion.h1>

//         {/* 🧊 GAME CARD */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="w-full max-w-xl p-4 md:p-6 rounded-2xl 
//           bg-white/10 backdrop-blur-xl border border-white/20
//           shadow-[0_0_50px_rgba(255,0,0,0.2)]"
//         >
//           {!finished ? (
//             <>
//               {!question ? (
//                 <p className="text-gray-400 animate-pulse">
//                   🤖 AI is thinking...
//                 </p>
//               ) : (
//                 <>
//                   <motion.div
//                     key={question?.question}
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                   >
//                     <QuestionCard question={question?.question} />
//                   </motion.div>

//                   <div className="mt-6">
//                     <AnswerButtons onAnswer={handleAnswer} />
//                   </div>

//                   <div className="mt-6">
//                     <ProgressBar step={step} total={total} />
//                   </div>
//                 </>
//               )}
//             </>
//           ) : (
//             <ResultCard result={result} />
//           )}
//         </motion.div>
//       </div>

//       <Footer />
//     </div>
//   );
// }