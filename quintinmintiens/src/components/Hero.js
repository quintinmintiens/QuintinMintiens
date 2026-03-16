"use client";

import { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    anime.timeline({ loop: false })
      .add({
        targets: ".hero-subtitle",
        translateY: [30, 0],
        opacity: [0, 1],
        duration: 800,
        easing: "easeOutExpo",
        delay: 200,
      })
      .add({
        targets: ".hero-name",
        translateY: [40, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: "easeOutExpo",
      }, "-=600")
      .add({
        targets: ".hero-role",
        translateY: [30, 0],
        opacity: [0, 1],
        duration: 800,
        easing: "easeOutExpo",
      }, "-=600")
      .add({
        targets: ".hero-scroll",
        opacity: [0, 1],
        duration: 600,
        easing: "easeOutExpo",
      }, "-=200");
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative text-center px-6">
        <p className="hero-subtitle text-lg md:text-xl font-light mb-4 opacity-0 dark:text-gray-400 text-gray-500">
          Hello, I&apos;m
        </p>
        <h1 className="hero-name text-5xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 gradient-text">
          Quintin Mintiens
        </h1>
        <p className="hero-role text-xl md:text-2xl font-medium opacity-0 dark:text-gray-300 text-gray-600">
          Junior Data Engineer
        </p>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="hero-scroll absolute bottom-10 opacity-0 animate-bounce-slow dark:text-gray-400 text-gray-500 hover:text-accent-cyan transition-colors"
        aria-label="Scroll to about section"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
    </section>
  );
}
