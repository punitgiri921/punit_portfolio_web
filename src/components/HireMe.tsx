import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

const HireMe = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "I am actively seeking a process design or program management role where I can apply my data skills.";
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hire-me" className="py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <Card className="glass-card p-4 md:p-6">
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center gap-2">
              <div className="relative">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                <div className="absolute inset-0 w-2.5 h-2.5 bg-green-500 rounded-full animate-ping opacity-75" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-green-500">
                Available for Work
              </h2>
            </div>
            
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              {displayText}
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default HireMe;
