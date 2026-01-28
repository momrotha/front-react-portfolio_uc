
const ExperienceCard = ({ role, company, period, description }) => {
  return (
    <div className="relative bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all">
      {/* Timeline Dot */}
      <span className="absolute top-6 -left-3 w-3 h-3 bg-blue-500 rounded-full"></span>

      <p className="text-sm text-blue-500 font-semibold">{period}</p>
      <h3 className="text-lg font-semibold mt-1">{role}</h3>
      <p className="text-gray-500 text-sm">{company}</p>

      <p className="text-gray-600 text-sm mt-3 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ExperienceCard;
