import React from "react";

function Projects({ isToggled }) {
  const projectData = [
    {
      title: "Sanjeevani Clinic",
      image:
        "https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Sanjeevani Clinic is a website designed for managing clinic appointments and patient records. It allows patients to book appointments, view medical history, and receive notifications.",
      link: "https://github.com/jainam-04/Sanjeevani-Clinic" // Add the project link here
    },
    {
      title: "Thoutify",
      image:
        "https://images.pexels.com/photos/1485657/pexels-photo-1485657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      description:
        "Thoutify is a website where users can anonymously share their thoughts, ideas, and opinions. It allows for open expression without revealing identities, creating a platform for honest and free sharing.",
      link: "https://github.com/SURAJSHAH9324/Thougtify" // Add the project link here
    },
    {
      title: "Three.Js PortFolio",
      image:
        "https://imgs.search.brave.com/RrB8ljY501lAbWVh1dgELFaotdOs3JhdhJK77_7FPXI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzIxLzM3Lzcz/LzM2MF9GXzcyMTM3/NzM4OV9nOHFPb2hE/WEt1Q0V2aEE4cnc4/Vzk1aFh4elN1TzdF/TS5qcGc",
      description:
        "A Three.js portfolio showcases 3D web projects built using the Three.js JavaScript library. It highlights interactive 3D graphics, animations, and visualizations rendered directly in the browser.",
      link: "https://surajshah.vercel.app/" // Add the project link here
    },
    {
      title: "Asteroid Game",
      image:
        "https://images.unsplash.com/photo-1707653056955-1835d800f4f7?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "A 2D space shooter game where the player controls a spaceship to move, rotate, and shoot. The goal is to avoid asteroids and destroy them with projectiles. The game ends if the spaceship collides with an asteroid.",
      link: "https://github.com/SURAJSHAH9324/AsteroidsGame" // Add the project link here
    },
  ];

  return (
    <div>
      <h1
        className={`text-xl font-bold mb-4 ${isToggled ? "text-white" : ""}`}
      >
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {projectData.map((project, index) => (
          <a href={project.link} target="_blank" key={index} className="block">
            <div
              className="hover:shadow-md border-[2px] border-solid border-gray-400 rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h4
                  className={`text-lg font-semibold mb-2 ${isToggled ? "text-white text-center" : ""}`}
                >
                  {project.title}
                </h4>
                <p
                  className={`text-lg font-semibold mb-2 ${isToggled ? "text-gray-100 text-xs text-center" : ""}`}
                >
                  {project.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;
