import { Briefcase, GraduationCap, Code } from "lucide-react";

const experiences = [
  {
    period: "Aug 2025 — Sep 2025",
    role: "Web Development Training",
    company: "Acmegrade Pvt Ltd.",
    icon: Briefcase,
    description:
      "Developed and deployed a full-stack MERN web application. Optimized backend APIs and database queries improving response time by 25% and enhanced frontend rendering performance by 15%.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Git",
      "Debugging",
      "Deployment",
    ],
    current: false,
  },
  // {
  //   period: "2024 — 2025",
  //   role: "AI Web Application Developer",
  //   company: "Personal Projects",
  //   icon: Code,
  //   description:
  //     "Built AI-powered applications including an AI Exam Notes Maker with Google OAuth authentication, Stripe payment integration, PDF export functionality and analytics dashboards.",
  //   technologies: [
  //     "React.js",
  //     "Node.js",
  //     "MongoDB",
  //     "JWT",
  //     "Google OAuth",
  //     "Stripe",
  //     "Recharts",
  //   ],
  //   current: false,
  // },
  // {
  //   period: "2024",
  //   role: "AI Resume Builder Developer",
  //   company: "Personal Project",
  //   icon: Code,
  //   description:
  //     "Developed an AI-driven resume builder with customizable templates using Strapi CMS and SQLite database with modern UI using TailwindCSS and ShadCN.",
  //   technologies: [
  //     "React.js",
  //     "Strapi",
  //     "SQLite",
  //     "TailwindCSS",
  //     "ShadCN",
  //   ],
  //   current: false,
  // },
  {
    period: "2025",
    role: "Full Stack Web Development Program",
    company: "Hitesh Choudhary — LearnCodeOnline",
    icon: Code,
    description:
      "Completed an intensive full stack development program covering JavaScript, React.js, Node.js, Express.js and MongoDB while building scalable backend APIs and real-world applications workflow.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Stripe",
      "JWT",
      "Google OAuth",
      "AI APIs",
      "REST APIs",
      "Postman"
    ],
    current: false,
  },
  {
    period: "2023 — 2026",
    role: "B.Tech Computer Science & Engineering",
    company: "Ambalika Institute Of Management & Technology",
    icon: GraduationCap,
    description:
      "Pursuing B.Tech in Computer Science focusing on Data Structures, DBMS, Operating Systems and Computer Networks while actively building MERN stack and AI applications.",
    technologies: [
      "Data Structures",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "MERN Stack",
    ],
    current: true,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-25 relative">

      {/* Background light */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-serif italic text-3xl md:text-5xl font-bold text-secondary-foreground mb-6">
            My <span className="text-white font-normal">Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4">
            A timeline of my technical journey highlighting projects,
            learning experiences and continuous growth in full-stack development.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Center Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2" />

          <div className="space-y-16">
            {experiences.map((exp, idx) => {
              const Icon = exp.icon;
              return (
                <div key={idx} className="relative grid md:grid-cols-2 gap-8">

                  {/* Timeline Icon */}
                  <div className="absolute left-0 md:left-1/2 top-0 w-10 h-10 bg-primary/10 rounded-full -translate-x-1/2 ring-4 ring-background z-10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                    {exp.current && (
                      <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-40"></span>
                    )}
                  </div>

                  {/* Content */}
                  <div className={`pl-8 md:pl-0 ${idx % 2 === 0
                    ? "md:pr-16 md:text-right"
                    : "md:col-start-2 md:pl-16"
                    }`}
                  >
                    <div className="group glass p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 hover:scale-[1.04] hover:shadow-xl hover:shadow-primary/10">
                      <span className="text-sm text-primary font-semibold">
                        {exp.period}
                      </span>
                      <h3 className="text-xl font-bold mt-2">
                        {exp.role}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {exp.company}
                      </p>
                      <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Technologies */}
                      <div className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""
                          }`}
                      >
                        {exp.technologies.map((tech, techIdx) => (
                          <span
                            key={techIdx}
                            className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                          >{tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};