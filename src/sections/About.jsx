import {
  Code2,
  Lightbulb,
  Rocket,
  Users
} from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "MERN Development",
    description:
      "Building full-stack applications using React, Node.js, Express and MongoDB with scalable architecture.",
  },
  {
    icon: Rocket,
    title: "AI Integration",
    description:
      "Developing AI-powered tools and automation workflows to enhance productivity and user experience.",
  },
  {
    icon: Users,
    title: "Authentication & Payments",
    description:
      "Implementing secure authentication systems with Google OAuth, JWT and Stripe payment integration.",
  },
  {
    icon: Lightbulb,
    title: "Clean Architecture",
    description:
      "Designing modular backend systems focused on scalability, performance and maintainable code.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-30 relative overflow-hidden">
      <div className="container mx-auto px-8 relative z-10">

        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-15">
          <h2 className="font-serif italic text-3xl md:text-5xl font-bold text-secondary-foreground">
            About <span className="text-white font-normal">Me</span>
          </h2>

          <p className="text-muted-foreground mt-6">
            A passionate developer focused on building modern web applications
            using the MERN stack and AI-powered solutions.
          </p>
        </div>

        {/* Left */}
        <div className="grid lg:grid-cols-2 gap-15 items-center">
          <div className="space-y-8">
            <h3 className="text-4xl md:text-5xl font-bold leading-tight text-secondary-foreground">
              Building the future,
              <span className="font-serif italic font-normal text-white">
                {" "}one component at a time.
              </span>
            </h3>

            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a Full Stack MERN Developer currently pursuing B.Tech in
                Computer Science with a strong focus on building scalable web
                applications.
              </p>
              <p>
                My specialization includes React.js, Node.js, Express.js and
                MongoDB along with secure authentication systems like Google
                OAuth and JWT.
              </p>
              <p>
                I enjoy building real-world products with AI integrations,
                optimized backend architectures and modern UI systems.
              </p>
            </div>

            {/* Mission */}
            <div className="glass rounded-2xl p-6 glow-border">
              <p className="text-lg italic text-foreground">
                "My mission is to build secure, scalable and AI-powered web
                applications that deliver meaningful real-world impact."
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group glass p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 hover:scale-[1.04] hover:shadow-xl hover:shadow-primary/10"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  <h4 className="text-lg font-semibold mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};