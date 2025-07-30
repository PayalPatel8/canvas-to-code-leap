import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-gradient mb-2">Alex Chen</div>
            <p className="text-muted-foreground">
              Full Stack Developer crafting digital experiences
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-background/50 border border-border hover:shadow-glow transition-smooth group"
            >
              <Github className="h-5 w-5 group-hover:scale-110 transition-bounce" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-background/50 border border-border hover:shadow-glow transition-smooth group"
            >
              <Linkedin className="h-5 w-5 group-hover:scale-110 transition-bounce" />
            </a>
            <a
              href="mailto:alex@example.com"
              className="p-2 rounded-full bg-background/50 border border-border hover:shadow-glow transition-smooth group"
            >
              <Mail className="h-5 w-5 group-hover:scale-110 transition-bounce" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} Alex Chen. Made with
            <Heart className="h-4 w-4 text-primary fill-current" />
            using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;