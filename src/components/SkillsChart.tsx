import { Card } from "@/components/ui/card";
import { FileSpreadsheet, BarChart3, Code, Database, FileCode } from "lucide-react";

const skills = [
  {
    name: 'Excel',
    description: 'Advanced Formulas, Power Pivot, Power Query, Data Model, DAX',
    proficiency: 95,
    icon: FileSpreadsheet,
    color: 'hsl(var(--chart-3))',
  },
  {
    name: 'Power BI',
    description: 'DAX, Power Query, DAX Studio',
    proficiency: 95,
    icon: BarChart3,
    color: 'hsl(var(--primary))',
  },
  {
    name: 'SQL',
    description: 'MySQL, PostgreSQL, SQL Server',
    proficiency: 90,
    icon: Database,
    color: 'hsl(var(--accent))',
  },
  {
    name: 'VBA',
    description: 'Excel Automation & Macros',
    proficiency: 90,
    icon: FileCode,
    color: 'hsl(var(--chart-4))',
  },
  {
    name: 'Python',
    description: 'Numpy, Pandas, matplotlib',
    proficiency: 70,
    icon: Code,
    color: 'hsl(var(--chart-2))',
  },
];

const SkillsChart = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Technical Skills Proficiency
          </h2>
          <p className="text-muted-foreground text-lg">
            Current expertise levels across key technical tools and platforms
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <Card 
                key={skill.name}
                className="glass-card p-6 border-primary/20 hover:border-primary/40 transition-all duration-300 mirror-shine"
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${skill.color}20` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: skill.color }} />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold text-foreground mb-1">
                          {skill.name}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {skill.description}
                        </p>
                      </div>
                      <span 
                        className="text-2xl font-bold flex-shrink-0"
                        style={{ color: skill.color }}
                      >
                        {skill.proficiency}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-secondary rounded-full h-2.5 mt-3 overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.proficiency}%`,
                          backgroundColor: skill.color
                        }}
                      />
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsChart;
