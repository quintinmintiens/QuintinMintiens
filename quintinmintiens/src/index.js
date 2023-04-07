import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Header from './Header';
import About from './About';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Experience from './Experience';
import Contact from './Contact';
import Projects from './Projects';
// Scroll animation



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <Header/>
    <About/>
    <AboutMe/>
    <Skills/>
    <Experience/>
    <Projects/>
    
    <Contact/>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
