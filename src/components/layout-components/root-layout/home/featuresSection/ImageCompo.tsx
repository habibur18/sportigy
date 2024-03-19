import Image from "next/image";

export default function ImageCompo() {
  return (
    <div className="w-[45%] flex justify-center grow-0">
      <figure className="">
        <Image width={244} className="border" height={226} src={"/assets/Home/player2.png"} alt="criket" />
        <Image className="mt-[-155px] ml-[-180px]" width={244} height={226} src={"/assets/Home/player1.png"} alt="criket" />
      </figure>
    </div>
  );
}
