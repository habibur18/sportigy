import AboutUsIntro from "@/components/layout-components/main/about/AboutUsIntro";
import OurCoreValue from "@/components/layout-components/main/about/OurCoreValue";
import Image from "next/image";

export default function About() {
  return (
    <div className="container mx-auto">
      <AboutUsIntro />
      <div className="mt-[152px] mb-[141px]">
        <OurCoreValue />
      </div>
      {/* final section */}
      <div
        style={{
          border: "6px solid rgb(255, 255, 255)",
          borderRadius: "50px 0px 50px 0px",

          boxShadow: "0px 2px 8px 0px rgba(99, 99, 99, 0.2)",
          background: "linear-gradient(180.00deg, rgb(0, 0, 0),rgb(42, 157, 244) 100%),rgb(212, 0, 48)",
          opacity: 0.8,
        }}
        className="py-[19px] pl-[79px] pr-[59px] flex items-center gap-5"
      >
        <div className="md:w-[80%]">
          <h1 className="font-bold text-4xl tracking-[0.031rem] text-[#FFFFFF]">Things are changing fast, but you can be faster</h1>
          <p className="text-2xl text-[#FFFFFF] font-medium md:max-w-[50ch]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. <span className="font-bold text-[1.6rem]">We Can Do That</span>
          </p>
        </div>
        <div>
          <Image src="/assets/About/leftrun.png" width={206} height={225} alt="image" />
        </div>
      </div>
    </div>
  );
}
