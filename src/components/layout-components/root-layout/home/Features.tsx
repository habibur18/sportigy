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
                      <Image className="w-full h-full lg:max-w-[444px]" width={444} height={226} src={"/assets/Home/2player.png"} alt="cricket" />
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
                      <Image width={444} height={226} className="w-full h-full lg:max-w-[444px]" src={"/assets/Home/2player.png"} alt="cricket" />
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
{
  /*






<div class="min-h-screen bg-blue-500 py-6 flex flex-col justify-center sm:py-12">
  <div class="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">

    <div class="relative text-gray-700 antialiased text-sm font-semibold">

      <!-- Vertical bar running through middle -->
      <div class="hidden sm:block w-1 bg-blue-300 absolute h-full left-1/2 transform -translate-x-1/2"></div>

      <!-- Left section, set by justify-start and sm:pr-8 -->
      <div class="mt-6 sm:mt-0 sm:mb-12">
        <div class="flex flex-col sm:flex-row items-center">
          <div class="flex justify-start w-full mx-auto items-center">
            <div class="w-full sm:w-1/2 sm:pr-8">
              <div class="p-4 bg-white rounded shadow">
                Now this is a story all about how,
              </div>
            </div>
          </div>
          <div class="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Right section, set by justify-end and sm:pl-8 -->
      <div class="mt-6 sm:mt-0 sm:mb-12">
        <div class="flex flex-col sm:flex-row items-center">
          <div class="flex justify-end w-full mx-auto items-center">
            <div class="w-full sm:w-1/2 sm:pl-8">
              <div class="p-4 bg-white rounded shadow">
                My life got flipped turned upside down,
              </div>
            </div>
          </div>
          <div class="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Left section, set by justify-start and sm:pr-8 -->
      <div class="mt-6 sm:mt-0 sm:mb-12">
        <div class="flex flex-col sm:flex-row items-center">
          <div class="flex justify-start w-full mx-auto items-center">
            <div class="w-full sm:w-1/2 sm:pr-8">
              <div class="p-4 bg-white rounded shadow">
                And I'd like to take a minute, just sit right there,
              </div>
            </div>
          </div>
          <div class="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Right section, set by justify-end and sm:pl-8 -->
      <div class="mt-6 sm:mt-0">
        <div class="flex flex-col sm:flex-row items-center">
          <div class="flex justify-end w-full mx-auto items-center">
            <div class="w-full sm:w-1/2 sm:pl-8">
              <div class="p-4 bg-white rounded shadow">
                I'll tell you how I became the Prince of a town called Bel Air.
              </div>
            </div>
          </div>
          <div class="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>
        </div>
      </div>



    </div>

  </div>
</div>

*/
}
