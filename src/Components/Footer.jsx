// Footer.js
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Copyright Text */}
        <p className="text-sm text-center md:text-left">
          © 2025 Arshpreet Kaur, Inc. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center mt-4 md:mt-0 md:justify-end space-x-6">
          {/* Social Media Icons */}
          
          <a
            href="https://x.com/arshpreet27014"
            aria-label="Twitter"
            className="hover:text-white transition-colors"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://github.com/arsh1505"
            aria-label="GitHub"
            className="hover:text-white transition-colors"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/arshpreet-kaur-576938277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            aria-label="LinkedIn"
            className="hover:text-white transition-colors"
          >
            <FaLinkedinIn size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;