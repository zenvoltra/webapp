"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 sm:pt-24 pb-12 relative overflow-hidden">
      {/* Hero background transparency for Global Aura */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white dark:via-black/80 dark:to-black transition-colors duration-500"></div>

      {/* Mesh Glow Layers with Electric Accents */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-400/10 dark:bg-blue-600/5 blur-[120px] rounded-full"
      />
      {/* Lightning Flash Overlay */}
      <div className="absolute inset-0 bg-blue-400/10 dark:bg-blue-600/10 opacity-0 animate-lightning pointer-events-none" />

      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
          delay: 2,
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-400/10 dark:bg-purple-600/5 blur-[120px] rounded-full"
      />

      {/* Grid refinement */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.01)_2px,transparent_2px),linear-gradient(90deg,rgba(255,255,255,0.01)_2px,transparent_2px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse:80%_60%_at_50%_0%,#fff_60%,transparent_100%)]"></div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.3,
            },
          },
        }}
        className="relative z-10 max-w-5xl mx-auto text-center"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
          className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 rounded-full bg-gray-100 dark:bg-zinc-900/50 border border-gray-300 dark:border-gray-700/50 backdrop-blur-sm text-xs sm:text-sm text-gray-700 dark:text-gray-300"
        >
          <span className="hidden sm:inline">⚡ Professional Team • Quality Focus • Production-Ready Solutions</span>
          <span className="sm:hidden">⚡ Expert Team • Quality Focus</span>
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
              },
            },
          }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white px-2 max-w-5xl mx-auto"
        >
          {Array.from("We Build Ideas Into ").map((char, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 5 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {char}
            </motion.span>
          ))}
          <br className="hidden sm:block" />
          <motion.span
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.8, ease: "easeOut" }
              },
            }}
            className="relative bg-clip-text text-transparent bg-gradient-to-r from-blue-900 via-blue-700 to-indigo-800 dark:from-blue-500 dark:via-blue-400 dark:to-indigo-500 pb-1"
          >
            Production-Ready
            {/* Lightning Underline Accent */}
            <motion.svg
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.5, ease: "easeInOut" }}
              className="absolute -bottom-1 left-0 w-full h-2 text-blue-500/40 dark:text-blue-400/60"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M0,5 L20,3 L40,7 L60,2 L80,8 L100,5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </motion.svg>
          </motion.span>
          {Array.from(" Digital Products").map((char, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 5 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mt-4 sm:mt-6 text-gray-600 dark:text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-2"
        >
          ZenVoltra helps businesses and startups design, build and scale
          high-quality digital products.
          Our dedicated team delivers production-ready solutions with precision and care.
        </motion.p>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-500"
        >
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="text-green-400 font-bold">✓</span>
            <span>Expert Team</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="text-green-400 font-bold">✓</span>
            <span>Quality Focus</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="text-green-400 font-bold">✓</span>
            <span>Production-Ready</span>
          </div>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
          }}
          className="mt-8 sm:mt-10 flex justify-center px-4 relative group"
        >
          {/* Button Electric Glow */}
          <div className="absolute inset-0 bg-blue-500/20 dark:bg-blue-400/20 blur-2xl rounded-full scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <button
            onClick={scrollToContact}
            className="w-full sm:w-auto px-10 py-4 glassy-button rounded-xl font-bold transition-all duration-300 text-sm sm:text-base relative z-10"
          >
            Start a Project
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
