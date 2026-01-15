import { Sparkles, Linkedin, Github } from 'lucide-react';
import profileImage from '@/assets/profile.jpeg';
import codolioIcon from '@/assets/codolio.png';
import leetcodeIcon from '@/assets/leetcode.png';
import codechefIcon from '@/assets/codechef.jpg';

const Hero = () => {
  const socialLinks = [
    {
      icon: () => <img src={codolioIcon} alt="Codolio" className="w-5 h-5 rounded-sm object-contain" />,
      label: 'Codolio',
      href: 'https://codolio.com/profile/dhruvbhola',
    },
    {
      icon: () => <img src={leetcodeIcon} alt="LeetCode" className="w-5 h-5 rounded-sm object-contain" />,
      label: 'LeetCode',
      href: 'https://leetcode.com/u/dharuvbhola/',
    },
    {
      icon: () => <img src={codechefIcon} alt="CodeChef" className="w-5 h-5 rounded-sm object-contain" />,
      label: 'CodeChef',
      href: 'https://www.codechef.com/users/dhruvbhola',
    },
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
    <section className="min-h-screen hero-bg flex items-center justify-center pt-20 pb-16 px-4">
      <div className="text-center max-w-3xl mx-auto">
        {/* Profile Image */}
        <div className="mb-8 fade-in-up">
          <img
            src={profileImage}
            alt="Dhruv Bhola"
            className="profile-image mx-auto"
          />
        </div>

        {/* Name */}
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 fade-in-up delay-100"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Dhruv Bhola
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg lg:text-xl text-primary font-medium mb-6 fade-in-up delay-200 max-w-2xl mx-auto">
          Aspiring Data Scientist | AI & ML Enthusiast | DSA • C++ • Kaggle
        </p>

        {/* Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8 fade-in-up delay-300">
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
                title={social.label}
              >
                <Icon />
              </a>
            );
          })}
        </div>

        {/* Divider */}
        <div className="section-divider fade-in-up delay-400">
          <Sparkles className="w-5 h-5 text-primary" />
        </div>

        {/* Intro */}
        <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed fade-in-up delay-500">
          Building innovative solutions through machine learning and data-driven insights.
          Passionate about research, algorithmic thinking, and real-world AI applications.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10 fade-in-up delay-500">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn-outline">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
