import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { GraduationCap, Award, BookOpen, ExternalLink } from "lucide-react";
import wowAward from "@/assets/wow-award.png";
import innovationAward from "@/assets/innovation-award.png";

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-gradient-to-b from-muted/20 to-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <p className="text-muted-foreground text-lg">
            Strong technical foundation backed by continuous learning
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="glass-card p-8 mirror-shine">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-xl bg-primary/20 border-2 border-primary flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">B.Tech Engineering Physics</h3>
                <p className="text-primary font-semibold mb-2">Delhi Technological University (DTU)</p>
                <p className="text-muted-foreground">Major in Electronics | 2016-2020</p>
              </div>
            </div>
          </Card>
          
          <Card className="glass-card p-8 mirror-shine">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-xl bg-accent/20 border-2 border-accent flex items-center justify-center flex-shrink-0">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Recognitions</h3>
                <ul className="space-y-2 text-foreground/90">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▹</span>
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="text-left hover:text-primary transition-colors cursor-pointer group">
                          Innovation Champion Award (2024)
                          <ExternalLink className="inline-block w-3 h-3 ml-1 opacity-50 group-hover:opacity-100 transition-opacity" />
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            Content Innovation Champion Award Certificate
                          </DialogTitle>
                        </DialogHeader>
                        <div className="mt-4">
                          <img 
                            src={innovationAward} 
                            alt="Content Innovation Champion Award Certificate - Punit Giri" 
                            className="w-full h-auto rounded-lg shadow-lg"
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▹</span>
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="text-left hover:text-primary transition-colors cursor-pointer group">
                          WOW Award (2023)
                          <ExternalLink className="inline-block w-3 h-3 ml-1 opacity-50 group-hover:opacity-100 transition-opacity" />
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            WOW Award Certificate
                          </DialogTitle>
                        </DialogHeader>
                        <div className="mt-4">
                          <img 
                            src={wowAward} 
                            alt="WOW Award Certificate - Punit Giri" 
                            className="w-full h-auto rounded-lg shadow-lg"
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">▹</span>
                    <span>5/5 Appraisal Rating (Top 1%) (2022-2023)</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
        
        <Card className="glass-card p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-lg bg-primary/20 border-2 border-primary flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground">Professional Certifications</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-primary mb-4">SQL & Database</h4>
              <ul className="space-y-2 text-foreground/90">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <a 
                    href="https://www.hackerrank.com/certificates/428c5ca60273" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors group inline-flex items-center gap-1"
                  >
                    SQL (Advanced) - HackerRank
                    <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <a 
                    href="https://www.hackerrank.com/certificates/6f2852a7e4ff" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors group inline-flex items-center gap-1"
                  >
                    SQL (Intermediate) - HackerRank
                    <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <a 
                    href="https://www.hackerrank.com/certificates/e31845e413fb" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors group inline-flex items-center gap-1"
                  >
                    SQL (Basic) - HackerRank
                    <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <a 
                    href="https://www.linkedin.com/learning/certificates/c108b7d48be4c38435872e89d9901facf0aeac696f47cbb9d6bb15358a4d2eef" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors group inline-flex items-center gap-1"
                  >
                    PostgreSQL: Advanced Queries
                    <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <a 
                    href="https://www.linkedin.com/learning/certificates/065ce1df0cdd8dce793569581883420b99e0c2f8b9b9ff5f3fc2b4ad4950df78" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors group inline-flex items-center gap-1"
                  >
                    Working with Data Arrays in PostgreSQL
                    <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <a 
                    href="https://www.linkedin.com/learning/certificates/ae01159783d8f81740b8288ce3cb90cf169284257fd1b0a149e5aedc7a8f0e7d" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors group inline-flex items-center gap-1"
                  >
                    Intermediate SQL for Data Scientists
                    <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              </ul>

              <h4 className="text-lg font-semibold text-primary mb-4 mt-6">Python Programming</h4>
              <ul className="space-y-2 text-foreground/90">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <a 
                    href="http://coursera.org/verify/5DG393VAY2W2" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors group inline-flex items-center gap-1"
                  >
                    Programming for Everybody (Getting Started with Python)
                    <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <a 
                    href="https://coursera.org/verify/53TDVCA6JPV8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors group inline-flex items-center gap-1"
                  >
                    Python Data Structures
                    <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <a 
                    href="https://coursera.org/v/YFM2TPT3LSP" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors group inline-flex items-center gap-1"
                  >
                    Using Python to Access Web Data
                    <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-accent mb-4">Excel & Data Analysis</h4>
              <ul className="space-y-2 text-foreground/90">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <a 
                    href="https://www.linkedin.com/learning/certificates/81e117cf1fbb74f554643ca40483938732b00a3f3c0cb246f31f65b7370f7241" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors group inline-flex items-center gap-1"
                  >
                    Excel Business Intelligence: Power Pivot and DAX
                    <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <a 
                    href="https://www.linkedin.com/learning/certificates/253e13960d3991e1dd849fb30cdd103b218fd407c239c04ddb3ae5fd0af1f1de" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors group inline-flex items-center gap-1"
                  >
                    Excel: Power Query (Get & Transform)
                    <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <a 
                    href="https://drive.google.com/file/d/13ESXnlaNXXXXFnVQvnI9QnpS82rCQNmC/view?usp=drivesdk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors group inline-flex items-center gap-1"
                  >
                    Excel: Advanced Formatting Techniques
                    <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <a 
                    href="https://drive.google.com/file/d/1-dxGrYukryCLUEBOE0G_dxMQTpgp7s7N/view?usp=drivesdk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors group inline-flex items-center gap-1"
                  >
                    Excel 2016: Managing and Analyzing Data
                    <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <a 
                    href="https://documentcloud.adobe.com/link/track?uri=urn%3Aaaid%3Ascds%3AUS%3A425b014d-5ce9-479d-b5f8-cfabb8c7dedf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors group inline-flex items-center gap-1"
                  >
                    Excel 2016 Essential Training
                    <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <a 
                    href="https://coursera.org/verify/XW2G9PZL5LP4" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors group inline-flex items-center gap-1"
                  >
                    Excel Skills for Business: Essentials
                    <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              </ul>

              <h4 className="text-lg font-semibold text-accent mb-4 mt-6">Project Management & Leadership</h4>
              <ul className="space-y-2 text-foreground/90">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <a 
                    href="https://www.linkedin.com/learning/certificates/a52c98940bbce4c360331e2a34180320c8509158eca49e423335b6068af18886" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors group inline-flex items-center gap-1"
                  >
                    Learning Microsoft Project for the Web
                    <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▹</span>
                  <a 
                    href="https://www.linkedin.com/learning/certificates/64dcc83fd1fb891138e4b1ac7291edc0b10d64a26198ff92a2bd41741b5d3b03" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors group inline-flex items-center gap-1"
                  >
                    Balancing Multiple Roles as a Leader
                    <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Education;
