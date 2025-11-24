import "./App.css";
import { AboutSection } from "./components/AboutSection";
import { ApplicationSection } from "./components/ApplicationSection";
import { AwardsSection } from "./components/AwardsSection";
import { ContactSection } from "./components/ContactSection";
import { DocumentsSection } from "./components/DocumentsSection";
import { ExpertiseSection } from "./components/ExpertiseSection";
import { FaqSection } from "./components/FaqSection";
import { Hero } from "./components/Hero";
import { NavBar } from "./components/NavBar";
import { RequisitesSection } from "./components/RequisitesSection";
import { SiteFooter } from "./components/SiteFooter";
import { TeamSection } from "./components/TeamSection";
import { WorksSection } from "./components/WorksSection";

function App() {
  return (
    <div className="page">
      <NavBar />
      <main>
        <Hero />
        <AboutSection />
        <TeamSection />
        <WorksSection />
        <DocumentsSection />
        <FaqSection />
        <ExpertiseSection />
        <ApplicationSection />
        <AwardsSection />
        <RequisitesSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
