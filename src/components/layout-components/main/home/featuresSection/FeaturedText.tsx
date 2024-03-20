export default function FeaturedText({ title, description }: { title: string; description: string }) {
  return (
    <div>
      <div className="text-left">
        <h3 className="text-[2rem] text-[#2A9DF4] uppercase max-w-[20ch]">{title}</h3>
        <p className="tracking-[0.1rem] font-[300]">{description}</p>
      </div>
    </div>
  );
}
