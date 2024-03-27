import Image from "next/image";

export default function PlayerImage() {
  return (
    <div>
      <figure className="relative">
        <div className="">
          <Image className="w-full h-full lg:max-w-[444px]" width={444} height={226} src={"/assets/home/2player.png"} alt="cricket" />
        </div>
      </figure>
    </div>
  );
}
