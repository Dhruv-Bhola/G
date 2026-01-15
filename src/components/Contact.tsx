import { Mail, MapPin, Linkedin, Github } from 'lucide-react';
import SectionDivider from './SectionDivider';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'dharuvbhola@gmail.com',
      href: 'mailto:dharuvbhola@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Jind, Haryana, India',
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dhruvbhola',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/dhruv-bhola',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionDivider title="Get In Touch" />

        <div className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-sm">
          {/* Contact Info */}
          {/* <div className="grid md:grid-cols-2 gap-6 mb-10 max-w-xl mx-auto">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const content = (
                <div className="flex flex-col items-center text-center p-4">
                  <div className="p-3 bg-secondary rounded-xl text-primary mb-3">
                    <Icon className="w-6 h-6" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                  <p className="text-foreground font-medium">{info.value}</p>
                </div>
              );

              return info.href ? (
                <a
                  key={index}
                  href={info.href}
                  className="contact-link hover:bg-muted/50 rounded-xl transition-colors"
                >
                  {content}
                </a>
              ) : (
                <div key={index} className="rounded-xl">
                  {content}
                </div>
              );
            })}
          </div> */}
          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 max-w-xl mx-auto">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const isEmail = info.label === "Email";

              const content = (
                <div
                  className={`flex flex-col items-center text-center p-4 ${isEmail ? "mt-6 md:mt-0" : ""
                    }`}
                >
                  <div className="p-3 bg-secondary rounded-xl text-primary mb-3">
                    <Icon className="w-6 h-6" />
                  </div>

                  <p className="text-sm text-muted-foreground mb-1">
                    {info.label}
                  </p>

                  <p className="text-foreground font-medium text-center max-w-[260px] break-words">
                    {info.value}
                  </p>
                </div>
              );

              return info.href ? (
                <a
                  key={index}
                  href={info.href}
                  className="hover:bg-muted/50 rounded-xl transition-colors flex justify-center"
                >
                  {content}
                </a>
              ) : (
                <div key={index} className="rounded-xl flex justify-center">
                  {content}
                </div>
              );
            })}
          </div>


          {/* Social Links */}
          <div className="flex justify-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
