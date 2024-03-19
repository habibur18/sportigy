import Image from "next/image";

export default function Features() {
  return (
    <section className="container mx-auto my-10">
      <main className="flex justify-between ">
        <div className="w-[45%] flex justify-center grow-0">
          <figure className="">
            <Image width={244} className="border" height={226} src={"/assets/Home/player2.png"} alt="criket" />
            <Image className="mt-[-155px] ml-[-180px]" width={244} height={226} src={"/assets/Home/player1.png"} alt="criket" />
          </figure>
        </div>
        <div className="w-[4px] relative bg-[#2A9DF4] h-[400px]">
          <span className="absolute size-4 top-0 translate-y-[-50%] -left-[125%] bg-[#2A9DF4] rounded-full"></span>
          <span className="absolute size-4 bottom-0  -left-[125%] bg-[#2A9DF4] rounded-full"></span>
        </div>
        <div
          className="w-[45%] grow-0
        "
        >
          <h3 className="text-[2rem] text-[#2A9DF4]">FIND LOCAL PLAYERS</h3>
          <p className="tracking-[0.1rem] font-[300]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
        </div>
      </main>
    </section>
  );
}
