import './index.css'

import { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";

function Header() {
  useEffect(() => {
    anime.timeline({ loop: false })
      .add({
        targets: ".text-animated",
        translateY: [100, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: "easeOutExpo",
        delay: (el, i) => 150 + 50 * i
      })
      .add({
        targets: ".logo-animated",
        translateY: [-100, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: "easeOutExpo",
        delay: (el, i) => 150 + 50 * i
      });
  }, []);

  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0 logo-animated">
         <img src={require("./ProfilePic.jpg")} alt='Profile Picture' className='rounded-full w-8 h-8 mx-auto'/>
          <span className="ml-3 text-xl logo-text text-white">Quintin Mintiens</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center text-gray-400">
          <a className="mr-5 hover:text-white cursor-pointer">About Me</a>
          <a className="mr-5 hover:text-white cursor-pointer">Projects</a>
          <a className="mr-5 hover:text-white cursor-pointer">Skills</a>
          <a className="mr-5 hover:text-white cursor-pointer">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
