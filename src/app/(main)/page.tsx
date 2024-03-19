import Features from "@/components/layout-components/root-layout/home/Features";
import { FeaturesPlayer } from "@/components/layout-components/root-layout/home/FeaturesPlayer";
import HeroSection from "@/components/layout-components/root-layout/home/HeroSection";
import LiveScore from "@/components/layout-components/root-layout/home/LiveScore";
import OurPartner from "@/components/layout-components/root-layout/home/OurPartner";
import RegisterSection from "@/components/layout-components/root-layout/home/RegisterSection";
import ServiceSlider from "@/components/layout-components/root-layout/home/ServiceSlider";
import UserReports from "@/components/layout-components/root-layout/home/UserReports";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <OurPartner />
      <div className="my-[122px]">
        <LiveScore />
      </div>
      <div className="mb-[145px]">
        <ServiceSlider />
      </div>
      <div>
        <Features />
      </div>
      <div>
        <UserReports />
      </div>
      <div className="mt-[120px]">
        <FeaturesPlayer />
      </div>
      <div className="mt-[157px]">
        <RegisterSection />
      </div>
    </main>
  );
}
