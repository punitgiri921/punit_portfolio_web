import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Briefcase, TrendingUp, Award, ExternalLink } from "lucide-react";
import wowAward from "@/assets/wow-award.png";
import innovationAward from "@/assets/innovation-award.png";

const experiences = [
  {
    title: "Project Manager (Product)",
    company: "Infinity Learn",
    location: "Hyderabad",
    period: "Apr 2024 – Jun 2025",
    achievements: [
      { 
        text: "Designed and implemented structured workflows for multiple assessment formats, ensuring consistency across curriculum-aligned, practice, and adaptive tests through effective team coordination"
      },
      { 
        text: "Streamlined test creation processes by developing automation tools using Excel, VBA, and Power Query, resulting in over a 90% reduction in manual effort",
        hasDetails: true,
        details: {
          title: "Test Creation Automation System",
          problem: "At Infinity Learn, the process for creating academic tests was a significant operational bottleneck. It was an entirely manual workflow where team members would spend 2 to 3 hours creating a single test. This involved manually selecting questions, formatting them, and running repetitive checks, which was not only time-consuming but also prone to human error. This inefficiency delayed content delivery and forced senior team members to spend their time on repetitive tasks instead of focusing on higher-value work like improving question quality.",
          execution: [
            {
              title: "Analysis and Design",
              description: "I began by mapping the entire manual process to identify every point of friction. I then collaborated with the content and product teams to gather requirements for a new, streamlined workflow."
            },
            {
              title: "Tool Development",
              description: "I chose to build the solution using a combination of Excel, VBA, and Power Query because they were powerful tools for rapid development and automation. I used Power Query to connect to our raw data sources and structure the question banks for easy access. I wrote VBA scripts to create a user-friendly interface in an Excel template. This new tool included advanced features like custom buttons that allowed users to select questions by topic and subtopic, a key feature that was long-pending from the product team."
            },
            {
              title: "Implementation and Training",
              description: "After developing the initial prototype, I conducted pilot tests with a few team members to gather feedback and make iterative improvements. Once the system was robust, I led training sessions for the entire team to ensure a smooth transition and widespread adoption of the new process."
            }
          ],
          results: [
            "Quantitative Impact: We successfully reduced the test creation time from 2-3 hours to just 5-10 minutes, which is a time saving of over 90%.",
            "Qualitative Impact: This automation eliminated a major source of repetitive work, freeing up senior team members to concentrate on strategic tasks like enhancing content quality. The system was widely praised by stakeholders for its direct impact on operational efficiency.",
            "Recognition: This initiative was a key contributor to me receiving the 'Innovation Champion' award at the annual townhall."
          ]
        }
      },
      { 
        text: "Introduced a structured OKR tracking process by designing a custom tool, enabling the team to shift from annual check-ins to fortnightly reviews, improving visibility, accountability, and agility in course correction",
        hasDetails: true,
        details: {
          title: "OKR Tracking System Transformation",
          problem: "At Infinity Learn, the process for monitoring and reviewing strategic objectives (OKRs) was highly ineffective, lacking both data structure and visibility. Key challenges included: Lagging Feedback Loop - Performance and goal-tracking check-ins were conducted only once per year. This meant projects could drift off course for months before leaders identified the misalignment, severely limiting the possibility of timely course correction. Low Accountability & Visibility - With formal tracking being so infrequent, day-to-day accountability suffered. Project status and progress toward strategic objectives were isolated, leading to poor cross-functional visibility among stakeholders. Data Silos & Difficulty in Analysis - The OKR data was housed in various unstructured documents, making it impossible to aggregate, model, and analyze performance against strategic targets using standard BI methods.",
          execution: [
            {
              title: "Analysis and Design",
              description: "I collaborated with team leads and senior management to define the essential performance metrics for strategic objectives. The clear goal was to replace static, yearly reviews with dynamic, data-backed check-ins."
            },
            {
              title: "Tool Development & Data Modeling",
              description: "I designed a centralized and robust tracking system using Excel, VBA, Data Model, and Power Pivot—effectively creating a local, high-performance BI solution. I built a custom input template, utilizing VBA to streamline the data entry process for regular OKR updates (the check-in). The data was then imported into the Excel Data Model, where Power Pivot was used to establish efficient relationships between objectives, key results, and accountability owners. This Data Model served as the single source of truth, allowing for rapid aggregation and reporting without relying on external databases."
            },
            {
              title: "Implementation and Transition",
              description: "Using the Power Pivot models, I created a set of dynamic dashboards that provided real-time status updates to management. I implemented a new fortnightly review cycle for OKR check-ins and trained team leaders on how to interpret the dashboard insights for course correction."
            }
          ],
          results: [
            "Quantitative Impact: The review frequency successfully shifted from annual to fortnightly, increasing the number of formal performance checkpoints by over 25 times per year.",
            "Enhanced Agility: The fortnightly cadence empowered leaders to initiate course correction within two weeks of identifying an issue.",
            "True Accountability: The dynamic dashboards derived from the Power Pivot Data Model provided transparent, single-source visibility, driving greater team accountability.",
            "Strategic Focus: By automating the reporting, senior management dedicated review time to strategic discussions and decision-making, rather than data collection."
          ]
        }
      },
      { 
        text: "Created quality control dashboards and error analysis systems that decreased test error rates from 4–5% to nearly 0% within six months by facilitating targeted feedback loops and enhancing cross-team collaboration",
        hasDetails: true,
        details: {
          title: "AI-Powered Quality Control System",
          problem: "While working on Student Success initiatives at Infinity Learn, we faced a significant challenge with content quality. Our internal audits revealed a test error rate of 4-5%, but the feedback was logged as unstructured text comments, making it impossible to analyze trends or perform root cause analysis. This was a critical operational issue; we were catching errors, but not learning from them, which hindered our goal of scaling high-quality content.",
          execution: [
            {
              title: "Stakeholder Alignment",
              description: "I began by aligning stakeholders from the Quality Assurance, Content, and Product teams. We collaboratively defined a new quality rubric and identified the key data points needed to move from simple error-catching to predictive quality improvement."
            },
            {
              title: "AI-Powered Data Structuring",
              description: "The core of my solution involved using a modern AI tool to make sense of the unstructured feedback. I configured a custom AI assistant, feeding it our specific quality guidelines and error definitions. We used this assistant to process the raw, text-based error reports, and it accurately categorized them into types—like 'conceptual,' 'grammatical,' or 'formatting' which gave us the clean, structured data we desperately needed for our analysis."
            },
            {
              title: "Dashboard and Report Generation",
              description: "With this structured data, I designed and built a comprehensive QC dashboard in Power BI. This new tool provided real-time insights into error trends, pinpointed specific knowledge gaps in our content, and created a transparent feedback loop between the creation and audit teams."
            }
          ],
          results: [
            "Quantitative Impact: The solution was a major success. By providing clear, actionable insights, we drove the test error rate down from 4-5% to nearly 0% within six months.",
            "Operational Transformation: This project turned a chaotic, reactive process into a data-driven, proactive one. The AI solution didn't just generate reports; it provided the intelligence needed to improve our content development process itself."
          ]
        }
      },
      { 
        text: "Built an automated lead and conversion tracking system, cutting reporting time by over 99%, from 8 hours to ~5 minutes, enabling the sales & marketing teams to move from weekly to daily insights and faster decisions"
      }
    ],
    icon: Award,
    color: "hsl(195 100% 50%)"
  },
  {
    title: "Associate Project Manager (Product)",
    company: "Infinity Learn",
    location: "Hyderabad",
    period: "Nov 2022 – Mar 2024",
    achievements: [
      { text: "Led 4+ projects simultaneously, recognized by program managers as a key innovator for streamlining processes, cutting turnaround time by over 50% and boosting overall efficiency across teams" },
      { text: "Built a User Retention Cohort in Power BI, enabling the Product team to track retention, user frequency, and content engagement, and helping identify key drivers of user engagement and retention" },
      { text: "Proactively took on project management responsibilities, gaining hands-on exposure to over 5 projects within 3 months and contributing to early process improvements" },
      { text: "Implemented structured data processes for tracking key metrics, ensuring long-term data traceability, and enhancing cross-functional collaboration during high-priority escalations" },
      { text: "Created reusable SQL views post-ETL to power Metabase dashboards, improving data accuracy and speed of business insights" }
    ],
    icon: TrendingUp,
    color: "hsl(280 80% 50%)"
  },
  {
    title: "Associate (Content) | Project Management and Analytics",
    company: "BYJU'S",
    location: "Gurugram",
    period: "Jul 2021 – Oct 2022",
    achievements: [
      { text: "Established structured data processes for test creation and tracking, enabling long-term question ID traceability" },
      { text: "Increased team efficiency by 20% through Google Sheets dashboard to generate insights on yield loss areas" },
      { text: "Built real-time tracking model helpful for maintaining overall high & flawless experience" },
      { text: "Directly managed team of 5 people and delivered highest output among all PODs" }
    ],
    icon: Briefcase,
    color: "hsl(160 60% 45%)"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-b from-transparent to-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-muted-foreground text-lg">
            5+ years of driving operational excellence through data and automation
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <Card 
                key={index} 
                className="glass-card p-6 md:p-8 border-l-4 mirror-shine hover:scale-[1.02] transition-transform duration-300"
                style={{ borderLeftColor: exp.color }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div 
                      className="w-16 h-16 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${exp.color}20`, border: `2px solid ${exp.color}` }}
                    >
                      <Icon className="w-8 h-8" style={{ color: exp.color }} />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-1">{exp.title}</h3>
                        <p className="text-lg text-primary font-semibold">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary" className="mb-2">{exp.period}</Badge>
                        <p className="text-sm text-muted-foreground">{exp.location}</p>
                      </div>
                    </div>
                    
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex gap-3 text-foreground/90">
                          <span className="text-primary mt-1">▹</span>
                          {achievement.hasDetails ? (
                            <Dialog>
                              <DialogTrigger asChild>
                                <button className="text-left hover:text-primary transition-colors cursor-pointer group">
                                  {achievement.text}
                                  <ExternalLink className="inline-block w-3 h-3 ml-1 opacity-50 group-hover:opacity-100 transition-opacity" />
                                </button>
                              </DialogTrigger>
                              <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                                <DialogHeader>
                                  <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                    {achievement.details.title}
                                  </DialogTitle>
                                </DialogHeader>
                                <div className="space-y-6 mt-4">
                                  <div>
                                    <h4 className="text-lg font-semibold text-primary mb-2">The Problem</h4>
                                    <p className="text-foreground/80 leading-relaxed">{achievement.details.problem}</p>
                                  </div>
                                  
                                  <div>
                                    <h4 className="text-lg font-semibold text-primary mb-3">How I Drove the Execution</h4>
                                    <div className="space-y-4">
                                      {achievement.details.execution.map((step, stepIdx) => (
                                        <div key={stepIdx}>
                                          <h5 className="font-semibold text-foreground mb-1">{step.title}</h5>
                                          <p className="text-foreground/80 leading-relaxed">{step.description}</p>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                  
                                  <div>
                                    <h4 className="text-lg font-semibold text-primary mb-2">The Result</h4>
                                    <ul className="space-y-2">
                                      {achievement.details.results.map((result, resultIdx) => (
                                        <li key={resultIdx} className="flex gap-2 text-foreground/80 leading-relaxed">
                                          <span className="text-primary mt-1">•</span>
                                          <span>{result}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </DialogContent>
                            </Dialog>
                          ) : (
                            <span>{achievement.text}</span>
                          )}
                        </li>
                      ))}
                    </ul>
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

export default Experience;
