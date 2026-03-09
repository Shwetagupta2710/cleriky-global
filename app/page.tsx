import AboutPreview from "@/components/sections/AboutPreview";
import CTA from "@/components/sections/Cta";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Software from "@/components/sections/Software";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Workflow from "@/components/sections/Workflow";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Software />
      <WhyChooseUs />
      <Workflow />
      <AboutPreview />

      <CTA />
      <Footer />
    </main>
  );
}
