import React from "react";
import { Briefcase, Code, User } from "lucide-react";
const AboutMe = () => {
  return (
    <div>
      <section id="about" className="py-24 px-4 relative">
        {""}
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About<span className="text-primary"> Me</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">
                Software Engineer & Problem Solver
              </h3>
              <p className="text-muted-foreground text-justify">
                I’m a software engineer who bridges the gap between highly reliable, data-driven enterprise systems and scalable, user-centric web applications. Currently, I work as a Systems Engineer at Infosys, managing mission-critical backend solutions and massive DB2 databases on the IBM i platform.
              </p>
              <p className="text-muted-foreground text-justify">
                Beyond enterprise architecture, I specialize in the MERN stack and Python. I enjoy engineering everything from robust e-commerce platforms to AI-powered applications, continuously refining system design and code quality to deliver reliable, maintainable software.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <a href="#contact" className="cosmic-button">
                  {""} Get in Touch
                </a>
                <a
                  href="/Ritish_Kumar_Singh.pdf"
                  download="Ritish-Kumar-Singh"
                  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300 hover:scale-105 xfont-medium"
                >
                  Download CV
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Full-Stack Web Development</h4>
                    <p className="text-muted-foreground">
                      Building scalable, high-performance web applications and RESTful APIs using the MERN stack.
                    </p>
                  </div>
                </div>
              </div>
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Enterprise Backend Systems</h4>
                    <p className="text-muted-foreground">
                      Architecting highly reliable backend solutions, automating workflows, and managing massive relational databases.
                    </p>
                  </div>
                </div>
              </div>
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Data Science & AI</h4>
                    <p className="text-muted-foreground">
                      Integrating generative AI, vector databases, and machine learning models to build smart, data-driven applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
