"use client";

import { useEffect, useRef, useState } from "react";
import anime from "animejs/lib/anime.es.js";

const skillCategories = [
  {
    name: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "SQL", "C#", "Java", "Rust"],
  },
  {
    name: "Data Engineering",
    skills: ["Polars", "Apache Airflow", "Pandas", "PyArrow", "Power BI", "DWH Design"],
  },
  {
    name: "Backend",
    skills: ["FastAPI", "Pydantic", "SQLAlchemy", "Node.js", ".NET", "PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    name: "Frontend",
    skills: ["Vue.js", "React", "Next.js", "Vite", "Tailwind CSS"],
  },
  {
    name: "AI & ML",
    skills: ["Machine Learning", "Deep Learning", "OpenAI API", "Pydantic AI", "Ollama", "Sentence Transformers"],
  },
  {
    name: "DevOps & Cloud",
    skills: ["Azure", "Azure DevOps", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Linux"],
  },
  {
    name: "Networking",
    skills: ["Network Engineering"],
  },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated) {
          setAnimated(true);
          anime({
            targets: ".skill-card",
            translateY: [40, 0],
            opacity: [0, 1],
            duration: 800,
            easing: "easeOutExpo",
            delay: anime.stagger(100),
          });
          anime({
            targets: ".skill-chip",
            scale: [0, 1],
            opacity: [0, 1],
            duration: 500,
            easing: "easeOutExpo",
            delay: anime.stagger(30, { start: 300 }),
          });
          observer.unobserve(node);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [animated]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section-base dark:bg-surface-800 bg-light-100"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-gray-100 text-gray-900">
            Skills
          </h2>
          <div className="section-divider mb-6" />
          <p className="max-w-2xl mx-auto text-base md:text-lg dark:text-gray-400 text-gray-600">
            I love building things end-to-end. From data pipelines to web apps, from
            infrastructure to machine learning &mdash; if you have a challenge, let&apos;s talk.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="skill-card opacity-0 glass-card p-6 hover:shadow-glow-accent hover:-translate-y-0.5 transition-all duration-300"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 gradient-text">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-chip opacity-0 px-3 py-1.5 text-sm rounded-full font-medium dark:bg-surface-600/80 dark:text-gray-200 bg-gray-100 text-gray-700 border dark:border-white/5 border-gray-200/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
