import React, { useState } from "react";
import krello from "../assets/images/krello.png";
import uptask from "../assets/images/uptask.png";
import netflix from "../assets/images/netflix.png";

import "../styles.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [durum, setDurum] = useState(1);

  const projects = [
    {
      id: 1,
      title: "Krello",
      description: "It's a copy of Trello with the main features of the app",
      longDescription:
        "I'd like to present to you my latest project: Krello, a Trello copy built with React JS. As you know, Trello is a popular project management tool that allows teams to collaborate and manage tasks more efficiently.\n\nHere are some of the features that I developed:\n\n💠 Board creation: users can create multiple boards, each representing a project or category.\n\n💠 List creation: each board can have multiple lists, such as To Do, In Progress, and Done, to organize tasks.\n\n💠 Card creation: users can add cards to each list, representing individual tasks. Cards can be dragged and dropped to move them between lists.\n\n💠 Responsive Design: the application is optimized for desktop and mobile devices, and the user interface adapts to the screen size. \n\nSome things that I applied:\n💠 SRP (Single Responsibility Principle)\n💠 StructuredClone() - JavaScript function\n💠 Create Portals - React JS",

      img: krello,
      urlGitFront: "https://github.com/IvanBrazanovich/trello",
      urlDemo: "https://krello-kappa.vercel.app/app",
    },
    {
      id: 2,
      title: "Netflix",
      description: "Netflix clone",
      longDescription: "",
      img: netflix,
      urlGitFront: "https://github.com/IvanBrazanovich/netflix",
      urlDemo: "https://netflix-taupe-mu.vercel.app/",
    },
    {
      id: 3,
      title: "Uptask",
      description: "It's a project management tool for teams",
      longDescription:
        "Hi there! I'm excited to introduce you this new project management software that I developed using React JS and Express JS (Node JS framework). Here are some key features of the software:\n\n💠Create projects: You can easily create projects and organize them in a user-friendly interface.\n\n💠Assign tasks: Assign tasks for each project and track progress to ensure deadlines are met.\n\n💠Collaborators: Add collaborators to each project, allowing them to view and complete assigned tasks. However, they won't have the same level of authority as the creators of the project, ensuring that the project stays organized.\n\n💠User-friendly: Thw software has been designed with simplicity and ease-of-use in mind, making it accessible to non-technical users.\n\n💠Streamline workflow: Whether you're managing a large team or a small group, this project management software can help you streamline your workflow and keep everyone on the same page. \n\n If you want to test the app, you can use the users:\n email:usuario1@gmail.com \n password: password \n\n email:usuario2@gmail.com \n password: password  ",
      img: uptask,
      urlGitFront: "https://github.com/IvanBrazanovich/uptask_frontend",
      urlGitBack: "https://github.com/IvanBrazanovich/uptask_backend",
      urlDemo: "https://uptask-eezf.onrender.com/",
    },
  ];

  return (
    <>
      <div id="projects" className="projects  bg-[#171717] text-white py-10">
        <h1 className="text-center text-4xl font-bold py-6">
          My Favorite Projects
        </h1>
        <p className="text-center max-w-[1000px] lg:px-6 mx-auto text-[#939191]">
          In this section, I have chosen to showcase some of my favorite
          projects. These stood out to me for various reasons, whether it be
          their creativity, technical complexity, or the enjoyment I had
          creating them.
        </p>
        <div className="flex justify-center items-center gap-4 mt-12 mb-2 ">
          <div className="grid grid-cols-3 px-10 py-5 justify-center items-center gap-8 lg:grid-cols-2 tl:grid-cols-1  ">
            {projects.map((item, i) => (
              <ProjectCard key={i} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
