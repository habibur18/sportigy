import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
export default function ServiceSlider() {
  return (
    <section className="">
      <div className="text-center text-[40px] font-extrabold ">
        <h1 className="mb-[40px]">What We Offer</h1>
      </div>
      <div
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.8), rgba(42, 157, 244, 0.8)), url('/assets/Home/service-slider-bg.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
        className="min-h-[400px] flex justify-center items-center relative"
      >
        <article className="overflow-visible container mx-auto flex justify-center items-center  h-full">
          <Carousel className=" max-w-[1200px] mx-auto">
            <div className="absolute -bottom-[110px] left-[40%] ">
              <CarouselPrevious className="w-[83px]" />
            </div>
            <CarouselContent>
              <CarouselItem>
                <Card>
                  <CardContent style={{ padding: "0px !important" }} className="flex flex-wrap gap-12 items-center text-[25px]">
                    <div>
                      <h3 className="text-[28px] font-[1000] text-[#FFFFFF]">Top Viewed Reels</h3>
                      <p className="text-justify tracking-[0.1rem] text-[#FFFFFF]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    </div>
                    <div className="">
                      <iframe width="485.67" height="280.39" src="https://www.youtube.com/embed/v5EF-UxNteg" title="Rishad Hossain&#39;s 48 Runs Against Sri Lanka  | 3rd ODI | Sri Lanka tour of Bangladesh 2024" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card>
                  <CardContent style={{ padding: "0px !important" }} className="flex  gap-12 items-center text-[25px]">
                    <div>
                      <h3 className="text-[28px] font-[1000] text-[#FFFFFF]">Top Viewed Reels</h3>
                      <p className="text-justify text-[#FFFFFF] tracking-[0.1rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    </div>
                    <div className="">
                      <iframe width="485.67" height="280.39" src="https://www.youtube.com/embed/v5EF-UxNteg" title="Rishad Hossain&#39;s 48 Runs Against Sri Lanka  | 3rd ODI | Sri Lanka tour of Bangladesh 2024" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <div className="absolute -bottom-[110px] right-[40%]">
              <CarouselNext className="w-[83px]" />
            </div>
          </Carousel>
        </article>
      </div>
    </section>
  );
}
