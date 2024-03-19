"use client";
import { Lemon } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import arrow from "../../../asset/arrow.svg";
const lemon = Lemon({ weight: "400", subsets: ["latin"] });

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About us",
    path: "/about-us",
  },
  {
    name: "player list",
    path: "/player-list",
    children: [
      {
        name: "add player",
        path: "/add-player",
      },
    ],
  },
  {
    name: "register",
    path: "/register",
    children: [
      {
        name: "login",
        path: "/login",
      },
    ],
  },
  {
    name: "testimonial",
    path: "/testimonial",
  },
  {
    name: "contact us",
    path: "/contact-us",
  },
];
export default function Header() {
  const path = usePathname();
  console.log(path);
  const active = (linkPath: string) => linkPath === path;
  return (
    <header className="flex justify-between container py-5 max-w-[1442px] mx-auto">
      <div>
        <h1 className={lemon.className}>Team Ground</h1>
      </div>
      <div>
        <ul className="flex gap-[40px]">
          {links.map((link) => (
            <li key={link.name}>
              <Link className={` ${active(link.path) ? "text-[#2A9DF4] border-b-2 border-[#2A9DF4]" : "text-[#121212]"} capitalize flex gap-1 font-bold`} href={link.path}>
                {link.name} {link.children && <Image src={arrow} alt="arrow" />}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
