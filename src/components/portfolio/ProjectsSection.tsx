import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Headless E-Commerce",
      description: "A full-featured headless e-commerce built with Magento2, Next.js, and GraphQL integration. Totally implimented core magento2 features.",
      technologies: ["Magento2", "Next.js", "GraphQL", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      live: "https://nextkart.vercel.app/",
      featured: true
    },
    {
      title: "Freeway FWT E-Commerce",
      description: ": Freeway is a crypto currency website. Using Buy, Sell and Swap functionality on Product Page for the FWT coins and other currency like Bitcoin Solana, BNB etc. Use MetaMask wallet extension for interact with Ethereum wallet.",
      technologies: ["Magento2", "jQuery", "MySQL", " Meta Mask extension"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      featured: false
    },
    {
      title: "Fixa Bildelar, Drivknutense",
      description: "Fixa Bildelar and Drivknutense both are ecommerce similar website for selling parts of cars for basically Sweden and Norway by searching chassis number of car.",
      technologies: ["Magento 2", "CSS", "jQuery", "REST API"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      live: "https://www.fixabildelar.se/",
      featured: false
    },
    {
      title: "Dolphin Web Shop",
      description: "This project is selling Magento 2 modules which develop by company’s developer.",
      technologies: ["Magento 2", "Git", "Bitbucket", "GraphQL"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      live: "https://dolphinwebsolution.com/shop/",
      featured: true
    },
    {
      title: "Dolphin Web Shop",
      description: "This project is selling Magento 2 modules which develop by company’s developer.",
      technologies: ["Magento 2", "Git", "Bitbucket", "GraphQL"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      live: "https://dolphinwebsolution.com/shop/",
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold tracking-wide uppercase text-sm">
            My Work
          </span>
          <h2 className="text-4xl font-bold mt-2 mb-6">
            Featured <span className="text-gradient">Projects & Activities</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Here are some of my recent projects and activities that showcase my skills and passion for research and development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`bg-gradient-card border-border hover:shadow-glow transition-smooth group overflow-hidden ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
            >
              <div className={`${project.featured ? 'lg:flex' : ''}`}>
                <div className={`relative overflow-hidden ${project.featured ? 'lg:w-1/2' : ''}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full object-cover group-hover:scale-105 transition-smooth ${
                      project.featured ? 'h-64 lg:h-full' : 'h-48'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary shadow-glow">Featured</Badge>
                    </div>
                  )}
                </div>
                
                <div className={project.featured ? 'lg:w-1/2' : ''}>
                  <CardHeader>
                    <h3 className="text-xl font-bold group-hover:text-gradient transition-smooth">
                      {project.title}
                    </h3>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-3 pt-2">
                      <Button
                        size="sm"
                        className="bg-gradient-primary group/btn hover:shadow-glow transition-smooth"
                        asChild
                      >
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-bounce" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-20">
        	<h3 className="text-2xl font-bold text-center mb-12"></h3>
        	<div className="max-w-4xl mx-auto">
        		<div className="bg-gradient-card border border-border rounded-lg p-6 hover:shadow-glow transition-smooth">
        			<p className="text-muted-foreground text-lg leading-relaxed">
        				I was research and analys for shopify app and testing all app which developed by CynoInfotech Devs, also all documents created by me and totally concept made by me for all banners and icons. After publish shopify app, create post related to app with video, images or content using figma or canva design. 
        			</p>
        		</div>
        	</div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
