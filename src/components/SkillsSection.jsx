import React, { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Languages
  { name: "Java", img: "/java.png", category: "languages" },
  { name: "Python", img: "/python.png", category: "languages" },
  { name: "JavaScript", img: "/javascript.png", category: "languages" },
  { name: "SQL", img: "/sql.png", category: "languages" },
  { name: "HTML", img: "/html.png", category: "languages" },
  { name: "CSS", img: "/css.png", category: "languages" },

  // Enterprise & Mainframe
  { name: "IBM i (AS/400)", img: "/ibmi.jpeg", category: "enterprise" },
  { name: "DB2", img: "/db2.png", category: "enterprise" },
  { name: "ILE-RPG", img: "/rpg.jpeg", category: "enterprise" },
  { name: "COBOL", img: "/cobol.jpeg", category: "enterprise" },
  { name: "JCL", img: "/jcl.png", category: "enterprise" },
  { name: "CL-Programming", img: "/cl.png", category: "enterprise" },
  { name: "CICS", img: "/cics.png", category: "enterprise" },

  //Libraries
  { name: "React.js", img: "/react.png", category: "libraries" },
  { name: "Mongoose", img: "/mongoose.png", category: "libraries" },
  { name: "Pandas", img: "/pandas.jpg", category: "libraries" },
  { name: "Numpy", img: "/numpy.png", category: "libraries" },
  { name: "Matplotlib", img: "/matplotlib.png", category: "libraries" },
  { name: "Scikit-learn", img: "/scikitlearn.png", category: "libraries" },

  //Frameworks
  { name: "Node.js", img: "/nodejs.png", category: "frameworks" },
  { name: "Express.js", img: "/express.png", category: "frameworks" },
  { name: "Tailwind CSS", img: "/tailwind.png", category: "frameworks" },
  { name: "Java Collections", img: "/javacollection.jpeg", category: "frameworks" },

  // Databases
  { name: "MongoDB", img: "/mongodb.png", category: "databases" },
  { name: "MySQL", img: "/mysql.jpg", category: "databases" },
    { name: "DB2", img: "/db2.png", category: "databases" },

  // Tools
  { name: "Git", img: "/git.png", category: "tools" },
  { name: "GitHub", img: "/github.jpg", category: "tools" },
  { name: "Visual Studio Code", img: "/vscode.png", category: "tools" },
  { name: "Postman", img: "/postman.png", category: "tools" },
  { name: "Vercel", img: "/vercel.png", category: "tools" },
  { name: "Render", img: "/render.jpg", category: "tools" },
];

const categories = [
  "all", 
  "languages", 
  "enterprise", 
  "libraries", 
  "frameworks", 
  "databases", 
  "tools"
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-5 rounded-lg shadow-xs card-hover flex items-center"
            >
              <div className="text-left font-semibold text-lg flex-grow">
                {skill.name}
              </div>
              <img
                src={skill.img}
                alt={skill.name}
                className="h-10 w-10 object-contain bg-white rounded"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;