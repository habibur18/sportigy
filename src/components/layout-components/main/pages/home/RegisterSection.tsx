import { Button } from "@/components/ui/button";
import { Mulish } from "next/font/google";
const mulish = Mulish({ subsets: ["latin"] });

export default function RegisterSection() {
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.8), rgba(42, 157, 244, 0.8)), url('/assets/home/service-slider-bg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
      className="h-[400px] relative text-center "
    >
      <main className="flex justify-center items-center h-full container mx-auto">
        <div className="  flex flex-col justify-center items-center ">
          <h1 className={` ${mulish.className} tracking-[0.1rem] lg:max-w-[34ch] text-[1.75rem] font-[1000] text-[#FFFFFF]`}>SEEKING PLAYING OPPORTUNITIES HOME OR ABROAD?</h1>
          <Button style={{ background: "linear-gradient(180deg, rgba(42, 157, 244, 0.8) 0%, rgba(18, 18, 18, 0.8) 100%)" }} className=" col-span-10 flex justify-center py-[30px] px-[93px] font-extrabold text-[#FFFFFF] mx-auto mt-[34px]">
            Player Registration
          </Button>
        </div>
        <div className="w-[5px] mx-auto h-[200px] bg-[#FFFFFF]"></div>
        <div className="  flex flex-col justify-center items-center ">
          <h1 className={` ${mulish.className} tracking-[0.1rem] lg:max-w-[30ch] text-[1.75rem] font-[1000] text-[#FFFFFF]`}>LOOKING TO RECRUIT LOCAL OR OVERSEAS PLAYERS?</h1>
          <Button style={{ background: "linear-gradient(180deg, rgba(42, 157, 244, 0.8) 0%, rgba(18, 18, 18, 0.8) 100%)" }} className=" col-span-10 flex justify-center py-[30px] px-[93px] font-extrabold text-[#FFFFFF] mx-auto  mt-[34px]">
            Club Registration
          </Button>
        </div>
      </main>
    </section>
  );
}
