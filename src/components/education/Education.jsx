import EducationCard from "./EducationCard";

const educationData = [
  {
    degree: "Bachelor of Computer Science",
    school: "University of Cambodia",
    year: "2022 – Present",
    description:
      "Studying software development, web technologies, databases, and system analysis with a strong focus on practical projects.",
  },
  {
    degree: "Higher Diploma in Web Development",
    school: "IT Training Center",
    year: "2021 – 2022",
    description:
      "Focused on frontend and backend development including HTML, CSS, JavaScript, PHP, and MySQL.",
  },
  {
    degree: "High School Diploma",
    school: "Hun Sen High School",
    year: "2018 – 2021",
    description:
      "Completed general education with strong interest in technology and computer science.",
  },
];

const Education = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto" id="education">
      {/* Title */}
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl font-semibold">
          My <span className="text-blue-500">Education</span>
        </h2>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto">
          My academic background and learning journey in technology and software
          development.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative border-l-2 border-blue-500 pl-8 space-y-10">
        {educationData.map((item, index) => (
          <EducationCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Education;
