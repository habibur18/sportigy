import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
export default function LiveScore() {
  return (
    <section className="container max-w-[1442px] mx-auto  tracking-[0.1rem]">
      <div className="flex gap-5 items-center ">
        <h3 className="text-[35px] font-[600] -mt-2 ">Live Score: </h3>

        <Carousel className=" max-w-[800px] mx-auto flex items-center justify-center">
          <div>
            <CarouselPrevious />
          </div>
          <CarouselContent>
            <CarouselItem>
              <Card className="flex flex-col items-center justify-center">
                <CardContent style={{ padding: "0px !important" }} className="flex  gap-10 items-center text-[25px]">
                  <div className="flex gap-5 items-center text-[25px]">
                    <h4>Bangladesh:</h4>
                    <p>25/3 (20)</p>
                  </div>
                  <div className="flex gap-1 items-center text-[25px]">
                    <Image src={"/assets/Home/srilanka1.png"} width={36} height={36} alt="arrow" />
                    <h4>Srilanka:</h4>
                    <p>25/3 (20)</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="flex flex-col items-center justify-center">
                <CardContent style={{ padding: "0px !important" }} className="flex  gap-5 items-center text-[25px]">
                  <div className="flex gap-5 items-center text-[25px]">
                    <h4>Bangladesh:</h4>
                    <p>25/3 (20)</p>
                  </div>
                  <div className="flex gap-1 items-center text-[25px]">
                    <Image src={"/assets/Home/srilanka1.png"} width={36} height={36} alt="arrow" />
                    <h4>Srilanka:</h4>
                    <p>25/3 (20)</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="flex flex-col items-center justify-center">
                <CardContent style={{ padding: "0px !important" }} className="flex  gap-5 items-center text-[25px]">
                  <div className="flex gap-5 items-center text-[25px]">
                    <h4>Bangladesh:</h4>
                    <p>25/3 (20)</p>
                  </div>
                  <div className="flex gap-1 items-center text-[25px]">
                    <Image src={"/assets/Home/srilanka1.png"} width={36} height={36} alt="arrow" />
                    <h4>Srilanka:</h4>
                    <p>25/3 (20)</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <div>
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
