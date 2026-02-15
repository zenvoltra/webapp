"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    timeline: "",
    budget: "",
    message: "",
    company: "", // Honeypot field
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>({});

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone: string) => {
    // Strictly 10 digits
    const re = /^\d{10}$/;
    return re.test(phone.trim().replace(/[\s-]/g, ''));
  };

  const validateField = (name: string, value: string) => {
    let error = "";
    if (name === "email" && value && !validateEmail(value)) {
      error = "Please enter a valid email address";
    } else if (name === "phone" && value && !validatePhone(value)) {
      error = "Please enter a valid 10-digit phone number";
    } else if (["name", "email", "phone", "project"].includes(name) && !value.trim()) {
      error = "This field is required";
    }
    return error;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Final validation check
    const errors: Record<string, string> = {};
    Object.keys(formData).forEach((key) => {
      if (key === "company") return;
      const fieldError = validateField(key, formData[key as keyof typeof formData]);
      if (fieldError) errors[key] = fieldError;
    });

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setTouchedFields(Object.keys(errors).reduce((acc, key) => ({ ...acc, [key]: true }), {}));
      setIsSubmitting(false);
      return;
    }

    // Honeypot check - silently abort if company field has value
    if (formData.company) {
      setIsSubmitting(false);
      return;
    }

    try {
      // Add document to Firestore with metadata
      await addDoc(collection(db, "contacts"), {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        project: formData.project,
        timeline: formData.timeline || null,
        budget: formData.budget || null,
        message: formData.message || null,
        source: "landing-page",
        userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
        createdAt: serverTimestamp(),
        status: "new",
      });

      // Show success message
      setIsSuccess(true);

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        project: "",
        timeline: "",
        budget: "",
        message: "",
        company: "",
      });
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("Something went wrong. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error if field becomes valid while typing
    if (touchedFields[name]) {
      const fieldError = validateField(name, value);
      setFieldErrors(prev => ({ ...prev, [name]: fieldError }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouchedFields(prev => ({ ...prev, [name]: true }));
    const fieldError = validateField(name, value);
    setFieldErrors(prev => ({ ...prev, [name]: fieldError }));
  };

  const handleReset = () => {
    setIsSuccess(false);
    setError("");
    setFieldErrors({});
    setTouchedFields({});
    setFormData({
      name: "",
      email: "",
      phone: "",
      project: "",
      timeline: "",
      budget: "",
      message: "",
      company: "",
    });
  };

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-zinc-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white">Let's Build Together</h2>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg px-2">
            Tell us about your project and we'll get back to you within 24 hours
          </p>
        </motion.div>

        {/* Error Message - shown above form */}
        {error && !isSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-6 p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
          >
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-red-800 dark:text-red-300 text-sm">{error}</p>
            </div>
          </motion.div>
        )}

        <AnimatePresence mode="wait">
          {isSuccess ? (
            // Success State
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-center py-12 px-6"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 mb-6"
              >
                <svg className="w-10 h-10 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
              >
                Thank You!
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-gray-600 dark:text-gray-400 text-lg mb-2"
              >
                We've received your message
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-gray-500 dark:text-gray-500 text-sm mb-8"
              >
                We'll get back to you within 24 hours
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                onClick={handleReset}
                className="px-8 py-3 glassy-button rounded-xl font-bold transition-all relative z-10"
              >
                Submit Another Inquiry
              </motion.button>
            </motion.div>
          ) : (
            // Form State
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-900 dark:text-white">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 rounded-lg bg-white dark:bg-zinc-950 border ${fieldErrors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-200 dark:border-gray-800/50 focus:border-blue-500/50 dark:focus:border-gray-600'} focus:bg-white dark:focus:bg-zinc-900 focus:outline-none focus:ring-4 focus:ring-blue-500/5 transition text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-sm`}
                    placeholder="John Doe"
                  />
                  {fieldErrors.name && (
                    <p className="mt-1 text-xs text-red-500">{fieldErrors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-900 dark:text-white">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 rounded-lg bg-white dark:bg-zinc-950 border ${fieldErrors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-200 dark:border-gray-800/50 focus:border-blue-500/50 dark:focus:border-gray-600'} focus:bg-white dark:focus:bg-zinc-900 focus:outline-none focus:ring-4 focus:ring-blue-500/5 transition text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-sm`}
                    placeholder="john@example.com"
                  />
                  {fieldErrors.email && (
                    <p className="mt-1 text-xs text-red-500">{fieldErrors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-900 dark:text-white">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 rounded-lg bg-white dark:bg-zinc-950 border ${fieldErrors.phone ? 'border-red-500 focus:border-red-500' : 'border-gray-200 dark:border-gray-800/50 focus:border-blue-500/50 dark:focus:border-gray-600'} focus:bg-white dark:focus:bg-zinc-900 focus:outline-none focus:ring-4 focus:ring-blue-500/5 transition text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-sm`}
                    placeholder="+91 XXXXX XXXXX"
                  />
                  {fieldErrors.phone && (
                    <p className="mt-1 text-xs text-red-500">{fieldErrors.phone}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="project" className="block text-sm font-medium mb-2 text-gray-900 dark:text-white">
                    Project Type *
                  </label>
                  <select
                    id="project"
                    name="project"
                    required
                    value={formData.project}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 rounded-lg bg-white dark:bg-zinc-950 border ${fieldErrors.project ? 'border-red-500 focus:border-red-500' : 'border-gray-200 dark:border-gray-800/50 focus:border-blue-500/50 dark:focus:border-gray-600'} focus:bg-white dark:focus:bg-zinc-900 focus:outline-none focus:ring-4 focus:ring-blue-500/5 transition text-gray-900 dark:text-white shadow-sm`}
                  >
                    <option value="">Select a project type</option>
                    <option value="web-app">Web Application</option>
                    <option value="mobile-app">Mobile App</option>
                    <option value="landing-page">Landing Page</option>
                    <option value="saas">SaaS Platform</option>
                    <option value="design">UI/UX Design</option>
                    <option value="other">Other</option>
                  </select>
                  {fieldErrors.project && (
                    <p className="mt-1 text-xs text-red-500">{fieldErrors.project}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium mb-2 text-gray-900 dark:text-white">
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-zinc-950 border border-gray-200 dark:border-gray-800/50 focus:border-blue-500/50 dark:focus:border-gray-600 focus:bg-white dark:focus:bg-zinc-900 focus:outline-none focus:ring-4 focus:ring-blue-500/5 transition text-gray-900 dark:text-white shadow-sm"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="2-3-months">2-3 months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium mb-2 text-gray-900 dark:text-white">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-zinc-950 border border-gray-200 dark:border-gray-800/50 focus:border-blue-500/50 dark:focus:border-gray-600 focus:bg-white dark:focus:bg-zinc-900 focus:outline-none focus:ring-4 focus:ring-blue-500/5 transition text-gray-900 dark:text-white shadow-sm"
                  >
                    <option value="">Select budget</option>
                    <option value="less-than-50k">Less than ₹50K</option>
                    <option value="50k-1l">₹50K - ₹1L</option>
                    <option value="1l-2l">₹1L - ₹2L</option>
                    <option value="2l-5l">₹2L - ₹5L</option>
                    <option value="5l-10l">₹5L - ₹10L</option>
                    <option value="discuss">Let's discuss</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-900 dark:text-white">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-zinc-950 border border-gray-200 dark:border-gray-800/50 focus:border-blue-500/50 dark:focus:border-gray-600 focus:bg-white dark:focus:bg-zinc-900 focus:outline-none focus:ring-4 focus:ring-blue-500/5 transition resize-none text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-sm"
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                />
              </div>

              {/* Honeypot field - hidden from users */}
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
                style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }}
                aria-hidden="true"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 glassy-button rounded-xl font-bold transition-all relative z-10 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>

              <p className="text-center text-xs text-gray-500 dark:text-gray-500 mt-4">
                We respect your privacy. Your information will never be shared.
              </p>

              <p className="text-center text-xs text-gray-500 dark:text-gray-500 mt-2">
                Prefer email?{" "}
                <a href="mailto:hello.zenvoltra@gmail.com" className="text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white underline transition">
                  hello.zenvoltra@gmail.com
                </a>
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
