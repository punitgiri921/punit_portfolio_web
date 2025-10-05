import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, Download } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-muted-foreground text-lg">
            Open to opportunities in Project Management, Data Analytics, and Business Analysis
          </p>
        </div>
        
        <Card className="glass-card p-8 md:p-12 mirror-shine">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <a 
                href="mailto:punitgiri921@gmail.com"
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-primary/10 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 border-2 border-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium">punitgiri921@gmail.com</p>
                </div>
              </a>
              
              <a 
                href="tel:+918076086657"
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-primary/10 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 border-2 border-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-foreground font-medium">+91-8076086657</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 p-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 border-2 border-accent flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="text-foreground font-medium">New Delhi, India</p>
              </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground mb-4">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-primary/10 border border-primary/30">
                  <p className="text-3xl font-bold text-primary">5+</p>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="p-4 rounded-lg bg-accent/10 border border-accent/30">
                  <p className="text-3xl font-bold text-accent">90%</p>
                  <p className="text-sm text-muted-foreground">Efficiency Gains</p>
                </div>
                <div className="p-4 rounded-lg bg-primary/10 border border-primary/30">
                  <p className="text-3xl font-bold text-primary">₹4Cr</p>
                  <p className="text-sm text-muted-foreground">Revenue Impact</p>
                </div>
                <div className="p-4 rounded-lg bg-accent/10 border border-accent/30">
                  <p className="text-3xl font-bold text-accent">5/5</p>
                  <p className="text-sm text-muted-foreground">Rating (Top 1%)</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 pt-8 border-t border-border">
            <Button
              variant="default"
              size="lg"
              className="bg-primary hover:bg-primary/90 mirror-shine"
              asChild
            >
              <a href="https://www.linkedin.com/in/punitgiri921" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn Profile
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-primary/50 text-primary hover:bg-primary/10 mirror-shine"
              asChild
            >
              <a href="https://github.com/punitgiri921" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                GitHub Profile
              </a>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-accent/50 text-accent hover:bg-accent/10 mirror-shine"
              asChild
            >
              <a href="https://drive.google.com/drive/folders/17mzrC7L4l2HQw_XaxyIqt9h0pgcIIaKB?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
