import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Lightbulb, BookOpen, Clock, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Implementation of Optical Logic Gates",
    organization: "Academic Project",
    period: "Nov 2019 – June 2020",
    highlights: [
      "Implemented OR Gate using Photonics crystal"
    ],
    icon: Lightbulb,
    color: "hsl(195 100% 50%)",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S2214785321031722?via%3Dihub"
  },
  {
    title: "Library Management System | RFID",
    organization: "Academic Project",
    period: "Dec 2018 – Jan 2019",
    highlights: [
      "An intelligent shelving system to provide an efficient mechanism of book management",
      "Fabricated a dummy library with an installed prototype for testing purposes"
    ],
    icon: BookOpen,
    color: "hsl(160 60% 45%)"
  },
  {
    title: "Summer Training",
    organization: "Emtech Foundation, Delhi",
    period: "May 2018 – July 2018",
    highlights: [
      "Studied and explored about PIC16F887A, Proteus, and MPLAB",
      "Learnt basics of Digital Electronics, Microprocessors & VLSI technology"
    ],
    icon: GraduationCap,
    color: "hsl(280 80% 50%)"
  },
  {
    title: "Attendance System using PIC-16F877A | RFID",
    organization: "Academic Project",
    period: "June 2018 – July 2018",
    highlights: [
      "An economic & smart system that can be implemented to collect data of IN & OUT of each employee"
    ],
    icon: Clock,
    color: "hsl(45 90% 55%)"
  }
];

const AcademicProjects = () => {
  return (
    <section id="academic-projects" className="py-20 px-4 bg-gradient-to-b from-muted/20 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Academic Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Hands-on experience in embedded systems, RFID technology, and digital electronics
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card 
                key={index} 
                className="glass-card p-6 border-l-4 mirror-shine hover:scale-[1.02] transition-transform duration-300"
                style={{ borderLeftColor: project.color }}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-4">
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${project.color}20`, border: `2px solid ${project.color}` }}
                    >
                      <Icon className="w-7 h-7" style={{ color: project.color }} />
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-foreground mb-1">
                        {project.title}
                        {project.link && (
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block ml-2 text-primary hover:text-accent transition-colors"
                            aria-label="View publication"
                          >
                            <ExternalLink className="w-4 h-4 inline-block" />
                          </a>
                        )}
                      </h3>
                      <p className="text-sm text-primary font-semibold mb-2">{project.organization}</p>
                      <Badge variant="secondary" className="text-xs">{project.period}</Badge>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex gap-2 text-sm text-foreground/90">
                        <span className="text-primary mt-1">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AcademicProjects;
