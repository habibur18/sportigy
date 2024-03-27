import Image from "next/image";

export default function OurCoreValue() {
  return (
    <section>
      <div>
        <h1 className="text-[2.938rem] font-bold tracking-[0.1rem] mb-8">Our Core Values</h1>
      </div>
      <div className="flex gap-5">
        <div style={{ boxShadow: "0px 2px 8px 0px rgba(99, 99, 99, 0.2)" }} className="border-[15px] border-white  h-max rounded-xl bg-[#ffffff]">
          <div className="relative bg-transparent">
            <Image src="/assets/about/healmet.png" className=" rounded-xl" alt="about-us" width={382} height={586} />
            <div className="absolute top-0 bg-[#2A9DF4]/25 rounded-xl  w-full h-full"> </div>
          </div>
        </div>
        <article className="w-full md:max-w-[792px]">
          <p className="text-[1.375rem] text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>

          <div className="mt-5 space-y-[28px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="flex gap-5">
                <div>
                  <Image className="mt-3" src={"/assets/about/arrow.png"} alt="about-us" width={32} height={32} />
                </div>
                <p className="text-[1.375rem] font-light text-[#121212]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
