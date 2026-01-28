import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
// import WorkProcess from "../components/workProcess/WorkProcess";
import Portfolio from "../components/portfolio/Portfolio";


import Contact from "../components/contact/Contact";
import "../../index.css";
import Education from "../components/education/Education";
import Experience from "../components/expereince/Expereince";
import Skill from "../components/skills/Skill";

const Home = () => {
  return (
    <div className="relative">
      <div className="introduction-profile-background">
        <div className="content">
          <Introduction />
          <Profile />
        </div>
      </div>
      
      <div className="min-h-screen bg-gradient-to-b from-amber-50 via-red-100 to-green-50 p-20">
        <Education/>
      </div>
      <div className="bg-soft-white">
        <Skill/>
      </div>
      <Portfolio />
      <div className="bg-soft-white">
        <Experience/>
      </div>
      <Contact />
    </div>
  );
};

export default Home;
