import React from "react";
import './index.css'
import { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";

function About() {
  useEffect(() => {
    anime.timeline({ loop: false }).add({
      targets: ".text-animated",
      translateY: [100, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: "easeOutExpo",
      delay: (el, i) => 150 + 50 * i,
    });
  }, []);

  return (
    <div className="h-screen flex items-center">
      <div className="text-center w-full">
        <h1 className="text-6xl text-gray-900 font-bold mb-2 text-animated">
          Hi, I'm Quintin Mintiens
        </h1>
        <p className="text-2xl text-gray-800 mb-8 text-animated">
          Junior Software Developer
        </p>
      </div>
    </div>
  );
}

export default About;
