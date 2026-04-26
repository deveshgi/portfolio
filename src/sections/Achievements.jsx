import {
  Award,
  Rocket,
  ShieldCheck,
  CreditCard
} from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "MERN Full Stack Development Certification",
    description:
      "Completed an intensive full stack program covering React.js, Node.js, Express.js and MongoDB with hands-on application development and backend API design."
  },

  {
    icon: Rocket,
    title: "Production-Ready Web Applications",
    description:
      "Designed and deployed multiple full stack applications using modern web technologies with scalable backend architecture."
  },

  {
    icon: ShieldCheck,
    title: "Secure Authentication Systems",
    description:
      "Implemented secure authentication workflows using Google OAuth and JWT based authorization for modern web applications."
  },

  {
    icon: CreditCard,
    title: "Payment Gateway Integration",
    description:
      "Integrated Stripe payment systems enabling secure transactions and credit-based usage models in full stack applications."
  }
];

export const Achievements = () => {
  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif italic text-3xl md:text-5xl font-bold text-secondary-foreground">
            Achievements
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold mt-6 mb-2 text-secondary-foreground">
            Certifications & <span className="text-white font-normal">Accomplishments</span>
          </h3>
          <p className="text-muted-foreground">
            Key milestones from my developer journey including certifications,
            technical achievements and skills gained while mastering full-stack development.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* {achievements.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} className="glass p-6 rounded-2xl hover:border-primary/40 border border-transparent transition-all duration-500 hover:scale-[1.03]"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          })} */}
          {achievements.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group glass p-6 rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 hover:scale-[1.04] hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition">
                    <Icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  <h3 className="text-lg md:text-xl font-semibold leading-tight">
                    {item.title}
                  </h3>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}