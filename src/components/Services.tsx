"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Web Applications",
    description: "Full-stack web apps built with React, Next.js, and modern frameworks. Scalable, fast, and production-ready.",
    icon: "🌐",
  },
  {
    title: "Mobile Apps",
    description: "Cross-platform mobile applications (iOS & Android). Beautiful UI and smooth performance.",
    icon: "📱",
  },
  {
    title: "Landing Pages",
    description: "High-converting landing pages optimized for SEO and user experience. Get more leads, faster.",
    icon: "🚀",
  },
  {
    title: "SaaS Platforms",
    description: "Complete SaaS solutions with authentication, payments, dashboards, and admin panels. Ready to scale.",
    icon: "💼",
  },
  {
    title: "UI/UX Design",
    description: "User-centered design that converts. From wireframes to pixel-perfect interfaces that users love.",
    icon: "🎨",
  },
  {
    title: "DevOps & Deployment",
    description: "CI/CD pipelines, cloud infrastructure, and monitoring. Deploy with confidence and scale effortlessly.",
    icon: "⚙️",
  },
];

export default function Services() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-black dark:via-zinc-950 dark:to-black transition-colors duration-300">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
          },
        }}
        className="max-w-6xl mx-auto"
      >
        <motion.h2
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
          }}
          className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center text-gray-900 dark:text-white"
        >
          What We Do Best
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto px-2 sm:px-4">
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.95 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { type: "spring", stiffness: 100 }
                },
              }}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="group p-6 sm:p-8 rounded-2xl bg-white/40 dark:bg-black/40 backdrop-blur-xl border border-gray-200/50 dark:border-white/5 hover:border-blue-500/30 dark:hover:border-blue-500/50 hover:bg-white/60 dark:hover:bg-zinc-900/40 transition-all duration-500 cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none relative overflow-hidden"
            >
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="text-2xl sm:text-3xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
