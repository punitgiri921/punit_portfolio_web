import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Database, BarChart3, Code, GitBranch, FileSpreadsheet } from "lucide-react";

const projectCategories = [
  {
    title: "Power BI Dashboards",
    icon: BarChart3,
    color: "hsl(195 100% 50%)",
    projects: [
      { name: "QC Dashboard & Error Analysis", link: "#" },
      { name: "Sales Conversion Tracking", link: "#" },
      { name: "Team Efficiency Metrics", link: "#" },
      { name: "OKR Tracking System", link: "#" }
    ]
  },
  {
    title: "Excel & VBA Projects",
    icon: FileSpreadsheet,
    color: "hsl(160 60% 45%)",
    projects: [
      { name: "Automated Test Creation Tool", link: "#" },
      { name: "Question Bank Management System", link: "#" },
      { name: "Real-time Tracking Dashboard", link: "#" },
      { name: "Data Validation & QC Tools", link: "#" }
    ]
  },
  {
    title: "SQL Projects",
    icon: Database,
    color: "hsl(280 80% 50%)",
    projects: [
      { name: "Question ID Traceability System", link: "#" },
      { name: "Content Performance Analysis", link: "#" },
      { name: "User Activity Analytics", link: "#" },
      { name: "Revenue Attribution Model", link: "#" }
    ]
  },
  {
    title: "Python Projects",
    icon: Code,
    color: "hsl(30 80% 55%)",
    projects: [
      { name: "Data Cleaning Pipeline", link: "#" },
      { name: "Sales Forecasting Model", link: "#" },
      { name: "Web Scraping Tool", link: "#" },
      { name: "Automated Report Generator", link: "#" }
    ]
  },
  {
    title: "PM Process Diagrams",
    icon: GitBranch,
    color: "hsl(340 75% 55%)",
    projects: [
      { name: "Test Creation Workflow", link: "#" },
      { name: "Quality Control Process", link: "#" },
      { name: "OKR Review Cycle", link: "#" },
      { name: "Cross-team Collaboration Map", link: "#" }
    ]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Project Portfolio
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore my work across BI, automation, data analysis, and process optimization
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index}
                className="glass-card p-6 mirror-shine hover:scale-[1.05] transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${category.color}20`, border: `2px solid ${category.color}` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: category.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.projects.map((project, idx) => (
                    <Button
                      key={idx}
                      variant="ghost"
                      className="w-full justify-between text-left hover:bg-primary/10 hover:text-primary group"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <span className="truncate">{project.name}</span>
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </Button>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4 italic">
            📌 Portfolio links will be added soon - currently organizing project documentation and demos
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/50 text-primary hover:bg-primary/10"
          >
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
