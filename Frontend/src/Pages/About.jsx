import { motion } from "framer-motion";
import logo from "../assets/logo.jpeg";
import Header from "../components/Header";
import Footer from "../components/Footer";
export default function About() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
        {/* 🔥 Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-red-500/10 to-purple-500/10 blur-3xl"></div>

        {/* 🎮 Card */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative z-10 w-full max-w-3xl bg-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/10 text-center"
        >
          {/* 🔥 Animated Logo */}
          <motion.img
            src={logo}
            alt="logo"
            className="w-20 h-20 mx-auto mb-4 rounded-full border-2 border-yellow-400 shadow-lg"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
          />

          {/* 🧠 Title */}
          <h1 className="text-4xl font-bold text-yellow-400 mb-4">
            About The Game
          </h1>

          {/* 📜 Description */}
          <p className="text-gray-300 leading-relaxed mb-6 text-lg">
            This is an AI-powered IPL Akinator game that tries to guess the
            cricketer you are thinking of by asking smart questions. Instead of
            using hardcoded logic, the system makes intelligent decisions based
            on your answers.
          </p>

          {/* ⚡ Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 p-5 rounded-2xl border border-yellow-500/20"
            >
              🧠 Smart AI Engine
              <p className="text-sm text-gray-400 mt-2">
                Dynamically guesses players using intelligent logic
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 p-5 rounded-2xl border border-blue-500/20"
            >
              🎮 Interactive Gameplay
              <p className="text-sm text-gray-400 mt-2">
                Simple Yes / No / Maybe questions
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 p-5 rounded-2xl border border-green-500/20"
            >
              ⚡ Fast & Responsive
              <p className="text-sm text-gray-400 mt-2">
                Instant answers with smooth UI animations
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 p-5 rounded-2xl border border-purple-500/20"
            >
              🏏 IPL Focused
              <p className="text-sm text-gray-400 mt-2">
                Specially designed for IPL cricketer guessing
              </p>
            </motion.div>
          </div>

          {/*  Footer Line */}
        </motion.div>
        <Footer />
      </div>
    </>
  );
}
