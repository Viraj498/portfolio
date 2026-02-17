import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-surface relative">

      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-accent/5 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-8 text-center relative z-10">

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let’s Build Intelligent Systems Together
        </h2>

        <p className="text-muted mb-12 text-lg leading-relaxed">
          I’m currently open to roles in Data Analysis, AI Engineering,
          and Software Development where I can contribute to scalable
          backend systems and data-driven applications.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">

          <a
            href="mailto:devkarviraj498@gmail.com"
            className="px-8 py-3 bg-gradient-to-r from-primary to-accent rounded-lg font-medium text-black hover:opacity-90 transition"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/viraj-devkar"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-black transition"
          >
            LinkedIn
          </a>

        </div>

      </div>
    </section>
  );
}
