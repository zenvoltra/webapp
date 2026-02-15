"use client";

import { motion } from "framer-motion";

export default function CTA() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 text-center bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-zinc-950 dark:via-black dark:to-black transition-colors duration-300">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white px-2">
          Ready to Build Something Great?
        </h2>
        <p className="mt-3 sm:mt-4 text-gray-600 dark:text-gray-400 text-base sm:text-lg mb-2 px-2">
          Let's turn your idea into a real product with our expert team.
        </p>
        <p className="text-gray-500 dark:text-gray-500 text-xs sm:text-sm mb-6 sm:mb-8 px-2">
          Get a free consultation and project estimate. No commitment required.
        </p>
        <div className="relative group">
          <button
            onClick={scrollToContact}
            className="w-full sm:w-auto px-10 py-4 glassy-button rounded-xl font-bold transition-all duration-300 text-sm sm:text-base relative z-10"
          >
            Start a Project
          </button>
        </div>
        <p className="mt-4 sm:mt-6 text-xs text-gray-600 dark:text-gray-500 px-2">
          ✓ Free consultation • ✓ Fast response • ✓ Transparent pricing
        </p>
      </motion.div>
    </section>
  );
}
