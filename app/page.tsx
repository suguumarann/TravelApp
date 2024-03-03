// Importing necessary components
import Camp from "@/components/Camp"; // Importing Camp component
import Features from "@/components/Features"; // Importing Features component
import GetApp from "@/components/GetApp"; // Importing GetApp component
import Guide from "@/components/Guide"; // Importing Guide component
import Hero from "@/components/Hero"; // Importing Hero component

// Homepage component
export default function Home() {
  return (
    <>
      {/* Rendering components in the order they should appear on the homepage */}
      <Hero /> {/* Hero section */}
      <Camp /> {/* Camp section */}
      <Guide /> {/* Guide section */}
      <Features /> {/* Features section */}
      <GetApp /> {/* GetApp section */}
    </>
  );
}
