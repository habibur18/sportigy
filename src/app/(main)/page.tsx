import HeroSection from "@/components/layout-components/root-layout/home/HeroSection";
import LiveScore from "@/components/layout-components/root-layout/home/LiveScore";
import OurPartner from "@/components/layout-components/root-layout/home/OurPartner";
import ServiceSlider from "@/components/layout-components/root-layout/home/ServiceSlider";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <OurPartner />
      <div className="my-[122px]">
        <LiveScore />
      </div>
      <ServiceSlider />
    </main>
  );
}
