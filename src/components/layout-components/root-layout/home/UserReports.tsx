export default function UserReports() {
  return (
    <section
      style={{
        background: "linear-gradient(179.76deg, #2A9DF4 -5.11%, #121212 99.79%)",
        clipPath: " polygon(0 12%, 100% 0%, 100% 100%, 0% 100%)",
      }}
      className="pt-[84px] pb-[61px]"
    >
      <main className="container mx-auto text-center">
        <h1 className="font-[900] text-4xl text-[#FFFFFF] tracking-[0.1rem]">THE STARTS NEVER NIE</h1>
        <div className="flex justify-between flex-wrap space-y-10 text-center mt-[51px]">
          <article>
            <h3 className="tracking-[0.1rem] text-[1.563rem] mb-[21px]  font-[300] text-[#FFFFFF]">TOTAL</h3>
            <div className="flex gap-[70px]">
              <div>
                <h1 className="text-[2.5rem] text-[#FFFFFF] tracking-[0.1rem] font-bold">25K+</h1>
                <p
                  className="text-[1.625rem] lg:max-w-[10ch]
         text-[#FFFFFF] tracking-[0.1rem]"
                >
                  Registered Players{" "}
                </p>
              </div>
              <div>
                <h1 className="text-[2.5rem] text-[#FFFFFF] tracking-[0.1rem] font-bold">45K+</h1>
                <p className="text-[1.625rem] lg:max-w-[10ch] text-[#FFFFFF] tracking-[0.1rem]">Games Played </p>
              </div>
            </div>
          </article>
          <article>
            <h3 className="tracking-[0.1rem] text-[1.563rem] mb-[21px]  font-[300] text-[#FFFFFF]">MONTHLY</h3>
            <div className="flex gap-[70px]">
              <div>
                <h1 className="text-[2.5rem] text-[#FFFFFF] tracking-[0.1rem] font-bold">50K+</h1>
                <p className="text-[1.625rem] lg:max-w-[14ch] text-[#FFFFFF] tracking-[0.1rem]">Monthly Sports Available</p>
              </div>
              <div>
                <h1 className="text-[2.5rem] text-[#FFFFFF] tracking-[0.1rem] font-bold">20K+</h1>
                <p className="text-[1.625rem] lg:max-w-[14ch] text-[#FFFFFF] tracking-[0.1rem]">Active Players Per Month </p>
              </div>
            </div>
          </article>
        </div>
      </main>
    </section>
  );
}
