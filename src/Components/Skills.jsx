import React, { useEffect, useState, useRef } from 'react';
import python from "../assets/python.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import talwind from "../assets/talwind.png";
import vite from "../assets/vite.png";
import bootstrap from "../assets/bootstrap.png";
import react from "../assets/react.svg";
import sql from "../assets/sql.png";
// import figma from "../assets/figma-logo.png";

const skillsData = [
  { src: python, title: "Python" },
  { src: html, title: "HTML" },
  { src: css, title: "CSS" },
  { src: javascript, title: "JavaScript" },
  // { src: figma, title: "Figma" },
  { src: bootstrap, title: "Bootstrap" },
  { src: talwind, title: "Tailwind" },
  { src: vite, title: "Vite" },
  { src: react, title: "React" },
  { src: sql, title: "SQL" },
];

const Skills = () => {
  const skillsRef = useRef(null); // Ref for the skills section
  const [isVisible, setIsVisible] = useState(false); // State to track visibility of the section
  const [animationTriggered, setAnimationTriggered] = useState(false); // State to control animation triggering

  // Set up Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // When skills div comes into view, trigger animation
          setIsVisible(true);
          setAnimationTriggered(true); // Trigger the animation
        } else {
          setIsVisible(false); // Reset animation when out of view
          setAnimationTriggered(false);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the div is visible
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    // Cleanup observer on unmount
    return () => {
      if (skillsRef.current) observer.unobserve(skillsRef.current);
    };
  }, []);

  return (
    <div ref={skillsRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-center mt-10" id='skills' style={{background: "rgb(209,208,208)",
      background: "radial-gradient(circle, rgba(209,208,208,1) 0%, rgba(232,213,158,1) 48%, rgba(242,240,239,1) 100%)"}}>
      {skillsData.map((skill, index) => {
        // Determine the row index (even or odd rows)
        const rowIndex = Math.floor(index / 4);

        // Determine animation direction based on row (alternating left to right and right to left)
        const animationClass = rowIndex % 2 === 0 ? 'animate-left-to-right' : 'animate-right-to-left';

        return (
          <div
            key={index}
            className={`flex border-[] flex-col mt-2 items-center  ${animationTriggered ? animationClass : ''} delay-${index * 100}`}
            style={{ opacity: isVisible ? 1 : 0 }} // Fade in the images when section is visible
          >
            <img src={skill.src} alt={skill.title} className='h-16 w-16 sm:h-20 sm:w-20' />
            <p className='mt-2 text-xs sm:text-sm font-medium'>{skill.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
