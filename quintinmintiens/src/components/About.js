"use client";

import { useEffect, useRef, useState } from "react";
import anime from "animejs/lib/anime.es.js";

export default function About() {
  const sectionRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  const getAge = () => {
    const birth = new Date(2001, 6, 2); // July 2, 2001 (month is 0-indexed)
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  useEffect(() => {
    const node = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated) {
          setAnimated(true);
          anime.timeline({ loop: false })
            .add({
              targets: ".about-image",
              scale: [0.8, 1],
              opacity: [0, 1],
              duration: 800,
              easing: "easeOutExpo",
            })
            .add({
              targets: ".about-text",
              translateY: [30, 0],
              opacity: [0, 1],
              duration: 800,
              easing: "easeOutExpo",
              delay: anime.stagger(150),
            }, "-=500");
          observer.unobserve(node);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [animated]);

  return (
    <section id="about" ref={sectionRef} className="section-base">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-gray-100 text-gray-900">
            About Me
          </h2>
          <div className="section-divider" />
        </div>

        <div className="glass-card p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Profile picture */}
            <div className="about-image opacity-0 shrink-0">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent-cyan to-accent-purple rounded-full blur-sm opacity-60" />
                <img
                  src="/ProfilePic.jpg"
                  alt="Quintin Mintiens"
                  className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover"
                />
              </div>
            </div>

            {/* Bio text */}
            <div className="text-center md:text-left space-y-4">
              <p className="about-text opacity-0 text-base md:text-lg leading-relaxed dark:text-gray-300 text-gray-600">
                I&apos;m Quintin Mintiens, a {getAge()}-year-old Junior Data Engineer currently working
                at Kopwerk. I hold a bachelor&apos;s degree in Applied Computer Science: Data Science
                and AI from HOGENT.
              </p>
              <p className="about-text opacity-0 text-base md:text-lg leading-relaxed dark:text-gray-300 text-gray-600">
                With a strong foundation in data engineering, data science, and AI, I&apos;m passionate
                about building robust data pipelines and infrastructure. Driven by continuous learning,
                I&apos;m committed to staying at the forefront of technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
