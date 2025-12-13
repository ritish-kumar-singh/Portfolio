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
                I’m a software engineer focused on building scalable, user-centric web applications. I design and develop production-ready solutions with clean architecture, strong fundamentals, and a problem-solving mindset.
              </p>
              <p className="text-muted-foreground text-justify">
                I enjoy working on challenging problems, improving system design, and continuously refining code quality to deliver reliable and maintainable software.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <a href="#contact" className="cosmic-button">
                  {""} Get in Touch
                </a>
                <a
                  href="/Ritish-Kumar-Singh.pdf"
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
                    <h4 className="font-semibold text-lg">Web Development</h4>
                    <p className="text-muted-foreground">
                      Building scalable, high-performance web applications using modern software engineering practices.
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
                    <h4 className="font-semibold text-lg">UI/UX Design</h4>
                    <p className="text-muted-foreground">
                      Creating intuitive, accessible interfaces with a strong focus on usability and performance.
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
                    <h4 className="font-semibold text-lg">Software Development</h4>
                    <p className="text-muted-foreground">
                      Delivering end-to-end software solutions from design and development to deployment.
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
