import ImageCompo from "./featuresSection/ImageCompo";
import TextCompo from "./featuresSection/TextCompo";

export default function Features() {
  return (
    <section className="container mx-auto my-10">
      <main className="flex justify-between ">
        <ImageCompo />
        <TextCompo />
        <div className="w-[4px] relative bg-[#2A9DF4] h-[400px]">
          <span className="absolute size-4 top-0 translate-y-[-50%] -left-[125%] bg-[#2A9DF4] rounded-full"></span>
          <span className="absolute size-4 bottom-0  -left-[125%] bg-[#2A9DF4] rounded-full"></span>
        </div>
        <TextCompo />
        <ImageCompo />
      </main>
    </section>
  );
}
