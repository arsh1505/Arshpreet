import React from "react";
import food from "../assets/food.png";
import ecommerce from "../assets/ecommerce.png";
import ak from "../assets/Ak.png";
import netflix from "../assets/netflix.png";

const Projects = () => {
  const projects = [
    {
      img: ak,
      title: "AK Bakery",
      description:
        "AK Bakery specializes in crafting delectable cakes, pastries, and cookies, combining the finest ingredients with passion. Designed and developed using HTML and CSS, our website delivers a delightful user experience that reflects the joy and sweetness of our creations.",
      github: "https://github.com/arsh1505/bakery_shop.git", // Replace with actual GitHub link
    },
    {
      img: food,
      title: "Food Delivery",
      description:
        "Developed a responsive Food Delivery App using React.js, featuring a dynamic food menu and shopping cart functionality. Demonstrates modern UI design and state management techniques.",
      github: "https://github.com/arsh1505/food_website.git", // Replace with actual GitHub link
    },
    {
      img: ecommerce,
      title: "E-commerce",
      description:
        "Developed a modern E-commerce website using React.js, featuring product listings, a dynamic shopping cart, and responsive design. Integrated state management and reusable components to deliver a seamless user experience.",
      github: "https://github.com/arsh1505/e-commerce.git", // Replace with actual GitHub link
    },
    {
      img: netflix,
      title: "Netflix",
      description:
        "Web developer skilled in creating dynamic, responsive websites using HTML, CSS, and JavaScript. My portfolio highlights projects ranging from e-commerce sites to media platforms, focusing on user experience and functionality.",
      github: "https://github.com/yourusername/netflix-clone", // Replace with actual GitHub link
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8" id="projects">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Projects
      </h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <div className="h-48 bg-gray-200 flex items-center justify-center transition-all duration-300 hover:opacity-75">
                {project.img ? (
                  <img
                    src={project.img}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <span className="text-gray-500">Image Placeholder</span>
                )}
              </div>
            </a>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
