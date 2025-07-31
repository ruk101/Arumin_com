export const metadata = {
  title: "Sustainability | Arumin",
  description:
    "A framework grounded in impact, environmental responsibility, and value retained at origin.",
};

import HeroSection from "@/components/Sustainability/HeroSection";
import EthicalSourcingSection from "@/components/Sustainability/EthicalSourcingSection";
import BeautifulMinesSection from "@/components/Sustainability/BeautifulMinesSection";
import TraceabilityEnvironmentSection from "@/components/Sustainability/TraceabilityEnvironmentSection";

export default function SustainabilityPage() {
  return (
    <main>
      <HeroSection />
      <EthicalSourcingSection />
      <BeautifulMinesSection />
      <TraceabilityEnvironmentSection />
    </main>
  );
}
