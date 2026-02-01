import { Container } from "@/shared/ui/Container";
import {
  AboutSection,
  ApplicationSection,
  ContactSection,
  DocumentsSection,
  ExpertiseSection,
  FaqSection,
  Hero,
  NavBar,
  RequisitesSection,
  SiteFooter,
  TeamSection,
  WorksSection,
} from "@/widgets";

export function LandingPage() {
  return (
    <div className="page">
      <Container>
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
          <RequisitesSection />
          <ContactSection />
        </main>
        <SiteFooter />
      </Container>
    </div>
  );
}
