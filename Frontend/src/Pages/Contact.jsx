import { motion } from "framer-motion";
import logo from "../assets/logo.jpeg";

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">

      {/* 🔥 Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl"></div>

      {/* 🎮 Card */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative z-10 w-full max-w-2xl bg-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/10 text-center"
      >

        {/* 🔥 Logo */}
        <motion.img
          src={logo}
          alt="logo"
          className="w-20 h-20 mx-auto mb-4 rounded-full border-2 border-blue-400 shadow-lg"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{ repeat: Infinity, duration: 3 }}
        />

        {/* 📞 Title */}
        <h1 className="text-4xl font-bold text-blue-400 mb-4">
          Contact Us
        </h1>

        <p className="text-gray-400 mb-8">
          Have questions or feedback? We’d love to hear from you 🎮
        </p>

        {/* 📧 Contact Info */}
        <div className="space-y-6 text-lg">

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 p-5 rounded-2xl border border-blue-500/20"
          >
            📧 Email  
            <p className="text-gray-300 mt-2">
              support@iplakinator.com
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 p-5 rounded-2xl border border-green-500/20"
          >
            📱 Phone  
            <p className="text-gray-300 mt-2">
              +91 9876543210
            </p>
          </motion.div>

        </div>

        {/* ✉️ Mini Contact Form */}
        <div className="mt-10 space-y-4">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-white/10 focus:outline-none focus:border-blue-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-white/10 focus:outline-none focus:border-blue-400"
          />

          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-white/10 focus:outline-none focus:border-blue-400"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-blue-500 hover:bg-blue-600 rounded-xl font-semibold shadow-lg"
          >
            🚀 Send Message
          </motion.button>
        </div>

        {/* ⚡ Footer */}
        <p className="mt-8 text-sm text-gray-500">
          We usually respond within 24 hours ⚡
        </p>

      </motion.div>
    </div>
  );
}