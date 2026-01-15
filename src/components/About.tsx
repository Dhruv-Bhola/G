import { Download } from 'lucide-react';
import SectionDivider from './SectionDivider';

const About = () => {
  const handleDownload = () => {
    window.open('https://drive.google.com/file/d/1Pqs-LcjVs0P_rEmuWC67aCcBtmzpWMoy/view?usp=sharing', '_blank');
  };

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <SectionDivider title="About Me" />

        <div className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-sm">
          <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-left">
            I am an MCA student with a deep interest in <b>Data Science, AI/ML, and research-oriented problem solving</b>.<br></br>
            I enjoy working on <b>end-to-end machine learning projects</b>, starting from cleaning and understanding messy, real-world data<br></br>
            to designing, training, and evaluating models that <b>solve practical problems and create measurable impact</b>.<br></br><br></br>

            Currently, I am sharpening my <b>Data Structures and Algorithms (DSA) skills in C++</b>, as I strongly believe that<br></br>
            <b>strong fundamentals lead to better engineers and scalable solutions</b>.<br></br>
            My core focus areas include <b>problem solving, performance optimization, logical thinking</b>, and<br></br>
            <b>transforming raw data into meaningful, actionable insights</b> that support informed decision-making.
          </p>

          <div className="text-center">
            <button onClick={handleDownload} className="btn-primary">
              <Download className="w-5 h-5" />
              Download My Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
