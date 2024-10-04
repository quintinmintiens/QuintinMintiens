import './index.css';
import React, { useRef, useEffect } from 'react';
import anime from 'animejs';

function Experience() {
  const experienceData = [
    {
      id: 1,
      title: "Toegepaste Informatica 3e graad",
      institution: "Broederschool Sint Niklaas",
      duration: "2018-2020"
    },  
    {
      id: 2,
      title: "Followspot",
      institution: "Deep Bridge",
      duration: "2021 - 2023"
    },
    {
      id: 3,
      title: "Toegepaste Informatica: Data Science & Artificial Intelligence",
      institution: "Hogeschool Gent",
      duration: "September 2020 - June 2024"
    },
    {
      id: 4,
      title: "Stage",
      description: "Creating a machine learning model to predict energy consumption in the Hot Strip Mill of ArcelorMittal",
      institution: "ArcelorMittal",
      duration: "Feb 2024 - May 2024"
    }
  ];

  const timelineRef = useRef(null);
  const timelineItemsRef = useRef([]);

  useEffect(() => {
    const timelineItems = timelineItemsRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const item = entry.target;
            const index = timelineItems.indexOf(item);
            anime({
              targets: item,
              translateY: [50, 0],
              opacity: [0, 1],
              easing: 'easeOutExpo',
              duration: 1000,
              delay: anime.stagger(200, { start: 500 + index * 200 }),
              complete: () => {
                observer.unobserve(item); // Remove the observer after the animation is complete
              }
            });
          }
        });
      },
      {
        rootMargin: '-50px 0px',
        threshold: 0,
      }
    );
    timelineItems.forEach((item) => observer.observe(item));
    return () => {
      observer.disconnect(); // Disconnect the observer when the component unmounts
    };
  }, []);
  

  return (
    <section id="experience" className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-medium mb-2">Experience</h2>
          <p className="text-lg text-gray-600">My timeline of studies and work experience</p>
        </div>
        <div className="relative wrap overflow-hidden px-10 py-5" ref={timelineRef}>
          <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{ left: "50%" }}></div>
          {experienceData.map((experience, index) => (
            <div className={`mb-8 flex justify-between items-center w-full timeline-item ${index % 2 === 0 ? 'left-timeline' : 'right-timeline'}`} key={experience.id} ref={(el) => timelineItemsRef.current[index] = el}>
              <div className="w-5/12"></div>
              <div className="z-20 flex items-center bg-white bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">•</h1>
              </div>
              <div className="bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-gray-800 text-xl">{experience.title}</h3>
                <h4 className="mb-3 text-gray-700">{experience.institution}</h4>
                <p className="text-sm text-gray-700">{experience.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
}

export default Experience;
