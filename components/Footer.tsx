import Logo from "@/public/icons/Logo.svg";
import Facebook from "@/public/icons/Footer/Facebook.svg";
import Twitter from "@/public/icons/Footer/Twitter.svg";
import Instagram from "@/public/icons/Footer/Instagram.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="overflow-hidden lg:pt-[60px] lg:h-[360px]">
      <footer className="container relative mb-[120px] flex flex-col justify-between gap-y-5 lg:flex-row">
        <div>
          <Logo className="mb-[16px]" />
          <p className="mb-[24px] max-w-[320px] text-[14px] leading-[24px] text-gray-200">
            We provide information about properties such as houses, villas and
            apartments to help people find their dream home
          </p>
          <div className="flex items-center">
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook className="mr-[24px]" />
            </Link>
            <Link href="https://twitter.com/" target="_blank" rel="noreferrer">
              <Twitter className="mr-[24px]" />
            </Link>
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram />
            </Link>
          </div>
        </div>

        <div className="relative z-10 flex flex-wrap gap-y-5">
          <div className="mr-[88px] text-[14px]">
            <h4 className="mb-[24px]">Property</h4>
            <Link className="mb-[18px] text-gray-200" href={"#"}>
              House
            </Link>
            <Link className="mb-[18px] text-gray-200" href={"#"}>
              Apartment
            </Link>
            <Link className="text-gray-200" href={"#"}>
              Villa
            </Link>
          </div>
          <div className="mr-[88px] text-[14px]">
            <h4 className="mb-[24px]">Article</h4>
            <Link className="mb-[18px] text-gray-200" href={"#"}>
              New Article
            </Link>
            <Link className="mb-[18px] text-gray-200" href={"#"}>
              Popular Article
            </Link>
            <Link className="mb-[18px] text-gray-200" href={"#"}>
              Most Read
            </Link>
            <Link className="text-gray-200" href={"#"}>
              Tips & Tricks
            </Link>
          </div>
          <div className="text-[14px]">
            <h4 className="mb-[24px]">Contact</h4>
            <Link className="mb-[18px] text-gray-200" href={"#"}>
              2464 Royal Ln. Mesa, New Jersey 45463
            </Link>
            <Link className="mb-[18px] text-gray-200" href={"#"}>
              (671) 555-0110
            </Link>
            <Link className="text-gray-200" href={"#"}>
              info@hounter.com
            </Link>
          </div>
        </div>

        <div className="absolute top-[400px] h-[323px] w-[741px] sm:right-[-340px] sm:top-[150px] lg:right-[-285px] lg:top-[20px]">
          <div className="absolute left-[180px] top-0 h-[494px] w-[438px] rounded-full bg-[#82BBFF] opacity-30 blur-[60px]"></div>
          <div className="absolute left-0 top-[50px] h-[494px] w-[438px] rounded-full bg-[#B9FF82] opacity-30 blur-[60px]"></div>
        </div>
      </footer>
    </div>
  );
}
