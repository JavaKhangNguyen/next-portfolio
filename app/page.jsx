import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import Certifications from "./components/homepage/certificates";
import Calendly from "./components/homepage/calendly";
// import GitHubGraph from "./components/homepage/githubgraph";

export default async function Home() {
  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      {/* <GitHubGraph /> For now this component is not used */}
      <Calendly />
      <ContactSection />
    </div>
  )
}