import Link from "next/link";
import ArrowDown from "@/public/icons/Header/ArrowDown.svg";

export default function Burger() {
  return (
    <div className="juctify-center flex flex-col items-center">
      <Link
        href={"#"}
        className="mb-2 flex w-max items-center rounded-full border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.1)] px-[16px] py-[8px] transition-all hover:bg-white hover:text-gray-200"
      >
        About Us
      </Link>
      <Link
        href={"#"}
        className="mb-2 flex w-max items-center rounded-full border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.1)] px-[16px] py-[8px] transition-all hover:bg-white hover:text-gray-200"
      >
        Article
      </Link>
      <div className="relative">
        <Link
          href={"#"}
          className="peer mb-2 flex w-max items-center rounded-full border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.1)] px-[16px] py-[8px] transition-all hover:bg-white hover:text-gray-200"
        >
          Property <ArrowDown className="ml-[14px]" />
        </Link>
        <div className="invisible absolute mt-0 w-max rounded-lg border bg-white p-4 opacity-0 transition-all hover:visible hover:opacity-100 peer-hover:visible peer-hover:opacity-100">
          <Link className="mb-3 transition-all hover:text-gray-200" href={"#"}>
            House
          </Link>
          <Link className="mb-3 transition-all hover:text-gray-200" href={"#"}>
            Villa
          </Link>
          <Link className="transition-all hover:text-gray-200 " href={"#"}>
            Apartment
          </Link>
        </div>
      </div>
      <Link
        href={"#"}
        className="flex w-max items-center rounded-full bg-lightGreen px-[24px] py-[12px] text-[#047857] transition-all hover:bg-darkGreen hover:text-lightGreen"
      >
        Sign Up!
      </Link>
    </div>
  );
}
