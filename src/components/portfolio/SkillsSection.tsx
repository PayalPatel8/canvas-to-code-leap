import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "React", "TypeScript", "Next.js", "Vue.js", "HTML5", "CSS3", 
        "Tailwind CSS", "Sass", "JavaScript", "Responsive Design"
      ],
      color: "bg-primary"
    },
    {
      title: "Backend Development", 
      skills: [
        "Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB",
        "Redis", "GraphQL", "REST APIs", "Microservices"
      ],
      color: "bg-accent"
    },
    {
      title: "Tools & Technologies",
      skills: [
        "Git", "Docker", "AWS", "Vercel", "Webpack", "Vite",
        "Jest", "Cypress", "Figma", "Linux"
      ],
      color: "bg-secondary"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wide uppercase text-sm">
            My Skills
          </span>
          <h2 className="text-4xl font-bold mt-2 mb-6">
            Technologies I work with
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm passionate about learning new technologies and staying up-to-date 
            with the latest trends in web development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border hover:shadow-glow transition-smooth group"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${category.color} shadow-glow`} />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="hover:shadow-glow transition-smooth cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12">Professional Journey</h3>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  year: "2023 - Present",
                  role: "Senior Full Stack Developer",
                  company: "TechCorp Inc.",
                  description: "Leading development of scalable web applications using React and Node.js"
                },
                {
                  year: "2021 - 2023", 
                  role: "Frontend Developer",
                  company: "StartupXYZ",
                  description: "Built responsive user interfaces and improved application performance by 40%"
                },
                {
                  year: "2019 - 2021",
                  role: "Junior Developer",
                  company: "Web Solutions Ltd.",
                  description: "Developed and maintained client websites using modern web technologies"
                }
              ].map((experience, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow" />
                    {index < 2 && <div className="w-0.5 h-16 bg-border mt-2" />}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="bg-gradient-card border border-border rounded-lg p-6 hover:shadow-glow transition-smooth">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="font-semibold text-lg">{experience.role}</h4>
                        <span className="text-primary text-sm font-medium">{experience.year}</span>
                      </div>
                      <div className="text-accent font-medium mb-3">{experience.company}</div>
                      <p className="text-muted-foreground">{experience.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;