import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SkillsChart from "@/components/SkillsChart";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import AcademicProjects from "@/components/AcademicProjects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import HireMe from "@/components/HireMe";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <SkillsChart />
      <Experience />
      <Projects />
      <AcademicProjects />
      <Education />
      <Contact />
      <HireMe />
      
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Punit Giri. Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
