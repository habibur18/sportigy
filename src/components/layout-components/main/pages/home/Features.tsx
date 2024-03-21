import Image from "next/image";
import FeaturedText from "./featuresSection/FeaturedText";
import PlayerImage from "./featuresSection/PlayerImage";

export default function Features() {
  return (
    <section className="container mx-auto my-10">
      <main>
        <div className="">
          <div className="relative  p-10 h-full">
            <div className="w-[5px] bg-[#2A9DF4] absolute  h-full  left-[50%]">
              <div className="w-full h-full  relative">
                <span className="absolute w-4 h-4 top-0 left-1/2 transform -translate-x-2 bg-[#2A9DF4] rounded-full"></span>
                <span className="absolute w-4 h-4 bottom-0 left-1/2 transform -translate-x-2 bg-[#2A9DF4] rounded-full"></span>
              </div>
            </div>
            {/* 1 */}
            <div className="mt-12 mb-[128px] flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12 ">
                <PlayerImage />
              </div>
              <div className="z-20 flex items-center order-1 bg-[#2A9DF4] ml-1 shadow-xl w-[50px] h-[50px] rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">
                  <Image width={28} height={28} src={"/assets/Home/searchicon.png"} alt="searchicon" />
                </h1>
              </div>
              <div className="order-1  rounded-lg w-5/12  py-4 ">
                <FeaturedText title="FIND LOCAL PLAYERS" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
              </div>
            </div>
            {/* 2 */}
            <div className=" mb-[128px] flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12">
                {" "}
                <PlayerImage />
              </div>
              <div className="z-20 flex items-center order-1 bg-[#2A9DF4] ml-1 shadow-xl w-[50px] h-[50px] rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">
                  <Image width={28} height={28} src={"/assets/Home/threebar.png"} alt="searchicon" />
                </h1>
              </div>
              <div className="order-1  rounded-lg  w-5/12 py-4">
                <FeaturedText title="FIND GAMES/EVENTS" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
              </div>
            </div>
            {/* 3 */}
            <div className="mb-[128px] flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12 ">
                <PlayerImage />
              </div>
              <div className="z-20 flex items-center order-1 bg-[#2A9DF4] ml-1 shadow-xl w-[50px] h-[50px] rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">
                  <Image width={28} height={28} src={"/assets/Home/flower.png"} alt="searchicon" />
                </h1>
              </div>
              <div className="order-1  rounded-lg w-5/12  py-4 ">
                <FeaturedText title="ADMIN DONE IN FIVE MINUTES WITH SQUADBOSS" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
              </div>
            </div>
            {/* 4 */}
            <div className="mb-[128px] flex justify-between flex-row-reverse items-center w-full left-timeline">
              <div className="order-1 w-5/12">
                {" "}
                <PlayerImage />
              </div>
              <div className="z-20 flex items-center order-1 bg-[#2A9DF4] ml-1 shadow-xl w-[50px] h-[50px] rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">
                  <Image width={28} height={28} src={"/assets/Home/star.png"} alt="searchicon" />
                </h1>
              </div>
              <div className="order-1  rounded-lg  w-5/12 py-4">
                <FeaturedText
                  title="BUILD YOUR
SPORTS NETWORK"
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                />
              </div>
            </div>
            {/* 5 */}
            <div className="mb-4 flex justify-between items-center w-full right-timeline">
              <div className="order-1 w-5/12 ">
                <PlayerImage />
              </div>
              <div className="z-20 flex items-center order-1 bg-[#2A9DF4] ml-1 shadow-xl w-[50px] h-[50px] rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">
                  <Image width={28} height={28} src={"/assets/Home/star1.png"} alt="searchicon" />
                </h1>
              </div>
              <div className="order-1  rounded-lg w-5/12  py-4 ">
                <FeaturedText title="RATE YOUR PLAYERS" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
