import React from "react";
import { motion } from "framer-motion";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";



import About from "./sections/About";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-white">

      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 w-full bg-bg/80 backdrop-blur-md py-4 px-8 flex justify-between items-center z-50">
        <div className="font-bold text-lg">VD</div>

        <div className="space-x-6 text-muted">
          <a href="#about" className="hover:text-primary transition">About</a>
          <a href="#projects" className="hover:text-primary transition">Projects</a>
          <a href="#contact" className="hover:text-primary transition">Contact</a>
        </div>
      </nav>


      {/* ================= HERO SECTION ================= */}
      <section className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 relative overflow-hidden pt-24">

  {/* Background Glow */}
  <div className="absolute top-[-200px] right-[-200px] w-[500px] h-[500px] bg-primary opacity-10 blur-3xl rounded-full"></div>
  <div className="absolute bottom-[-200px] left-[-200px] w-[500px] h-[500px] bg-accent opacity-10 blur-3xl rounded-full"></div>

  <div className="max-w-6xl mx-auto relative z-10">

  {/* Your Name – Main Title */}
  <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
      Viraj Devkar
    </span>
  </h1>

  {/* Tagline – Smaller */}
  <h2 className="text-xl md:text-3xl font-semibold text-white/90 leading-tight">
    Building Intelligent Systems That
    <span className="text-primary"> Convert Data Into Decisions</span>
  </h2>

  {/* Description – Smallest */}
  <p className="mt-6 text-lg text-muted max-w-2xl leading-relaxed">
    AI Engineer focused on backend architecture, scalable ML systems,
    and production-ready data solutions.
  </p>

  {/* Buttons */}
  <div className="mt-8 flex gap-4">
    <a
      href="#projects"
      className="px-6 py-3 bg-gradient-to-r from-primary to-accent rounded-lg font-medium shadow-lg shadow-primary/10 hover:shadow-primary/30 transition"
    >
      View Projects
    </a>

    <a
      href="/resume.pdf"
      download
      className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-black transition shadow-lg shadow-primary/10 hover:shadow-primary/30"
    >
      Download Resume
    </a>
  </div>

</div>

</section>



      {/* ================= ABOUT SECTION ================= */}
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Contact/>

    </div>
  );
}
