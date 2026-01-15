import { GraduationCap, Award, Users, Microscope } from 'lucide-react';
import SectionDivider from './SectionDivider';

interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  achievement?: string;
  roles?: string[];
}

const educationData: EducationItem[] = [
  {
    institution: 'IIIT Bhopal',
    degree: 'Master of Computer Applications (MCA)',
    period: '2025 – Expected 2028',
    achievement: 'CGPA: 9.82',
    roles: ['Class Representative', 'Assistant Research Lead • AXIOS IIIT Bhopal '],
  },
  {
    institution: 'Galgotias University',
    degree: 'Bachelor of Computer Applications (BCA)',
    period: '2022 – 2025',
    achievement: 'CGPA: 9.78',
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <SectionDivider title="Education" />

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div key={index} className="edu-card">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-xl text-primary shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {edu.institution}
                  </h3>
                  <p className="text-primary font-medium mb-2">{edu.degree}</p>
                  <p className="text-sm text-muted-foreground mb-3">{edu.period}</p>

                  {edu.achievement && (
                    <div className="flex items-center gap-2 text-sm">
                      <Award className="w-4 h-4 text-primary" />
                      <span className="text-foreground font-medium">{edu.achievement}</span>
                    </div>
                  )}

                  {edu.roles && (
                    <div className="mt-4 space-y-2">
                      <p className="text-sm font-medium text-foreground">Roles & Responsibilities:</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.roles.map((role, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full"
                          >
                            {i === 0 && <Users className="w-3 h-3" />}
                            {i === 2 && <Microscope className="w-3 h-3" />}
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
