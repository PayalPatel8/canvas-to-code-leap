import { Code, Coffee, Lightbulb, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import aboutBg from "@/assets/about-bg.jpg";

const AboutSection = () => {
  const highlights = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "5+ Years Experience",
      description: "Building scalable web applications"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team Collaboration",
      description: "Strong communication and leadership skills"
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Problem Solver",
      description: "Creative solutions to complex challenges"
    },
    {
      icon: <Coffee className="h-8 w-8" />,
      title: "Always Learning",
      description: "Staying current with latest technologies"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <span className="text-primary font-semibold tracking-wide uppercase text-sm">
                About Me
              </span>
              <h2 className="text-4xl font-bold mt-2 mb-6">
                Passionate about creating{" "}
                <span className="text-gradient">digital experiences</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                I'm a creative and technically proficient web developer with 8+ years of experience, including 1.3 years in digital content, social media visuals, project consulting, and AI-assisted development.
                Strong hands-on expertise in Magento 2, Shopify, React.js/Next.js, Laravel, and WordPress.
                Delivered numerous full-scale eCommerce solutions with a blend of design aesthetics and backend performance.
                Skilled in creating custom modules, performance optimization, and research-driven improvements using tools like GitHub Copilot and Lovable AI.
                Adept at team collaboration, graphic design, client communication, and scalable architecture design.
                Passionate about turning ideas into powerful, user-friendly web solutions across international markets.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open source projects or searching somthing new with latest trend on tech,
                also enjoying a good cup of tea while planning my next creative project.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <Card key={index} className="bg-gradient-card border-border hover:shadow-glow transition-smooth group">
                  <CardContent className="p-6">
                    <div className="text-primary mb-4 group-hover:scale-110 transition-bounce">
                      {item.icon}
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src={aboutBg}
                alt="Developer workspace"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-gradient-card border border-border rounded-2xl p-6 shadow-glow">
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">99%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
