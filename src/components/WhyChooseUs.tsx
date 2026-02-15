"use client";

import { motion } from "framer-motion";

const advantages = [
  {
    icon: "⚡",
    title: "Efficient Delivery",
    description:
      "Our dedicated team works in parallel, ensuring smooth collaboration and streamlined workflows. Get to market efficiently.",
  },
  {
    icon: "👥",
    title: "Expert Team",
    description:
      "Full-stack developers, designers, and DevOps specialists working together. No handoffs, no delays.",
  },
  {
    icon: "🎯",
    title: "Proven Process",
    description:
      "Streamlined workflows and clear communication ensure quality results every time, on time.",
  },
  {
    icon: "💰",
    title: "Better Value",
    description:
      "Team efficiency means better pricing than hiring multiple freelancers. One team, one price, faster delivery.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white">Why Choose ZenVoltra?</h2>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg px-2">
            We've worked on a variety of projects across different industries. Our team approach ensures quality delivery and better results.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group p-6 sm:p-8 rounded-2xl bg-gray-50 dark:bg-zinc-950 border border-gray-200 dark:border-gray-800/50 hover:border-blue-500/30 dark:hover:border-blue-500/30 hover:bg-white dark:hover:bg-zinc-900 transition-all duration-300 text-center shadow-lg hover:shadow-xl dark:shadow-black/50"
            >
              <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 group-hover:rotate-12 transition-transform duration-300">{advantage.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{advantage.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{advantage.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 sm:mt-16 p-6 sm:p-8 rounded-xl bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-gray-200 dark:border-gray-800/50 text-center shadow-xl"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white">
            Ready to Build Together?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base px-2">
            We work with businesses and startups to bring their product visions to life with our expert team.
          </p>
          <div className="relative group inline-block">
            <div className="absolute inset-0 bg-blue-500/20 dark:bg-white/20 blur-2xl rounded-lg scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 dark:bg-white text-white dark:text-black rounded-lg font-semibold hover:scale-105 hover:bg-gray-800 dark:hover:bg-gray-100 transition text-sm sm:text-base relative z-10"
            >
              Start a Project
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
