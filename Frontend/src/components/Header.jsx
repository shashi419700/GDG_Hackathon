import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.jpeg";

import { auth } from "../firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  //  Firebase auth listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

  //  Logout using Firebase
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const navLinkClass = ({ isActive }) =>
    `block text-base font-semibold uppercase tracking-wide py-2 transition duration-300
    ${
      isActive
        ? "text-yellow-400 drop-shadow-[0_0_8px_rgba(255,215,0,0.9)]"
        : "text-white hover:text-yellow-300"
    }`;

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/60 border-b border-yellow-500/20 shadow-[0_0_20px_rgba(255,215,0,0.15)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <div className="relative">
            <img
              src={logo}
              alt="logo"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-yellow-400 shadow-[0_0_12px_gold]"
            />
            <div className="absolute inset-0 rounded-full animate-ping bg-yellow-400/20"></div>
          </div>

          <div className="leading-tight">
            <h1 className="text-sm sm:text-lg font-extrabold text-yellow-400 tracking-wider">
              WICKET IQ
            </h1>
            <p className="text-[9px] sm:text-[10px] text-gray-400">
              LIVE SCORE AI
            </p>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/legal" className={navLinkClass}>Legal</NavLink>
          <NavLink to="/terms" className={navLinkClass}>Terms</NavLink>

          {!isLoggedIn ? (
            <NavLink to="/login" className="bg-yellow-400 text-black px-4 py-2 rounded-xl font-bold hover:scale-105 transition">
              Login
            </NavLink>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-red-500/20 text-red-400 px-4 py-2 rounded-xl font-bold hover:bg-red-500/30 transition"
            >
              Logout
            </button>
          )}
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-yellow-400 text-black shadow-lg active:scale-95 transition"
        >
          <Menu size={22} />
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 w-[75%] max-w-sm h-screen bg-[#020617] z-50 border-l border-yellow-500/20 shadow-2xl p-6 flex flex-col"
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-yellow-400 font-bold text-lg">Menu</h2>
                <button onClick={() => setOpen(false)}>
                  <X className="text-white" />
                </button>
              </div>

              <div className="flex flex-col gap-4">
                <NavLink to="/" onClick={() => setOpen(false)} className={navLinkClass}>Home</NavLink>
                <NavLink to="/about" onClick={() => setOpen(false)} className={navLinkClass}>About</NavLink>
                <NavLink to="/legal" onClick={() => setOpen(false)} className={navLinkClass}>Legal</NavLink>
                <NavLink to="/terms" onClick={() => setOpen(false)} className={navLinkClass}>Terms</NavLink>
              </div>

              <div className="mt-auto">
                {!isLoggedIn ? (
                  <NavLink
                    to="/login"
                    onClick={() => setOpen(false)}
                    className="block w-full text-center bg-yellow-400 text-black py-3 rounded-xl font-bold"
                  >
                    Login
                  </NavLink>
                ) : (
                  <button
                    onClick={() => {
                      handleLogout();
                      setOpen(false);
                    }}
                    className="w-full bg-red-500/20 text-red-400 py-3 rounded-xl font-bold"
                  >
                    Logout
                  </button>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}