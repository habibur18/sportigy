import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";

const players = [
  {
    id: 1,
    name: "Asif",
    image: "/assets/Home/player/asif.png",
  },
  {
    id: 2,
    name: "Ryans",
    image: "/assets/Home/player/ryans.png",
  },
  {
    id: 3,
    name: "Tamim",
    image: "/assets/Home/player/tamim.png",
  },
  {
    id: 4,
    name: "Sakib",
    image: "/assets/Home/player/sakib.png",
  },
  {
    id: 5,
    name: "Testing 1",
    image: "/assets/Home/player/sakib.png",
  },
  {
    id: 6,
    name: "Testing 2",
    image: "/assets/Home/player/sakib.png",
  },
  {
    id: 7,
    name: "Testing 3",
    image: "/assets/Home/player/sakib.png",
  },
];
export function FeaturesPlayer() {
  return (
    <section>
      <div className="text-center">
        <h1 className="font-[900] text-4xl text-[#121212] mb-[50px] tracking-[0.1rem]">FEATURED PLAYERS</h1>
      </div>
      <main className="relative flex justify-center">
        <Carousel className="w-full">
          <CarouselContent className="cursor-pointer">
            {players.map((player) => (
              <CarouselItem key={player.id} className="md:basis-1/2 lg:basis-1/4">
                <div className="">
                  {/* <Card>
                    <CardContent>
                      <div className="relative ">
                        <figure>
                          <Image src={player.image} className="w-full" width={700} height={404} alt="feature player" />
                        </figure>
                        <div className=" text-center text-[#FFFFFF] text-[1.25rem]  absolute bottom-0 left-0 right-0">
                          <p style={{ background: "linear-gradient(180deg, rgba(42, 157, 244, 0.8) 0%, rgba(18, 18, 18, 0.8) 100%)" }} className="gradient px-[43px] py-[22px]">
                            View {player.name}&apos;s Full Profile
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card> */}
                  <div className="relative ">
                    <figure>
                      <Image src={player.image} className="w-full" width={700} height={404} alt="feature player" />
                    </figure>
                    <div className=" text-center text-[#FFFFFF] text-[1.25rem]  absolute bottom-0 left-0 right-0">
                      <p style={{ background: "linear-gradient(180deg, rgba(42, 157, 244, 0.8) 0%, rgba(18, 18, 18, 0.8) 100%)" }} className="gradient px-[43px] py-[22px]">
                        View {player.name}&apos;s Full Profile
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute -bottom-10 left-[45%]">
            <CarouselPrevious className="w-[83px]" />
          </div>
          <div className="absolute -bottom-10 right-[45%]">
            <CarouselNext className="w-[83px]" />
          </div>
        </Carousel>
      </main>
    </section>
  );
}
