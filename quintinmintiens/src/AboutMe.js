import { useState, useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";

function AboutMe() {
  const [isAnimated, setIsAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionNode = sectionRef.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsAnimated(true);
          observer.unobserve(sectionNode);
        }
      });
    }, { threshold: 0.5 });

    observer.observe(sectionNode);
  }, []);

  useEffect(() => {
    if (isAnimated) {
      anime.timeline({ loop: false })
        .add({
          targets: ".profile-pic",
          translateX: [-200, 0],
          opacity: [0, 1],
          duration: 1000,
          easing: "easeOutExpo",
        })
        .add({
          targets: ".text-animated",
          translateY: [100, 0],
          opacity: [0, 1],
          duration: 1000,
          easing: "easeOutExpo",
          delay: (el, i) => 150 + 50 * i
        }, "-=800")
        .add({
          targets: ".download-button",
          translateY: [50, 0],
          opacity: [0, 1],
          duration: 1000,
          easing: "easeOutExpo",
        });
    }
  }, [isAnimated]);

  return (
    <section ref={sectionRef} id="about" className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <img src={require("./ProfilePic.jpg")} alt='Profile Picture' className='profile-pic rounded-full w-15 h-15 mx-auto'/>
          <p className={`text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto my-10 ${isAnimated ? "text-animated" : ""}`}>
          Hey there, I'm Quintin Mintiens, a 21-year-old student at HOGENT studying computer science. I'm currently specializing in data science and artificial intelligence, and I'm already working as a junior software developer. I'm always hungry for knowledge and eager to learn new skills to stay ahead in the rapidly evolving tech industry. I'm excited to share my journey with you as I continue to grow and make an impact in the world of technology.
          </p>
        </div>
        <div className={`flex justify-center ${isAnimated ? "text-animated" : ""}`}>
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline download-button">
          <a href={require("./my-cv.pdf")} download>Download CV</a>

          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
