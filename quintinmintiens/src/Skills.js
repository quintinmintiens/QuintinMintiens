import React, { useEffect, useRef } from "react";
import "./index.css";
import anime from "animejs/lib/anime.es.js";

function Skills() {
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          anime.timeline({ loop: false }).add({
            targets: ".bar",
            width: (el) => el.getAttribute("data-percent"),
            easing: "easeInOutQuad",
            duration: 1000,
            delay: (el, i) => i * 100,
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(skillsRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const skills = [
    { name: "HTML", level: "90%" },
    { name: "CSS", level: "85%" },
    { name: "JavaScript", level: "80%" },
    { name: "React", level: "75%" },
    { name: "Node.js", level: "70%" },
    { name: "MySQL", level: "70%" },
    { name: "MongoDB", level: "65%" },
    { name: "Postgress", level: "65%" },
    { name: "Python", level: "85%" },
    { name: ".NET", level: "80%" },
    { name: "C#", level: "70%" },
    { name: "Java", level: "80%" },
    { name: "Visual Basic", level: "90%" },
    { name: "Windows Server", level: "60%" },
    { name: "Linux", level: "75%" },
  



  ];

  return (
    <section id="skills" className="bg-gray-200 py-20" ref={skillsRef}>
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">Skills</h2>
        </div>
        <div className="flex flex-wrap justify-center">
          {skills.map((skill) => (
            <div key={skill.name} className="p-4 w-full md:w-1/2 lg:w-1/3">
              <div className="bg-white border rounded-lg shadow-lg p-5">
                <h3 className="text-lg font-bold mb-3">{skill.name}</h3>
                <div className="relative w-full h-2 bg-gray-300 rounded-lg">
                  <div
                    className="bar absolute top-0 left-0 h-2 bg-indigo-500 rounded-lg"
                    style={{ width: 0 }}
                    data-percent={skill.level}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
