import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  MapPinHouse,
  Mail,
  Github,
  Linkedin,
  Download,
} from "lucide-react";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "TailwindCSS",
  "ShadCN",
  "Material UI",
  "JWT",
  "Google OAuth",
  "Stripe",
  "REST APIs",
  "Git",
  "Postman",
  "Vercel",
];

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Home */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div className="space-y-8 pl-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              MERN Stack Developer • AI Web Apps
            </span>
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="text-primary glow-text block">
                  Devesh Kumar
                </span>
                Building secure & intelligent
                <br />
                <span className="font-serif italic font-normal text-white">
                  full-stack applications.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Full Stack MERN Developer based in India. I specialize in
                building scalable web applications with secure authentication,
                AI integrations and high-performance architecture.
              </p>
            </div>

            {/* Location + Email */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <MapPinHouse className="w-5 h-5 ml-2" /> India
              </span>
              <a
                href="mailto:devesh62025@gmail.com"
                className="flex items-center gap-1 hover:text-primary"
              >
                <Mail className="w-5 h-5 ml-2" /> Email Me
              </a>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact Me
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <a
                href="/devesh_kumar_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <AnimatedBorderButton>
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </AnimatedBorderButton>
              </a>
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                Connect with me:
              </span>
              <a
                href="https://github.com/deveshgi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/devesh03/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div>
            <div className="relative max-w-md mx-auto">
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/image.png"
                  alt="Devesh Kumar"
                  className="w-full aspect-4/5 object-cover rounded-2xl"
                />

                {/* Open Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Open to Opportunities
                    </span>
                  </div>
                </div>

                {/* Projects Badge */}
                <div className="absolute top-3 left-3 bg-background/80 backdrop-blur-md border border-border shadow-lg rounded-xl px-4 py-3">
                  <div className="text-2xl font-bold text-white">3+</div>
                  <div className="text-xs text-white">
                    Major Projects
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-30">
          <h2 className="font-serif italic text-3xl md:text-5xl font-bold mb-10 text-secondary-foreground text-center">
            Technologies &{" "}
            <span className="font-normal text-white">
              Tools
            </span>
          </h2>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee gap-4 whitespace-nowrap">
              {skills.concat(skills).map((skill, idx) => (
                <div
                  key={idx}
                  className="flex shrink-0 px-6 py-3 rounded-xl
                  bg-surface border border-border
                  hover:border-primary transition-all duration-300"
                >
                  <span className="text-sm md:text-base font-medium text-muted-foreground hover:text-primary transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Button */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 z-20">
        <button
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <span className="text-sm uppercase tracking-wider">
            Scroll
          </span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </button>
      </div>
    </section>
  );
};