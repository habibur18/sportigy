import { Button } from "@/components/ui/button";
import { Lemon } from "next/font/google";
const lemon = Lemon({ weight: "400", subsets: ["latin"] });

export default function HeroSection() {
  return (
    <section className="py-[85px] flex justify-center items-center text-center">
      <article>
        <div>
          <h1 className={`${lemon.className} text-[5.3rem] text-[#FFFFFF]`}>Team Ground</h1>
          <p> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="">
          <Button style={{ background: "linear-gradient(180deg, rgba(42, 157, 244, 0.8) 0%, rgba(18, 18, 18, 0.8) 100%)" }} className="col-span-6 py-[30px] px-[13px] font-extrabold text-[#FFFFFF] mr-[78px]">
            Player Registration
          </Button>
          <Button style={{ background: "linear-gradient(180deg, rgba(42, 157, 244, 0.8) 0%, rgba(18, 18, 18, 0.8) 100%)" }} className=" col-span-6 py-[30px] px-[13px] font-extrabold text-[#FFFFFF]">
            Club Registration
          </Button>
          <Button style={{ background: "linear-gradient(180deg, rgba(42, 157, 244, 0.8) 0%, rgba(18, 18, 18, 0.8) 100%)" }} className=" col-span-10 flex justify-center py-[30px] px-[93px] font-extrabold text-[#FFFFFF] mx-auto my-[50px]">
            Search Our Players
          </Button>
        </div>
      </article>
    </section>
  );
}
