import { Container } from "@/shared/ui/Container";
import {
  AboutSection,
  ApplicationSection,
  DocumentsSection,
  ExpertiseSection,
  FaqSection,
  Hero,
  NavBar,
  ReviewsSection,
  RequisitesSection,
  SiteFooter,
  TeamSection,
  WorksSection,
  ContactSection,
} from "@/widgets";

export function LandingPage() {
  return (
    <div className="page">
      <Container>
        <NavBar />
        <main>
          <Hero />
          <AboutSection />
          {/* <TeamSection /> */}
          {/* <WorksSection /> */}
          {/* <ReviewsSection /> */}
          <DocumentsSection />
          <FaqSection />
          <ExpertiseSection />
          <ApplicationSection />
          <RequisitesSection />
          {/* <ContactSection /> */}
        </main>
        <SiteFooter />
      </Container>
    </div>
  );
}
