import CTA from "@/components/CTA";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import ThemeDebug from "@/components/ThemeDebug";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="relative bg-white dark:bg-black text-gray-900 dark:text-white overflow-x-hidden transition-colors duration-300">
      <div className="noise-overlay" />
      <ThemeDebug />

      {/* Global Atmospheric Lighting - "The Aura" */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Core Aura Light Source - Spills into Hero */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] h-[800px] bg-gradient-to-b from-blue-400/20 via-blue-200/5 to-transparent dark:from-blue-600/30 dark:via-blue-800/10 dark:to-transparent blur-[140px] -translate-y-[40%] opacity-90" />

        {/* Secondary Bloom Layer - Deeper atmospheric depth */}
        <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-indigo-300/15 via-purple-200/5 to-transparent dark:from-indigo-900/15 dark:to-transparent blur-[100px] -translate-y-[20%] opacity-60" />

        {/* Mesh Gradients - Distributed for better balance - more vibrant in light mode */}
        <div className="absolute top-[-5%] left-[-10%] w-[45%] h-[45%] bg-blue-400/15 dark:bg-blue-500/10 blur-[120px] rounded-full animate-drift" />
        <div className="absolute top-[15%] right-[-10%] w-[40%] h-[40%] bg-purple-400/15 dark:bg-purple-500/10 blur-[120px] rounded-full animate-drift" style={{ animationDelay: '-5s' }} />
        <div className="absolute bottom-[20%] left-[5%] w-[50%] h-[50%] bg-pink-300/10 dark:bg-indigo-500/10 blur-[130px] rounded-full animate-drift" style={{ animationDelay: '-10s' }} />
        <div className="absolute top-[40%] right-[10%] w-[35%] h-[35%] bg-indigo-300/10 dark:from-blue-900/10 blur-[110px] rounded-full animate-drift" style={{ animationDelay: '-15s' }} />
      </div>

      <div className="fixed inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#fff_70%,transparent_110%)] pointer-events-none"></div>

      <Header />
      <div className="relative z-10">
        <Hero />
        <WhyChooseUs />
        <Services />
        <Process />
        <Projects />
        <CTA />
        <ContactForm />
        <Footer />
      </div>
    </main>
  );
}
