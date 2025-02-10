import React, { useState, useEffect } from "react";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import Navbar from "../Components/Navbar";
import resume from "../assets/resume.jpg";
import { FaSchool } from "react-icons/fa6";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import { motion, useAnimation } from "framer-motion";
import education from "../assets/education.png";
import { useInView } from "react-intersection-observer";
import exp from "../assets/exp.png";
import Contact from "../Components/Contact";
import Resume from '../assets/ArshpreetKaur.pdf';
import Form from "../Components/Form";
import Footer from "../Components/Footer";

const Home = () => {
  const [activePage, setActivePage] = useState("Education");
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });
  const [newref, newinView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView || newinView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: "-100%" });
    }
  }, [controls, inView, newinView]);

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div
        className="flex flex-col md:flex-row justify-center items-center p-6 md:p-10 overflow-hidden relative"
        id="home"
        style={{
          height: "80vh",
          background: "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
        }}
      >
        <motion.img
          src={s1}
          alt=""
          className="absolute left-0 overflow-hidden hidden lg:block"
          style={{ marginTop: "14rem" }}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.img
          src={s2}
          alt=""
          className="absolute right-0 h-60 md:h-96 mt-10 hidden lg:block"
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        <div className="text-center">
          <h1 className="text-xl md:text-2xl font-semibold">Hi, I am</h1>
          <h1 className="text-2xl md:text-3xl font-bold mt-1">React.js Developer</h1>
          <h1 className="text-xl md:text-2xl font-bold mt-1">Web Developer</h1>
        </div>
      </div>

      {/* About Me Section */}
      <div className="flex flex-col md:flex-row justify-around items-center p-6 md:p-10 gap-6" id="resume">
        <img src={resume} alt="" className="w-64 md:w-80 rounded-md" />
        <div className="max-w-lg">
          <h1 className="text-2xl md:text-3xl font-extrabold text-center">About Me</h1>
          <p className="font-normal text-gray-600 p-3 text-justify">
            A skilled professional specializing in building responsive,
            user-friendly websites and dynamic web applications. Combines
            expertise in core web technologies like HTML, CSS, and JavaScript
            with advanced knowledge of React.js to create interactive user
            interfaces, reusable components, and seamless user experiences.
          </p>
          <div className="p-3">
            <h2>Name: <span className="text-gray-600">Arshpreet Kaur</span></h2>
            <h2>Email: <span className="text-gray-600">arshpreet27014@gmail.com</span></h2>
            <h2>Phone: <span className="text-gray-600">9041127014</span></h2>
            <h2>LinkedIn: <a href="https://www.linkedin.com/in/arshpreet-kaur-576938277" className="text-blue-500">My LinkedIn</a></h2>
            <a href={Resume} download='resume' className=" mt-3 w-32 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center">Download CV</a>
          </div>
        </div>
      </div>

      <hr className="w-full bg-gray-50 mt-8" />

      {/* Slider Section */}
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/4 flex flex-col items-center p-4 space-y-4">
          <ul className="space-y-4">
            <li
              onClick={() => setActivePage("Education")}
              className={`cursor-pointer p-2 rounded-lg ${activePage === "Education" ? "text-white bg-blue-500" : "text-gray-800"}`}
            >
              <FaGraduationCap className="text-2xl" />
            </li>
            <li
              onClick={() => setActivePage("Experience")}
              className={`cursor-pointer p-2 rounded-lg ${activePage === "Experience" ? "text-white bg-green-500" : "text-gray-800"}`}
            >
              <FaBriefcase className="text-2xl" />
            </li>
          </ul>
        </div>

        <div className="w-full md:w-3/4 p-6">
          {activePage === "Education" && (
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Education</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium">2020-2024</h3>
                  <h3 className="text-2xl font-bold">Bachelor of Science in Computer Science</h3>
                  <h3 className="text-xl font-bold">BBSBEC Fatehgarh Sahib</h3>
                  <p>Completed B-Tech in Computer Science and Engineering with a 7.68 CGPA.</p>
                </div>
                <div>
                  <h3 className="text-xl font-medium">2024</h3>
                  <h3 className="text-2xl font-bold">Full Stack Web Development Training</h3>
                  <h3 className="text-xl font-bold">Ducat Noida</h3>
                  <p>Ducat is a premier IT training institute offering comprehensive courses in software development, data science, and cloud computing.</p>
                </div>
              </div>
            </div>
          )}
          {activePage === "Experience" && (
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Experience</h2>
              <h3 className="text-xl font-semibold">Freelance Front-end Developer</h3>
              <p>Developed the complete front-end for paslaundry.in, creating a responsive and user-friendly interface.</p>
              <h3 className="text-xl font-semibold mt-4">Front-end Developer at Bringle Tech Private Limited Mohali</h3>
              <p>(August 2024 - Present)</p>
            </div>
          )}
        </div>
      </div>

      <hr className="w-full bg-gray-50 mt-8" />

      <Skills />
      <Projects />
      <Contact />
      <Form />
      <Footer />
    </div>
  );
};

export default Home;
