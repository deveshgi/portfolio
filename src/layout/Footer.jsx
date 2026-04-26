import { Github, Linkedin, Heart } from "lucide-react";
import { useState } from "react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/deveshgi",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/devesh03",
    label: "LinkedIn",
  },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#tech", label: "Tech Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(21);

  const toggleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  const handleScrollTo = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-10 border-t border-border bg-background">
      <div className="container mx-auto px-10">

        {/* Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          {/* Logo */}
          <div className="text-center md:text-left">
            <button
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              className="text-2xl font-bold tracking-tight hover:text-primary transition-colors"
            >
              Devesh<span className="text-primary">.</span>
            </button>

            <p className="text-sm text-muted-foreground mt-2 max-w-xs">
              Full Stack MERN Developer building scalable web applications
              with modern technologies and AI integrations.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleScrollTo(link.href)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center mt-2 text-sm text-muted-foreground flex items-center justify-center gap-2">
          © {currentYear} Devesh Kumar • Built with React & Tailwind
          <button
            onClick={toggleLike}
            className="flex items-center gap-1 group"
          >
            <Heart
              className={`w-4 h-4 transition-all duration-300 
              ${liked
                  ? "text-red-500 fill-red-500 animate-pulse"
                  : "text-muted-foreground border-none group-hover:text-red-400 group glass transition-all hover:shadow-xl hover:shadow-primary/10"
                }`}
            />
            <span className="text-xs">{likes}</span>
          </button>
        </div>
      </div>
    </footer>
  );
};