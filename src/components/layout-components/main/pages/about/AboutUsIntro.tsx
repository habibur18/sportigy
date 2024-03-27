import Image from "next/image";

export default function AboutUsIntro() {
  return (
    <section className="flex justify-between gap-16  mt-[150px]">
      <div className="md:w-1/2">
        <h1 className="text-6xl tracking-[0.1rem] font-bold">ABOUT US</h1>
        <div>
          <h3 className="mb-[22px] mt-[68px] text-[#000000] tracking-[0.1rem] text-4xl font-medium max-w-[15ch] leading-[50px]">Get the next level of services</h3>
          <p className=" text-lg font-[300] text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
      <div className="md:w-1/2">
        <Image src="/assets/about/about-us-hero.png" alt="about-us" width={548} height={498} />
      </div>
    </section>
  );
}
