import { ArrowDown, ExternalLink, Github } from "lucide-react";
import React from "react";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "QuickCart E-Commerce",
      description: "A robust, full-stack e-commerce architecture handling 500+ concurrent user transactions with secure Razorpay integration and optimized REST APIs.",
      image: "/quickcart.png", // Make sure to add this image
      tags: ["MERN Stack", "REST APIs", "Razorpay"],
      // demoUrl: "https://your-demo-link.vercel.app/",
      // github: "https://github.com/ritish-kumar-singh/QuickCart", // Update if different
    },
    {
      id: 2,
      title: "RAG AI Teaching Assistant",
      description: "An AI-powered search and generation system indexing course transcripts. Utilizes vector embeddings to reduce query resolution time by 75%.",
      image: "/rag.png", // Make sure to add this image
      tags: ["Python", "LangChain", "Vector DBs"],
      // demoUrl: "https://your-demo-link.vercel.app/",
      // github: "https://github.com/ritish-kumar-singh/RAG-Teaching-Assistant", // Update if different
    },
    {
      id: 3,
      title: "AI Studio",
      description: "A unified AI platform integrating the Gemini API for dynamic content creation, travel planning, and simulation, successfully handling 500+ daily requests.",
      image: "/aistudio.png",
      tags: ["React.js", "Node.js","Express.js", "Gemini API"],
      // demoUrl: "https://ai-studio-project.vercel.app/",
      // github: "https://github.com/ritish-kumar-singh/AI-Studio-Project",
    },
  ];

  return (
    <section id="project" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted to solve complex problems with a focus on performance, scalability, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a 
              key={project.id} 
              href={project.github} 
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover h-full flex flex-col">
                <div className="h-48 overflow-hidden shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Optional: Uncomment this block if you want the explicit GitHub/Demo icons back later
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-border/50">
                    <div className="flex space-x-3">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div> 
                  */}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ritish-kumar-singh"
          >
            Check My GitHub <ArrowDown size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;