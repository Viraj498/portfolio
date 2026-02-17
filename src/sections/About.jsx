import React from "react";
import Reveal from "../components/Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-surface relative"
    >
      <Reveal className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">

        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl tracking-tight font-bold mb-16">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">

          {/* Left Column */}
          <div>
            <p className="text-muted text-lg leading-relaxed">
              I approach engineering through system design thinking —
              focusing on scalable backend architectures and data-driven
              machine learning systems built for production environments.
            </p>

            <p className="mt-6 text-muted leading-relaxed">
              My work combines Python development, structured SQL data
              processing, and ML model pipelines designed to transform
              raw information into actionable business insights.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-6">

            <div className="bg-bg p-6 rounded-xl border border-white/5 
              hover:border-primary/40 hover:-translate-y-1 
              hover:shadow-lg hover:shadow-primary/10 
              transition duration-300">

              <h3 className="text-xl font-semibold mb-2 text-primary">
                Architecture-First Thinking
              </h3>

              <p className="text-muted text-sm leading-relaxed">
                I design data flow, system structure, and modular components
                before writing implementation code.
              </p>
            </div>

            <div className="bg-bg p-6 rounded-xl border border-white/5 
              hover:border-primary/40 hover:-translate-y-1 
              hover:shadow-lg hover:shadow-primary/10 
              transition duration-300">

              <h3 className="text-xl font-semibold mb-2 text-primary">
                Production Mindset
              </h3>

              <p className="text-muted text-sm leading-relaxed">
                Clean APIs, optimized queries, scalable backend logic,
                and maintainable code structure.
              </p>
            </div>

            <div className="bg-bg p-6 rounded-xl border border-white/5 
              hover:border-primary/40 hover:-translate-y-1 
              hover:shadow-lg hover:shadow-primary/10 
              transition duration-300">

              <h3 className="text-xl font-semibold mb-2 text-primary">
                AI & Data Focus
              </h3>

              <p className="text-muted text-sm leading-relaxed">
                Machine learning pipelines, predictive modeling,
                and real-world problem solving.
              </p>
            </div>

          </div>

        </div>

      </Reveal>

      {/* Section Divider */}
      <div className="h-px w-full bg-gradient-to-r 
        from-transparent via-white/10 to-transparent mt-24">
      </div>

    </section>
  );
}
