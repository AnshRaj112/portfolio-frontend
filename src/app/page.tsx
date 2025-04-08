import Header from "./components/Header";
import Home from "./components/HomeSection";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Project from "./components/Project";
import SkillsList from "./components/SkillsList";

export default function Landing() {
  return (
    <div>
      <Header />
      <section id="home">
        <Home />
      </section>
      <AboutMe />
      <section id="education">
        <Education />
      </section>
      <Experience />
      <section id="projects">
        <Project />
      </section>
      <section id="skills">
        <SkillsList />
      </section>
    </div>
  );
}
