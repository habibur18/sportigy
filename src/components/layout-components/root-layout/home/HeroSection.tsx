import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="py-[85px] flex justify-center items-center">
      <article>
        <div>
          <h1>Team Ground</h1>
          <p> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div>
          <Link className="py-[30px] px-[13px] font-extrabold text-[#FFFFFF]" href="/player-registration">
            Player Registration
          </Link>
          <Link href="/club-registration">Club Registration</Link>
          <Link href="/search-player">Search Our Players</Link>
        </div>
      </article>
    </section>
  );
}
