import React from "react";

export default function TechStack() {
  const skills = [
    "Python",
    "SQL",
    "Django",
    "JavaScript",
    "React",
    "Machine Learning",
    "Scikit-Learn",
    "TensorFlow",
    "Power BI",
    "MySQL",
    "Git",
    "AWS"
  ];

  return (
    <section id="tech" className="py-28 bg-bg">
      <div className="max-w-6xl mx-auto px-8">

        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          Tech Stack
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-surface p-6 rounded-xl border border-white/5 text-center hover:border-primary hover:scale-105 transition duration-300"
            >
              <p className="text-lg font-medium">{skill}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
