import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { AppointmentStrip } from "@/components/appointment-strip";
import { SiteFooter } from "@/components/site-footer";

/**
 * Home page — composes top-level layout sections.
 * Each section is an isolated Server Component for easy maintenance.
 */
export default function HomePage() {
  return (
    <main className="qualykids-page">
      <SiteHeader />
      <HeroSection />
      <AppointmentStrip />
      <SiteFooter />
    </main>
  );
}
