import Image from "next/image";

export default function Features() {
  return (
    <section className="container mx-auto my-10">
      <main>
        <div className="container  mx-auto w-full h-full">
          <div className="relative  p-10 h-full">
            <div className="w-[5px] bg-[#2A9DF4] absolute  border-[#2A9DF4] h-full  left-[50%]">
              <div className="w-full h-full border relative">
                <span className="absolute w-4 h-4 top-0 left-1/2 transform -translate-x-2 bg-[#2A9DF4] rounded-full"></span>
                <span className="absolute w-4 h-4 bottom-0 left-1/2 transform -translate-x-2 bg-[#2A9DF4] rounded-full"></span>
              </div>
            </div>

            <div className="mb-8 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12 border">
                <div className="">
                  <figure className="relative">
                    <div className="">
                      <Image className="w-full h-full lg:max-w-[444px]" width={444} height={226} src={"/assets/home/2player.png"} alt="cricket" />
                    </div>
                  </figure>
                </div>
              </div>
              <div className="z-20 flex items-center order-1 bg-[#2A9DF4] shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
              </div>
              <div className="order-1  rounded-lg w-5/12  py-4 border">
                <div>
                  <div className="text-left">
                    <h3 className="text-[2rem] text-[#2A9DF4]">FIND LOCAL PLAYERS</h3>
                    <p className="tracking-[0.1rem] font-[300]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12">
                {" "}
                <div className="">
                  <figure className="relative">
                    <div className="">
                      <Image width={444} height={226} className="w-full h-full lg:max-w-[444px]" src={"/assets/home/2player.png"} alt="cricket" />
                    </div>
                  </figure>
                </div>
              </div>
              <div className="z-20 flex items-center order-1 bg-[#2A9DF4] shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
              </div>
              <div className="order-1  rounded-lg  w-5/12 py-4">
                <div>
                  <div className="text-left">
                    <h3 className="text-[2rem] text-[#2A9DF4]">FIND LOCAL PLAYERS</h3>
                    <p className="tracking-[0.1rem] font-[300]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
