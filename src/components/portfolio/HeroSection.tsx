import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-gradient-card rounded-full text-sm font-medium border border-border shadow-card">
              👋 Welcome to my portfolio
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            I'm{" "}
            <span className="text-gradient">Payal Patel</span>
            <br />
            <span className="text-3xl md:text-5xl text-muted-foreground">
              Creative Tech Specialist
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Creative and technically proficient web developer with 9+ years of experience, including 1.3 years in digital content, social media visuals, project consulting, and AI-assisted development.
            Strong hands-on expertise in Magento 2, Shopify, React.js/Next.js, Laravel, and WordPress. Delivered numerous full-scale eCommerce solutions with a blend of design aesthetics and backend performance.
            Skilled in creating custom modules, performance optimization, and research-driven improvements using tools like GitHub Copilot and Lovable AI.
            Adept at team collaboration, graphic design, client communication, and scalable architecture design.
            Passionate about turning ideas into powerful, user-friendly web solutions across international markets.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              onClick={scrollToProjects}
              className="bg-gradient-primary hover:shadow-glow transition-smooth group"
              size="lg"
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-bounce" />
            </Button>
            <Button 
              variant="outline" 
              onClick={scrollToContact}
              className="shadow-card hover:shadow-glow transition-smooth"
              size="lg"
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex items-center justify-center space-x-6">
            <a
              href="https://github.com/PayalPatel8"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gradient-card border border-border hover:shadow-glow transition-smooth group"
            >
              <Github className="h-6 w-6 group-hover:scale-110 transition-bounce" />
            </a>
            <a
              href="https://www.linkedin.com/in/payal-patel0812/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gradient-card border border-border hover:shadow-glow transition-smooth group"
            >
              <Linkedin className="h-6 w-6 group-hover:scale-110 transition-bounce" />
            </a>
            <a
              href="mailto:payalhpatel0812@gmail.com"
              className="p-3 rounded-full bg-gradient-card border border-border hover:shadow-glow transition-smooth group"
            >
              <Mail className="h-6 w-6 group-hover:scale-110 transition-bounce" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: "2s" }} />
    </section>
  );
};

export default HeroSection;
