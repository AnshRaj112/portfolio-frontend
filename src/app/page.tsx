import Header from "./components/Header";
import Home from "./components/HomeSection";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Project from "./components/Project";
import SkillsList from "./components/SkillsList";
import ResearchList from "./components/ResearchList";
import Testimonials from "./components/Testimonials";
import Certifications from "./components/Certifications";
import Contact from "./components/contact";
import Footer from "./components/Footer";

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
      <section id="research">
        <ResearchList />
      </section>
      <section id="testimonial">
        <Testimonials />
      </section>
      <Certifications />
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}
