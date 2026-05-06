import React, { useState } from "react";
import { auth, googleProvider } from "../firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import logo from "../assets/logo.jpeg";

function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      localStorage.setItem(
        "user",
        JSON.stringify({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );

      navigate("/game");
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">

      {/* 🔥 Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-red-500/10 to-purple-500/10 blur-3xl"></div>

      {/* 🎮 Card */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-xl p-10 rounded-3xl shadow-2xl text-center border border-white/10"
      >

        {/* 🔥 Animated Logo */}
        <motion.img
          src={logo}
          alt="logo"
          className="w-20 h-20 mx-auto mb-4 rounded-full border-2 border-yellow-400"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{ repeat: Infinity, duration: 3 }}
        />

        {/* 🧠 Title */}
        <h1 className="text-3xl font-bold text-yellow-400 mb-2">
          Guess The Cricketer
        </h1>

        <p className="text-gray-400 mb-8">
          Login to start the game 🎮
        </p>

        {/* 🚀 Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full py-3 rounded-xl bg-yellow-500 hover:bg-yellow-600 text-black font-semibold shadow-lg transition"
        >
          {loading ? "Connecting..." : "Continue with Google"}
        </motion.button>

        {/* ⚡ Loader */}
        {loading && (
          <p className="mt-4 text-sm text-yellow-400 animate-pulse">
            🔄 Signing you in...
          </p>
        )}

      </motion.div>
    </div>
  );
}

export default Login;