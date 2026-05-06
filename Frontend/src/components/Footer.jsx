import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative w-full mt-16 py-10 text-center overflow-hidden border-t border-yellow-500/20 bg-black">

      {/*  Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-[450px] h-[450px] bg-yellow-500/30 blur-[140px] top-[-100px] left-[-120px] animate-pulse"></div>
        <div className="absolute w-[450px] h-[450px] bg-amber-400/30 blur-[140px] bottom-[-120px] right-[-120px] animate-pulse"></div>
        <div className="absolute w-[500px] h-[500px] bg-yellow-400/10 blur-[160px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* 🎮 Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl md:text-3xl font-extrabold text-yellow-400 tracking-wider drop-shadow-[0_0_10px_rgba(250,204,21,0.7)]"
      >
        🎮 IPL AI Guesser
      </motion.h2>

      {/* 🌐 Social Icons */}
      <div className="flex justify-center gap-6 mt-6">

        <motion.a
          href="https://github.com/YOUR_USERNAME"
          target="_blank"
          whileHover={{ scale: 1.2 }}
          className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-yellow-400/30 text-yellow-300 hover:text-white hover:shadow-[0_0_20px_rgba(250,204,21,0.9)]"
        >
          <FaGithub size={20} />
        </motion.a>

        <motion.a
          href="https://linkedin.com/in/YOUR_ID"
          target="_blank"
          whileHover={{ scale: 1.2 }}
          className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-yellow-400/30 text-yellow-300 hover:text-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.9)]"
        >
          <FaLinkedin size={20} />
        </motion.a>

        <motion.a
          href="https://instagram.com/YOUR_ID"
          target="_blank"
          whileHover={{ scale: 1.2 }}
          className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-yellow-400/30 text-yellow-300 hover:text-pink-400 hover:shadow-[0_0_20px_rgba(236,72,153,0.9)]"
        >
          <FaInstagram size={20} />
        </motion.a>

        <motion.a
          href="https://twitter.com/YOUR_ID"
          target="_blank"
          whileHover={{ scale: 1.2 }}
          className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-yellow-400/30 text-yellow-300 hover:text-sky-400 hover:shadow-[0_0_20px_rgba(56,189,248,0.9)]"
        >
          <FaTwitter size={20} />
        </motion.a>

      </div>

      {/*  Bottom Text */}
      <p className="mt-8 text-xs text-yellow-200/50">
        © 2026 • Built by Semicolon Troops
      </p>

    </footer>
  );
}