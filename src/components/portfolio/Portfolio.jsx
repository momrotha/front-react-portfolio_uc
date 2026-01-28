import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/e-learn.png";
import card2 from "../../assets/images/portfolio-images/e-comm.png";
import card3 from "../../assets/images/portfolio-images/validation.png";
import card4 from "../../assets/images/portfolio-images/portfoilo.png";
import card5 from "../../assets/images/portfolio-images/stackquiz.jpg";
import card6 from "../../assets/images/portfolio-images/e-comm.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "Website E-learning",
    title: "Complete website with improved UX and modern aesthetics.",
    description:
      "Redesigned an e-learning platform to enhance user engagement and accessibility.",
    link: "https://momrotha.github.io/Mini-Project-Mom_Rotha/html/index.html",
  },
  {
    id: 2,
    image: card2,
    category: "E-commerce Platform",
    title: "Complete e-commerce website solution with use React.js",
    description:
      "Developed a full-featured e-commerce platform with seamless shopping experience and secure payment integration.",
    link: "https://react-websiteecommerce.vercel.app/",
  },
  {
    id: 3,
    image: card3,
    category: "Form Validation",
    title: "Project use JavaScript for do form validation .",
    description:
      "Implemented client-side form validation to enhance data integrity and user experience.",
    link: "https://momrotha.github.io/assignment-uc-rotha/",
  },
  {
    id: 4,
    image: card4,
    category: "Portfoilo Personal Website",
    title: "Portfolio Website",
    description:
      "Use for showcase my skills, projects, and experiences in a visually appealing and user-friendly manner.",
    link: "https://istad-fullstack-portfolio.vercel.app/",
  },
  {
    id: 5,
    image: card5,
  category: "STACKQUIZ WEB APPLICATION",
    title: "Learning Platform",
    description:
      "Implemented interactive learning modules and quizzes for an engaging educational experience.",
    link: "https://www.stackquiz.me/",
  },
  {
    id: 6,
    image: card6,
    category: "UI-UX DESIGN",
    title: "Product Admin Dashboard",
    description:
      "Enhanced user experience by streamlining workflows and optimizing interface components and so on.",
    link: "#!",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here's a selection of my recent work, showcasing my skills in
            creating user-centric and visually appealing interfaces.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="#!"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Project
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
