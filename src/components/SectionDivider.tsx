import { Sparkles } from 'lucide-react';

interface SectionDividerProps {
  title: string;
}

const SectionDivider = ({ title }: SectionDividerProps) => {
  return (
    <div className="text-center mb-12">
      <h2 className="section-heading">{title}</h2>
      <div className="section-divider">
        <Sparkles className="w-5 h-5 text-primary" />
      </div>
    </div>
  );
};

export default SectionDivider;
