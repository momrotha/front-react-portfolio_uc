const SkillCard = ({ name, level }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition-all duration-300">
      <div className="flex justify-between items-center mb-2">
        <p className="font-semibold text-gray-800">{name}</p>
        <span className="text-sm text-gray-500">{level}%</span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-blue-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
};

export default SkillCard;