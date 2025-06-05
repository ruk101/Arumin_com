import HeroSection from "@/components/Sustainability/HeroSection";
import EthicalSourcingSection from "@/components/Sustainability/EthicalSourcingSection";
import BeautifulMinesSection from "@/components/Sustainability/BeautifulMinesSection";
import TraceabilityEnvironmentSection from "@/components/Sustainability/TraceabilityEnvironmentSection";

export default function SustainabilityPage() {
  return (
    <main>
      <HeroSection />
      <EthicalSourcingSection />
      <BeautifulMinesSection/>
      <TraceabilityEnvironmentSection />
    </main>
  );
}
