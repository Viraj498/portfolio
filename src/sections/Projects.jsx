import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-surface">
      <div className="max-w-6xl mx-auto px-8">

        <h2 className="text-3xl md:text-4xl font-bold mb-20">
          Featured Projects
        </h2>

        {/* Project 1 */}
        <div className="mb-24 grid md:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Predictive Analytics System
            </h3>

            <p className="text-muted leading-relaxed mb-6">
              Designed and implemented a machine learning pipeline that processes
              structured datasets, performs feature engineering, and evaluates
              multiple predictive models to generate business insights.
            </p>

            <ul className="space-y-3 text-muted text-sm">
              <li>• Automated preprocessing pipeline</li>
              <li>• Model evaluation & performance comparison</li>
              <li>• SQL-based data ingestion</li>
              <li>• Visualization layer integration</li>
            </ul>

            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="px-5 py-2 bg-primary text-black rounded-md font-medium"
              >
                View Code
              </a>

              <a
                href="#"
                className="px-5 py-2 border border-primary text-primary rounded-md"
              >
                Live Demo
              </a>
            </div>
          </div>

          {/* Right Visual Placeholder */}
          <img
            src="src/sections/public/predictive-analytics-system.png"
            alt="Predictive Analytics System"
            className="rounded-xl shadow-lg border border-white/10"
          />


        </div>

        {/* Project 2 */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <img
            src="src/sections/public/log_analyzer.png"
            alt="Log Analyzer"
            className="rounded-xl shadow-lg border border-white/10"
          />

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Log Analyzer
            </h3>

            <p className="text-muted leading-relaxed mb-6">
            This project is a professional Python-based log analyzer that processes server log files,
            safely handles corrupted data, and generates a clean summary report.

            </p>

            <ul className="space-y-3 text-muted text-sm">
              <li>• Reads raw log files</li>
              <li>• Validates and cleans data</li>
              <li>• Counts INFO, WARNING, ERROR logs</li>
              <li>• Extracts error frequencies</li>
              <li>• Never crashes on bad data</li>
              <li>• Generates structured report</li>
            </ul>

            <div className="mt-6 flex gap-4">
              <a
                href="https://github.com/Viraj498/log-analyzer.git" target="_blank"
                className="px-5 py-2 bg-primary text-black rounded-md font-medium"
              >
                View Code
              </a>

              <a
                href="#"
                className="px-5 py-2 border border-primary text-primary rounded-md"
              >
                Documentation
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
