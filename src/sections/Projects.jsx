import { ArrowUpRight, Github } from "lucide-react";
import { GiCheckMark } from "react-icons/gi";

const projects = [
  {
    title: "Todo App",
    description:
      "A simple task management application to add, delete and manage daily tasks with local storage support.",
    caseStudy: "#",
    image: "/projects/todo.png",

    tags: ["HTML", "CSS", "JavaScript"],

    features: [
      "Add & delete tasks",
      "Mark tasks as completed",
      "Local storage data persistence",
      "Clean and responsive UI"
    ],

    link: "https://deveshgi.github.io/todo-app/",
    github: "https://github.com/deveshgi/todo-app"
  },

  {
    title: "Weather App",
    description:
      "A weather forecasting app that shows real-time weather data using external API integration.",
    caseStudy: "#",
    image: "/projects/weather.png",

    tags: ["JavaScript", "API", "CSS", "HTML"],

    features: [
      "Live weather data",
      "Search by city",
      "Temperature & humidity info",
      "Responsive design"
    ],

    link: "https://weather-app-ecru-eta.vercel.app/",
    github: "https://github.com/deveshgi/weather-app"
  },

  {
    title: "AI Resume Builder",
    description:
      "AI-powered resume builder with smart content suggestions and customizable templates.",
    caseStudy: "/case-study/resume-builder",
    image: "/projects/resumeAI.png",

    tags: ["React", "OpenAI", "Tailwind",],

    features: [
      "AI resume generation",
      "Multiple templates",
      "Live preview",
      "PDF export"
    ],
    status: "In Progress",
    link: "https://resume-ai-beryl-gamma.vercel.app/",
    github: "https://github.com/deveshgi/resumeAI"
  },
  {
  title: "Portfolio Website",
  description:
    "A modern React-based portfolio website showcasing my projects, skills, and contact details with smooth UI and responsive design.",
  caseStudy: "#",
  image: "/projects/portfolio.png",

  tags: ["React", "JavaScript", "Tailwind",],

  features: [
    "Component-based architecture",
    "Responsive design",
    "Project showcase section",
    "Smooth navigation"
  ],

  link: "https://portfolio-seven-black-44.vercel.app/",
  github: "https://github.com/deveshgi/portfolio"
}
];

export const Projects = () => {

  const sortedProjects = [...projects].sort((a, b) => {
    if (a.status === "In Progress") return -1;
    if (b.status === "In Progress") return 1;
    return 0;
  });

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <h2 className="font-serif italic text-3xl md:text-5xl font-bold text-secondary-foreground">
            Projects
          </h2>
          <h2 className="text-2xl md:text-3xl font-bold mt-6 mb-2 text-secondary-foreground">
            Projects that{" "}
            <span className="font-normal text-white">
              solve real problems.
            </span>
          </h2>
          <p className="text-muted-foreground">
            A showcase of AI-powered web applications, full-stack MERN
            development, authentication systems, and performance-optimized
            backend architectures.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {sortedProjects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden md:row-span-1"
            >

              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />

                {/* Hover Icons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>

                {/* Status Show */}
                {project.status && (
                  <span className="absolute bottom-3 right-3 z-10 px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/30 backdrop-blur shadow-sm">
                    {project.status}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                  {/* <a
                    href={project.caseStudy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm hover:underline"
                  >
                    Read Full Case Study →
                  </a> */}
                </p>
                <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                  {project.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-primary"><GiCheckMark /></span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};