"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Idea & Planning",
    description: "We understand your vision, define requirements, and create a comprehensive roadmap.",
    icon: "💡",
  },
  {
    title: "Design & Prototyping",
    description: "Wireframes, mockups, and interactive prototypes. Get feedback before we code.",
    icon: "🎨",
  },
  {
    title: "Development",
    description: "Our team builds in parallel. Frontend, backend, and infrastructure — all moving together.",
    icon: "⚡",
  },
  {
    title: "Testing & Launch",
    description: "Quality assurance, bug fixes, and deployment. We ensure everything works perfectly.",
    icon: "🚀",
  },
  {
    title: "Support & Scale",
    description: "Ongoing maintenance, updates, and scaling support. We're here for the long haul.",
    icon: "📈",
  },
];

export default function Process() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-transparent via-gray-50/50 to-transparent dark:via-zinc-950/30 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight text-gray-950 dark:text-white">
            Our Process
          </h2>
          <div className="w-20 h-1.5 bg-blue-500 mx-auto rounded-full opacity-30" />
        </motion.div>

        <div className="relative space-y-4">
          {/* Central Connecting Line */}
          <div className="absolute left-6 sm:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-blue-500/50 via-indigo-500/50 to-transparent hidden sm:block -translate-x-1/2" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.21, 0.45, 0.32, 0.9]
              }}
              className={`relative flex items-center justify-between gap-8 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
            >
              {/* Card */}
              <div className="w-full sm:w-[45%] group">
                <div className="p-6 sm:p-8 rounded-2xl bg-white/40 dark:bg-black/40 backdrop-blur-xl border border-gray-200/50 dark:border-white/5 hover:border-blue-500/30 dark:hover:border-blue-500/40 hover:bg-white/60 dark:hover:bg-zinc-950/60 transition-all duration-500 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full -translate-y-12 translate-x-12 blur-2xl group-hover:bg-blue-500/10 transition-colors" />

                  <div className="relative z-10">
                    <div className="text-2xl mb-4 p-3 bg-gray-50 dark:bg-white/5 w-fit rounded-xl">
                      {step.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Number/Circle indicator */}
              <div className="absolute left-0 sm:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white dark:bg-zinc-950 border-4 border-blue-500/20 dark:border-blue-400/20 flex items-center justify-center font-bold text-gray-900 dark:text-white z-20 shadow-xl hidden sm:flex">
                <span className="text-blue-600 dark:text-blue-400">{i + 1}</span>
              </div>

              {/* Spacer for desktop */}
              <div className="hidden sm:block w-[45%]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
