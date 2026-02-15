"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useTheme } from "./ThemeProvider";

export default function Header() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const toggleTheme = () => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Enhanced Glassmorphism & Top Aura Glow */}
      <div className="absolute inset-0 bg-white/40 dark:bg-black/40 backdrop-blur-xl border-b border-gray-200/30 dark:border-white/5" />

      {/* Header conduit for the Global Aura */}
      <div className="absolute inset-0 bg-white/20 dark:bg-black/20 backdrop-blur-2xl border-b border-gray-200/20 dark:border-white/5" />

      {/* Light Catching Layers */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[95%] h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent dark:via-blue-400/50" />
      <div className="absolute -top-[10px] left-1/2 -translate-x-1/2 w-[85%] h-[30px] bg-blue-400/10 dark:bg-blue-400/20 blur-[30px] rounded-full pointer-events-none" />
      <div className="absolute -top-[50px] left-1/2 -translate-x-1/2 w-[70%] h-[100px] bg-indigo-400/5 dark:bg-indigo-400/15 blur-[60px] rounded-full pointer-events-none" />

      <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 group"
        >
          <div className="relative">
            <motion.div
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-blue-500/40 blur-2xl rounded-full pointer-events-none"
            />
            <svg
              className="w-10 h-10 text-blue-500 dark:text-blue-400 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 relative z-10 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                d="M13 2L3 14h9"
                stroke="white"
                strokeWidth="1"
                className="opacity-50"
              />
            </svg>
            <div className="absolute inset-0 bg-blue-500/30 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <span className="text-2xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-950 via-gray-800 to-gray-900 dark:from-white dark:via-blue-100 dark:to-gray-300">
            ZenVoltra
          </span>
        </motion.button>

        {/* Desktop Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex items-center gap-4 lg:gap-6"
        >
          <a
            href="#projects"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition text-sm font-medium"
          >
            Our Work
          </a>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Toggle theme"
          >
            {resolvedTheme === "dark" ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
          <div className="relative group">
            <button
              onClick={scrollToContact}
              className="px-5 py-2.5 glassy-button rounded-xl text-sm font-bold transition-all relative z-10"
            >
              Contact Us
            </button>
          </div>
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition z-[60]"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5 relative">
            <motion.span
              animate={mobileMenuOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
              className="w-full h-0.5 bg-current block transition-transform flex-shrink-0"
            />
            <motion.span
              animate={mobileMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
              className="w-full h-0.5 bg-current block transition-all flex-shrink-0"
            />
            <motion.span
              animate={mobileMenuOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
              className="w-full h-0.5 bg-current block transition-transform flex-shrink-0"
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 md:hidden bg-white/98 dark:bg-zinc-950/98 backdrop-blur-3xl pt-24 px-8 flex flex-col"
          >
            {/* Simple Top Accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-30" />

            <div className="space-y-8">
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={() => {
                  scrollToTop();
                  setMobileMenuOpen(false);
                }}
                className="block text-4xl font-bold text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors w-full text-left"
              >
                ZenVoltra
              </motion.button>

              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-3xl font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                Our Work
              </motion.a>

              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                onClick={() => {
                  toggleTheme();
                }}
                className="w-full flex items-center justify-between text-2xl font-semibold text-gray-600 dark:text-gray-400 py-4 border-y border-gray-100 dark:border-white/5"
              >
                <span>Theme</span>
                <div className="flex items-center gap-2 text-sm uppercase tracking-widest text-gray-400">
                  {resolvedTheme === "dark" ? "Dark" : "Light"}
                  {resolvedTheme === "dark" ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  )}
                </div>
              </motion.button>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-auto mb-12"
            >
              <button
                onClick={scrollToContact}
                className="w-full px-8 py-5 bg-gray-900 dark:bg-white text-white dark:text-black rounded-2xl text-xl font-bold hover:scale-[1.02] transition-all shadow-xl shadow-gray-900/20 dark:shadow-white/10 active:scale-95 flex items-center justify-center gap-3"
              >
                Start a Project
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
