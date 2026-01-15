import { ExternalLink, Calendar, Code } from 'lucide-react';
import SectionDivider from './SectionDivider';

interface Project {
  title: string;
  date: string;
  description: string;
  tech: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: 'Supermarket Sales Analysis',
    date: 'Jan 2025 – Apr 2025',
    description:
      'Machine learning based sales analysis and prediction system for retail optimization and business insights.',
    tech: ['Python', 'Machine Learning'],
    link: 'https://www.kaggle.com/code/dhruvbholaas/supermarket-sales-prediction-model',
  },
  {
    title: 'Quiz App with Admin Panel',
    date: 'Sep 2024 – Dec 2024',
    description:
      'Full-stack quiz application with comprehensive admin panel for managing questions, users, and analytics.',
    tech: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'XAMPP'],
    link: 'https://dhruv-bhola.github.io/GU_WebDev_Project/v2/company/company.html',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <SectionDivider title="Projects" />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article key={index} className="project-card group">
              <div className="p-6 md:p-8">
                {/* Date */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{project.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex items-center gap-2 mb-6">
                  <Code className="w-4 h-4 text-primary" />
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2.5 py-1 bg-secondary text-secondary-foreground rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Project
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
