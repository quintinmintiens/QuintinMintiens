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
          Hey there, I'm Quintin Mintiens, a 23-year-old with a bachelor's degree in Applied Computer Science: Data Science and AI from HOGENT. With a strong foundation in data science and artificial intelligence, I’m actively working on freelance projects to apply my skills and tackle real-world challenges. Driven by a passion for continuous learning, I’m committed to staying at the forefront of technology and making a meaningful impact in the industry. Excited to share my journey as I keep growing and evolving in the world of tech!
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
