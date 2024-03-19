import { Button } from "@/components/ui/button";
import { Lemon } from "next/font/google";
import bg from "../../../../asset/Home/batball.png";
const lemon = Lemon({ weight: "400", subsets: ["latin"] });

export default function HeroSection() {
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(180.00deg, rgba(0, 0, 0, 0.6), rgba(42, 157, 244, 0.6)), url(${bg.src})`,
        backgroundSize: "100% 120%",
      }}
      className="py-[85px] px-5 flex justify-center border items-center text-center  bg-top bg-no-repeat h-[573px]"
    >
      <article>
        <div>
          <h1 className={`${lemon.className} text-[5.3rem] text-[#FFFFFF]`}>Team Ground</h1>
          <p className="my-[18px] mb-[42px] text-[#FFFFFF] text-[17px] font-bold"> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="">
          <Button style={{ background: "linear-gradient(180deg, rgba(42, 157, 244, 0.8) 0%, rgba(18, 18, 18, 0.8) 100%)" }} className="col-span-6 py-[30px] px-[13px] font-extrabold text-[#FFFFFF] mr-[78px] tracking-[0.1rem] text-[22px] ">
            Player Registration
          </Button>
          <Button style={{ background: "linear-gradient(180deg, rgba(42, 157, 244, 0.8) 0%, rgba(18, 18, 18, 0.8) 100%)" }} className=" col-span-6 py-[30px] px-[13px] font-extrabold text-[#FFFFFF] tracking-[0.1rem]  text-[22px]">
            Club Registration
          </Button>
          <Button style={{ background: "linear-gradient(180deg, rgba(42, 157, 244, 0.8) 0%, rgba(18, 18, 18, 0.8) 100%)" }} className=" col-span-10 flex justify-center py-[30px] px-[93px] font-extrabold text-[#FFFFFF] mx-auto my-[50px] tracking-[0.1rem]  text-[22px]">
            Search Our Players
          </Button>
        </div>
      </article>
    </section>
  );
}
