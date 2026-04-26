import { Button } from "@/components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { 
  Github, 
  Linkedin,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  AlertCircle, 
} from "lucide-react";


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

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "devesh@gmail.com",
    href: "mailto:devesh62025@gmail.com",
    clickable: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9XXXXXXXXX",
    clickable: false,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India",
    clickable: false,
  },
];

export const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS environment variables missing");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll reply soon.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {
      console.error(error);

      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-25 relative overflow-hidden">
      <div className="container mx-auto px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-18">
          <h2 className="font-serif italic text-3xl md:text-5xl font-bold text-secondary-foreground mb-5">
            Let's build{" "}
            <span className="text-white font-normal">
              something great.
            </span>
          </h2>
          <p className="text-muted-foreground">
            Interested in working together or have a project idea?
            Feel free to reach out.
          </p>
        </div>
        <div className="grid lg:grid-cols-[60%_40%] gap-15 max-w-7xl mx-auto">

          {/* Contact Form */}
          <div className="glass p-8 rounded-3xl border border-primary/30">
            <form className="space-y-8
            ml-10 mr-10" onSubmit={handleSubmit}>

              <div>
                <label className="block text-sm mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isLoading}
                className="w-full"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </Button>

              {/* Status Message */}
              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3 p-4 rounded-xl text-sm ${submitStatus.type === "success"
                    ? "bg-green-500/10 text-green-400"
                    : "bg-red-500/10 text-red-400"
                    }`}
                >
                  {submitStatus.type === "success"
                    ? <CheckCircle className="w-5 h-5" />
                    : <AlertCircle className="w-5 h-5" />
                  }
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="glass p-10 rounded-3xl">
            <h3 className="text-xl md:text-3xl font-semibold text-secondary-foreground mb-5">
              Contact{" "}
              <span className="font-serif italic text-white font-normal">
                Information
              </span>
            </h3>
            <div className="space-y-5">
              {contactInfo.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-6 p-5 rounded-xl hover:bg-surface transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">
                      {item.label}
                    </div>
                    {item.label === "Email" ? (
                      <a
                        href={item.href}
                        className="font-medium hover:text-primar transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="font-medium">
                        {item.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Social Icon*/}
              <div className="flex items-center gap-8 ml-5 mt-8">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-4 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};