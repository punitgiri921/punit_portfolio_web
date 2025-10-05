import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-5xl w-full">
        <div className="glass-card rounded-3xl p-8 md:p-12 mirror-shine">
          <div className="text-center space-y-6">
            <div className="inline-block">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
                PUNIT GIRI
              </h1>
              <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent mt-2"></div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
              Data-Driven Project & Process Manager
            </h2>
            
            <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Data-driven Project Manager with 5+ years of experience driving 90%+ efficiency gains through 
              automation, process optimization, and advanced analytics using Power BI, SQL, Advanced Excel, and VBA
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Button
                variant="default"
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground mirror-shine"
                asChild
              >
                <a href="#projects">
                  View Projects
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-primary/50 text-primary hover:bg-primary/10 mirror-shine"
                asChild
              >
                <a href="#contact">
                  Get in Touch
                </a>
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 pt-8">
              <a 
                href="https://www.linkedin.com/in/punitgiri921" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              
              <a 
                href="https://github.com/punitgiri921" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              
              <a 
                href="mailto:punitgiri921@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>punitgiri921@gmail.com</span>
              </a>
              
              <a 
                href="tel:+918076086657"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+91-8076086657</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
