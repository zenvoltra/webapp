"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "SaaS Analytics Platform",
    description:
      "Multi-tenant analytics dashboard with role-based access and real-time charts.",
    stack: "Next.js • Node.js • PostgreSQL • AWS",
  },
  {
    title: "E-commerce Growth Suite",
    description:
      "High-performance storefront with Stripe payments and admin dashboard.",
    stack: "React • Next.js • Stripe • Firebase",
  },
  {
    title: "Business Landing + CMS",
    description:
      "Conversion-optimized landing page with headless CMS and SEO setup.",
    stack: "Next.js • Tailwind • Headless CMS",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-black dark:via-zinc-950 dark:to-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-center text-gray-900 dark:text-white">
          What We Can Build
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-8 sm:mb-12 text-sm sm:text-base px-2">
          We've successfully delivered various types of projects for different clients. Here's what we specialize in.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto px-2 sm:px-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
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
                y: -12,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative p-5 sm:p-6 flex flex-col min-h-[320px] rounded-2xl bg-white/40 dark:bg-black/40 backdrop-blur-xl border border-gray-200/50 dark:border-white/5 hover:border-blue-500/30 dark:hover:border-blue-500/50 cursor-pointer overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none transition-all duration-500"
            >
              {/* Animated background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/10 to-transparent translate-x-12 -translate-y-12 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500 rounded-full" />

              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="mt-2 text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800/50">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.split(" • ").map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-gray-100 dark:bg-zinc-900 text-gray-500 dark:text-gray-500 border border-gray-200/50 dark:border-gray-800/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-6 sm:mt-8 text-center text-xs text-gray-500 dark:text-gray-500 px-4">
          Project examples represent the type of work we deliver and may include internal or collaborative builds.
        </p>
      </div>
    </section>
  );
}
