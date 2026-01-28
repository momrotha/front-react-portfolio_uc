import { Briefcase, Code, Laptop } from 'lucide-react';

const ExperienceCard = ({ role, company, period, description, color, Icon, index }) => {
  const isTop = index % 2 === 0;
  
  return (
    <div className="relative flex flex-col items-center">
      {/* Content Box */}
      <div className={`${isTop ? 'mb-16' : 'mt-16'} ${isTop ? 'order-1' : 'order-3'}`}>
        <div className="text-center max-w-xs">
          <h3 className={`text-xl font-bold mb-2`} style={{ color }}>{role}</h3>
          <p className="text-gray-600 text-sm mb-3">{company}</p>
          <p className="text-gray-500 text-xs leading-relaxed">{description}</p>
        </div>
      </div>

      {/* Connecting Line */}
      <div className={`w-0.5 h-16 ${isTop ? 'order-2' : 'order-2'}`} style={{ backgroundColor: color }}></div>

      {/* Circle Icon */}
      <div 
        className="w-24 h-24 rounded-full flex items-center justify-center shadow-lg order-2 z-10"
        style={{ backgroundColor: color }}
      >
        <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">
          <Icon size={32} style={{ color }} />
        </div>
      </div>

      {/* Period */}
      <div className={`${isTop ? 'order-3 mt-16' : 'order-1 mb-16'} text-center`}>
        <p className="text-sm font-semibold" style={{ color }}>{period}</p>
      </div>
    </div>
  );
};

const experienceData = [
  {
    role: "Frontend Developer",
    company: "Freelance / Personal Projects",
    period: "2023 – Present",
    description: "Developing responsive web applications using React and Tailwind CSS. Focused on clean UI, performance, and user experience.",
    color: "#7C3AED",
    Icon: Code
  },
  {
    role: "Web Developer Intern",
    company: "Local IT Company",
    period: "2022 – 2023",
    description: "Assisted in building websites using HTML, CSS, JavaScript, and PHP. Collaborated with designers and backend developers.",
    color: "#EC4899",
    Icon: Laptop
  },
  {
    role: "Junior Web Developer",
    company: "University Projects",
    period: "2021 – 2022",
    description: "Built academic and personal projects including CRUD systems, portfolio websites, and database-driven applications.",
    color: "#3B82F6",
    Icon: Briefcase
  },
];

const Experience = () => {
  return (
    <section className="py-20 px-4 bg-gray-50" id="experience">
      {/* Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
          WORK EXPERIENCE
        </h2>
      </div>

      {/* Horizontal Timeline */}
      <div className="max-w-7xl mx-auto relative">
        {/* Horizontal Line */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-300 -translate-y-1/2 hidden md:block"></div>

        {/* Timeline Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 relative">
          {experienceData.map((item, index) => (
            <ExperienceCard key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;