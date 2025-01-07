import { useState } from "react";
import { FaPhone } from "react-icons/fa";
import { FaMapSigns } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";

const ContactSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null); // Track which card is hovered

  return (
    <div id="contact" className="px-4 py-10">
      <h1 className="text-center text-3xl md:text-4xl font-extrabold">Contact Me</h1>
      <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-6">
        {/* Contact Number Card */}
        <div
          className={`h-48 w-full sm:w-80 p-4 flex flex-col justify-center items-center rounded-3xl shadow-2xl hover:bg-[#caf0f8] hover:shadow-none ${
            hoveredCard && hoveredCard !== "contact" ? "filter blur-md" : ""
          } 
          transform transition-all duration-300 ${
            hoveredCard === "contact" ? "scale-105 translate-y-[-10px]" : ""
          }`}
          onMouseEnter={() => setHoveredCard("contact")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="h-20 w-20 bg-blue-600 flex justify-center items-center rounded-full">
            <FaPhone className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-lg md:text-xl font-bold mt-2">Contact Number</h1>
          <a href="tel:+917982106703" className="text-blue-700 mt-2">
            +917982106703
          </a>
        </div>

        {/* Address Card */}
        <div
          className={`h-48 w-full sm:w-80 p-4 flex flex-col justify-center items-center rounded-3xl shadow-2xl hover:bg-[#caf0f8] hover:shadow-none ${
            hoveredCard && hoveredCard !== "address" ? "filter blur-md" : ""
          } 
          transform transition-all duration-300 ${
            hoveredCard === "address" ? "scale-105 translate-y-[-10px]" : ""
          }`}
          onMouseEnter={() => setHoveredCard("address")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="h-20 w-20 bg-blue-600 flex justify-center items-center rounded-full">
            <FaMapSigns className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-lg md:text-xl font-bold mt-2">Address</h1>
          <p className="mt-2 text-center">Punjab, India</p>
        </div>

        {/* Email Address Card */}
        <div
          className={`h-48 w-full sm:w-80 p-4 flex flex-col justify-center items-center rounded-3xl shadow-2xl hover:bg-[#caf0f8] hover:shadow-none ${
            hoveredCard && hoveredCard !== "email" ? "filter blur-md" : ""
          } 
          transform transition-all duration-300 ${
            hoveredCard === "email" ? "scale-105 translate-y-[-10px]" : ""
          }`}
          onMouseEnter={() => setHoveredCard("email")}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div className="h-20 w-20 bg-blue-600 flex justify-center items-center rounded-full">
            <SiMinutemailer className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-lg md:text-xl font-bold mt-2">Email Address</h1>
          <p className="mt-2 text-center">
            <a
              href="mailto:arshpreet27014@gmail.com"
              className="text-blue-700"
            >
              arshpreet27014@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
