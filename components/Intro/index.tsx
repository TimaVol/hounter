import MapPointer from "@/public/icons/Intro/MapPointer.svg";
import ArrowRight from "@/public/icons/Intro/ArrowRight.svg";
import Image from "next/image";
import travelokaImg from "@/public/images/intro/traveloka.png";
import tiketImg from "@/public/images/intro/tiket.png";
import airbnbImg from "@/public/images/intro/airbnb.png";
import tripadvisorImg from "@/public/images/intro/tripadvisor.png";
import Slider from "./Slider";

export default function Intro() {
  return (
    <div className="container relative mb-[120px] flex justify-between pb-[495px] lg:pb-[115px]">
      <div className="mt-[182px]">
        <h1 className="mb-[24px] max-w-[436px] font-bold text-darkBlue">
          find the place to live
          <span className="IntroTextStroke ml-3 text-transparent">
            Your dreams
          </span>{" "}
          easily here
        </h1>

        <p className="mb-[32px] text-gray-200 lg:max-w-[496px]">
          Everything you need about finding your place to live will be here,
          where it will be easier for you
        </p>

        <div className="mb-[32px] flex items-center rounded-full border border-gray-100 p-[4px] pl-[24px] sm:max-w-max">
          <MapPointer className="mr-[16px] w-[28px] sm:w-auto" />

          <input
            className="w-full self-stretch text-[14px] sm:w-[303px]"
            placeholder="Search for the location you want!"
            type="text"
            name=""
            id=""
          />

          <button className="flex items-center rounded-full border border-transparent bg-darkGreen px-[16px] py-[13px] text-white transition-all hover:border-darkGreen hover:bg-white hover:text-darkGreen">
            <span className="hidden sm:inline-block">Search</span>
            <ArrowRight className="sm:ml-[13px]" />
          </button>
        </div>

        <p className="text-gray-200">Our Partnership</p>

        <div className="flex">
          <Image className="mr-[32px]" src={travelokaImg} alt="logo" />
          <Image className="mr-[32px]" src={tiketImg} alt="logo" />
          <Image className="mr-[32px]" src={airbnbImg} alt="logo" />
          <Image src={tripadvisorImg} alt="logo" />
        </div>
      </div>

      <div className="absolute left-0 right-0 top-[590px] h-1/2 overflow-hidden rounded-bl-[80px] bg-introBg bg-cover lg:left-1/2 lg:top-0 lg:h-full lg:w-[50vw]">
        <Slider />
      </div>
    </div>
  );
}
