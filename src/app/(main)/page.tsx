import Features from "@/components/layout-components/main/pages/home/Features";
import { FeaturesPlayer } from "@/components/layout-components/main/pages/home/FeaturesPlayer";
import HeroSection from "@/components/layout-components/main/pages/home/HeroSection";
import LiveScore from "@/components/layout-components/main/pages/home/LiveScore";
import OurPartner from "@/components/layout-components/main/pages/home/OurPartner";
import RegisterSection from "@/components/layout-components/main/pages/home/RegisterSection";
import ServiceSlider from "@/components/layout-components/main/pages/home/ServiceSlider";
import UserReports from "@/components/layout-components/main/pages/home/UserReports";

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
      <div className="">
        <Features />
      </div>
      <div className="mt-[150px]">
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
