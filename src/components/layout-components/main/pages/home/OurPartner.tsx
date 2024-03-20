import Image from "next/image";

const logos = [
  {
    name: "Bangladesh Premier League",
    logo: "/assets/Home/1bpl.png",
  },
  {
    name: "Bangladesh",
    logo: "/assets/Home/bangladesh.png",
  },
  {
    name: "Indian Premier League",
    logo: "/assets/Home/ipl.png",
  },
];
export default function OurPartner() {
  return (
    <section
      style={{
        boxShadow: "0px 5px 15px 0px rgba(0, 0, 0, 0.35)",
        background: "rgb(255, 255, 255)",
      }}
    >
      <div className="flex gap-5 container mx-auto py-[27px] justify-between">
        {Array(6)
          .fill(null)
          .map((_, index) => (
            <div key={index} className="relative">
              <div>
                <Image src={logos[index % logos.length].logo} alt={logos[index % logos.length].name} width={70} height={70} className="object-contain" />
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
