import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import "../../../styles/home/footer.css";
export default function Footer() {
  return (
    <footer className="bg-black">
      <div style={{ clipPath: "polygon(0 20%, 100% 0, 100% 100%, 0% 100%)" }} id="footer" className="footer pt-[97px] pb-[67px] text-[#FFFFFF] bg-[#2A9DF4]  ">
        <div className="container mx-auto">
          <main className="flex gap-10 justify-between">
            <div className="self-center flex flex-col items-center">
              <Image className="mb-5" width={40} height={40} quality={100} src={"/assets/Home/bar.svg"} alt="bar" />
              <Image width={62} height={20} quality={100} src={"/assets/Home/SiteLogo.png"} alt="logo"></Image>
            </div>
            <div>
              <h3 className="text-[18px] font-bold mb-[16px]">Contact Us</h3>
              <div className="flex gap-[13px]">
                <div>
                  <Image width={24} height={24} quality={100} src={"/assets/Home/location.png"} className="object-contain" alt="bar" />
                </div>
                <p>
                  Wisconsin Ave, Suite 700 <br />
                  Chevy Chase, Maryland 20815
                </p>
              </div>
              <div className="flex gap-[13px] mt-[19px]">
                <div>
                  <Image width={24} height={24} quality={100} src={"/assets/Home/email.png"} className="object-contain" alt="bar" />
                </div>
                <p>support@figma.com</p>
              </div>
            </div>

            <div className="space-y-[24px] ">
              <Link className="block" href="/about-us">
                About
              </Link>
              <Link className="block" href="/features">
                Features
              </Link>
              <Link className="block" href="/pricing">
                Pricing
              </Link>
              <Link className="block" href="/gallery">
                Gallery
              </Link>
              <Link className="block" href="/team">
                Team
              </Link>
            </div>
            <div>
              <h3 className="text-[18px] font-bold mb-[16px]">Subscribe</h3>
              <div>
                <input type="text" placeholder="Email" className="w-full h-[30px] pl-2 mb-[16px] rounded-[5px] lg:max-w-[235px]" />
                <Button variant="secondary" className="w-full max-w-[235px] py-2 h-[30px] bg-[#0A84FF] hover:bg-[#0A84FF]/60 text-[#FFFFFF]">
                  Subscribe
                </Button>
              </div>
              <div className="mt-8">
                <h3 className="mb-4">Follow us</h3>
                <div className="flex gap-4">
                  <Image width={24} height={24} src={"/assets/Home/facebook.png"} className="object-contain" alt="bar" />
                  <Image width={24} height={24} src={"/assets/Home/telegram.png"} className="object-contain" alt="bar" />
                  <Image width={24} height={24} src={"/assets/Home/instagram.png"} className="object-contain" alt="bar" />
                  <Image width={24} height={24} src={"/assets/Home/figma.png"} className="object-contain" alt="bar" />
                </div>
              </div>
            </div>
          </main>
          <div className="flex justify-between mt-10">
            <p className="text-[#FFFFFF]">© {new Date().getFullYear()} All Rights Reserved</p>
            <div className="flex gap-10 text-[#7B7E86] text-sm">
              <Link href={"/privacy-policy"} className=" block">
                Privacy Policy
              </Link>
              <Link href={"/terms-of-use"} className=" block">
                Terms of Use
              </Link>
              <Link href={"/sales-and-refunds"} className=" block">
                Sales and Refunds
              </Link>
              <Link href={"/legal"} className=" block">
                Legal
              </Link>
              <Link href={"/site-map"} className=" block">
                Site Map
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
