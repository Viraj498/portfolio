import React from "react";

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-bg">
      <div className="max-w-6xl mx-auto px-8">

        <h2 className="text-3xl md:text-4xl font-bold mb-20">
          Experience
        </h2>

        <div className="relative border-l border-white/10 pl-10 space-y-16">

          {/* Experience 1 */}
          <div className="relative">
            <div className="absolute -left-[13px] top-2 w-6 h-6 bg-primary rounded-full"></div>

            <h3 className="text-xl font-semibold">
              __Python Developer — ShadowFox
            </h3>

            <p className="text-muted text-sm mb-4">
              August 2025
            </p>

            <ul className="space-y-2 text-muted text-sm leading-relaxed">
              <li>• Developed scalable backend modules using Django</li>
              <li>• Designed RESTful APIs for structured data handling</li>
              <li>• Implemented modular architecture patterns</li>
              <li>• Improved query performance & backend maintainability</li>
            </ul>
          </div>

          {/* Experience 2 */}
          <div className="relative">
            <div className="absolute -left-[13px] top-2 w-6 h-6 bg-primary rounded-full"></div>

            <h3 className="text-xl font-semibold">
            __Python Developer — QSkill
            </h3>

            <p className="text-muted text-sm mb-4">
              Jan 2026 – Feb 2026
            </p>

            <ul className="space-y-2 text-muted text-sm leading-relaxed">
              <li>• Applied Python and SQL in real-world guided projects</li>
              <li>• Strengthened debugging and problem-solving skills</li>
              <li>• Built structured full-stack modules</li>
              <li>• Improved data handling and logical architecture design</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
