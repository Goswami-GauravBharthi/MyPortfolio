import AboutMain from "./components/About-Section/AboutMain";
import ContactMain from "./components/Contacgt-Section/ContactMain";
import ExperienceMain from "./components/Experience-Section/ExperienceMain";
import HeroMain from "./components/Hero-Section/HeroMain";
import SubHeroSection from "./components/Hero-Section/SubHeroSection";
import { NavbarMain } from "./components/Navbar/NavbarMain";
import ProjectsSection from "./components/Project-Section/ProjectSection";
import SkillMain from "./components/Skills-Section/SkillMain";

const App = () => {
  return (
    <>
      <main className="font-Josefin-Sans overflow-hidden">
        <NavbarMain />
        <HeroMain/>
        <SubHeroSection/>
        <AboutMain/>
        <div className="h-[100px]"></div>
        <SkillMain/>
        <ExperienceMain/>
        <ProjectsSection/>
        <ContactMain/>
      </main>
    </>
  );
};

export default App;
