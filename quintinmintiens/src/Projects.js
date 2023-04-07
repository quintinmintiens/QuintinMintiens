import { useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es.js";

function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const sectionTitle = section.querySelector(".section-title");
    const cards = section.querySelectorAll(".card");

    // Intersection Observer to detect when section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate section title
            anime({
              targets: sectionTitle,
              translateY: [-100, 0],
              opacity: [0, 1],
              duration: 1000,
              easing: "easeOutExpo",
            });

            // Animate cards
            anime({
              targets: cards,
              translateY: [100, 0],
              opacity: [0, 1],
              duration: 1000,
              easing: "easeOutExpo",
              delay: anime.stagger(100),
            });

            // Unobserve section to prevent re-animating
            observer.unobserve(section);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(section);

    return () => {
      observer.unobserve(section);
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl text-center font-bold mb-10 section-title">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-lg overflow-hidden card"
            >
              <div className="relative">
                <img
                  className="w-full h-auto"
                  src="https://via.placeholder.com/300x200"
                  alt="Placeholder"
                />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
                  <a
                    href="https://github.com"
                    className="text-white font-bold text-lg uppercase hover:underline"
                  >
                    Project Name
                  </a>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-700 mb-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-sm">React, Redux</span>
                  <span className="text-gray-600 text-sm">Feb 2023</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
