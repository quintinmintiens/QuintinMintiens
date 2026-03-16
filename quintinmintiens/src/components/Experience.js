"use client";

import { useEffect, useRef, useState } from "react";
import anime from "animejs/lib/anime.es.js";

const experiences = [
  {
    title: "Junior Data Engineer",
    organization: "Kopwerk",
    duration: "Jan 2025 - Present",
    type: "work",
    current: true,
  },
  {
    title: "Internship ML Engineer",
    organization: "ArcelorMittal",
    duration: "Feb 2024 - May 2024",
    description:
      "Created a machine learning model to predict energy consumption in the Hot Strip Mill.",
    type: "work",
  },
  {
    title: "Applied CS: Data Science & AI",
    organization: "HOGENT",
    duration: "Sep 2020 - Jun 2024",
    type: "education",
  },
  {
    title: "Followspot Operator",
    organization: "Deep Bridge",
    duration: "2021 - 2023",
    type: "work",
  },
  {
    title: "Applied Computer Science (Secondary)",
    organization: "Broederschool Sint-Niklaas",
    duration: "2018 - 2020",
    type: "education",
  },
];

export default function Experience() {
  const sectionRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated) {
          setAnimated(true);
          anime({
            targets: ".timeline-item",
            translateX: [-30, 0],
            opacity: [0, 1],
            duration: 800,
            easing: "easeOutExpo",
            delay: anime.stagger(150),
          });
          observer.unobserve(node);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [animated]);

  return (
    <section id="experience" ref={sectionRef} className="section-base">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-gray-100 text-gray-900">
            Experience
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-base md:text-lg dark:text-gray-400 text-gray-600">
            My timeline of studies and work experience
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-cyan via-accent-blue to-accent-purple" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item opacity-0 relative pl-12 md:pl-16">
                {/* Dot */}
                <div
                  className={`absolute left-2.5 md:left-4.5 top-6 w-3 h-3 rounded-full border-2 ${
                    exp.current
                      ? "bg-accent-cyan border-accent-cyan shadow-glow-cyan"
                      : "dark:bg-surface-700 bg-white dark:border-gray-500 border-gray-300"
                  }`}
                />

                {/* Card */}
                <div className="glass-card p-6 hover:shadow-glow-accent hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold dark:text-gray-100 text-gray-900">
                      {exp.title}
                    </h3>
                    <span
                      className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                        exp.type === "work"
                          ? "bg-accent-cyan/10 text-accent-cyan"
                          : "bg-accent-purple/10 text-accent-purple"
                      }`}
                    >
                      {exp.type === "work" ? "Work" : "Education"}
                    </span>
                  </div>
                  <p className="text-sm font-medium mb-1 gradient-text">
                    {exp.organization}
                  </p>
                  <p className="text-sm dark:text-gray-400 text-gray-500 mb-2">
                    {exp.duration}
                  </p>
                  {exp.description && (
                    <p className="text-sm dark:text-gray-300 text-gray-600 mt-2">
                      {exp.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
