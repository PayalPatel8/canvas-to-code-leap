import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Backend Development", 
      skills: [
        "Magento2", "PHP", "WordPress", "PostgreSQL", "MongoDB",
        "MySQL", "GraphQL", "REST APIs"
      ],
      color: "bg-accent"
    },
    {
      title: "Frontend Development",
      skills: [
        "Shopify", "React.js", "Next.js", "TypeScript", "HTML", "CSS", 
        "Tailwind CSS", "Less", "JavaScript", "Responsive Design"
      ],
      color: "bg-primary"
    },
    {
      title: "Tools & Technologies",
      skills: [
        "Git", "Bitbucket", "Vercel", "VsCode", "Notepad++", "Sublime",
        "Figma", "Canva", "Linux", "Windows 11 or older"
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
            I’m driven by a passion for exploring new technologies and staying current with the latest trends in web development.
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
          <h3 className="text-2xl font-bold text-center mb-12">Speciality of last 1+ years</h3>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-card border border-border rounded-lg p-6 hover:shadow-glow transition-smooth">
              <p className="text-muted-foreground text-lg leading-relaxed">
                I explored Shopify App Research and Marketing, NextKart Marketing, Digital Content, Social Media Visuals, Project Consulting, graphic design, and create my portfolio website using the Loveable AI tool.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
