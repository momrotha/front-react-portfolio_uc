import SkillCard from "./SkillCard";

const Skill = () => {
  // Hardcoded skills data - no backend needed
  const skillData = {
    frontend: [
      { id: 1, name: "React", level: 90 },
      { id: 2, name: "JavaScript", level: 85 },
      { id: 3, name: "TypeScript", level: 80 },
      { id: 4, name: "HTML/CSS", level: 95 },
      { id: 5, name: "Tailwind CSS", level: 88 },
      { id: 6, name: "Next.js", level: 75 },
    ],
    tools: [
      { id: 7, name: "Git", level: 85 },
      { id: 8, name: "GitHub", level: 82 },
      { id: 9, name: "VS Code", level: 95 },
      { id: 10, name: "Figma", level: 70 },
      { id: 11, name: "Postman", level: 78 },
      { id: 12, name: "PHP", level: 90 },
    ],
  };

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto" id="skills">
      {/* Title */}
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-semibold">
          My <span className="text-blue-500">Skills</span>
        </h2>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto">
          Technologies and tools I use to build modern, scalable, and
          user-friendly applications.
        </p>
      </div>

      {/* Skill Grid - 2 columns */}
      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {/* Frontend */}
        <div>
          <h3 className="text-xl font-semibold mb-5 text-gray-800">Frontend</h3>
          <div className="space-y-4">
            {skillData.frontend.map((skill) => (
              <SkillCard key={skill.id} name={skill.name} level={skill.level} />
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <h3 className="text-xl font-semibold mb-5 text-gray-800">Tools</h3>
          <div className="space-y-4">
            {skillData.tools.map((skill) => (
              <SkillCard key={skill.id} name={skill.name} level={skill.level} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;