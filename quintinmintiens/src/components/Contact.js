"use client";

import { useEffect, useRef, useState } from "react";
import anime from "animejs/lib/anime.es.js";

export default function Contact() {
  const sectionRef = useRef(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated) {
          setAnimated(true);
          anime.timeline({ loop: false })
            .add({
              targets: ".contact-content",
              translateY: [30, 0],
              opacity: [0, 1],
              duration: 800,
              easing: "easeOutExpo",
              delay: anime.stagger(150),
            });
          observer.unobserve(node);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [animated]);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-base dark:bg-surface-800 bg-light-100"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-gray-100 text-gray-900">
            Contact
          </h2>
          <div className="section-divider" />
        </div>

        <div className="glass-card p-8 md:p-12 text-center">
          <p className="contact-content opacity-0 text-base md:text-lg mb-8 dark:text-gray-300 text-gray-600 leading-relaxed">
            Have a project in mind, a question, or just want to say hello? I&apos;d love to hear from you.
          </p>

          <a
            href="mailto:info@quintinmintiens.be"
            className="contact-content opacity-0 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-purple text-white font-semibold text-lg hover:shadow-glow-accent hover:-translate-y-0.5 transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            info@quintinmintiens.be
          </a>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-sm dark:text-gray-500 text-gray-400">
            &copy; {new Date().getFullYear()} Quintin Mintiens. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
