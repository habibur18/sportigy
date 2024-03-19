import Image from "next/image";
import bpl from "../../../../asset/Home/1bpl.png";
import bangladesh from "../../../../asset/Home/bangladesh.png";
import ipl from "../../../../asset/Home/ipl.png";

export default function OurPartner() {
  const logos = [
    {
      name: "Bangladesh Premier League",
      logo: bpl,
    },
    {
      name: "Bangladesh",
      logo: bangladesh,
    },
    {
      name: "Indian Premier League",
      logo: ipl,
    },
  ];
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
            <div key={index} className="w-20 h-20 relative">
              <Image src={logos[index % logos.length].logo} alt={logos[index % logos.length].name} layout="fill" objectFit="contain" />
            </div>
          ))}
      </div>
    </section>
  );
}
