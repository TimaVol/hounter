import House from "@/public/icons/OurRec/House.svg";
import Villa from "@/public/icons/OurRec/Villa.svg";
import Apartment from "@/public/icons/OurRec/Apartment.svg";
import ArrowRight from "@/public/icons/OurRec/ArrowRight.svg";
import ArrowLeft from "@/public/icons/OurRec/ArrowLeft.svg";
import Slider from "./Slider";
import slide1 from "@/public/images/ourRec/slide1.png";
import slide2 from "@/public/images/ourRec/slide2.png";
import slide3 from "@/public/images/ourRec/slide3.png";
import slide4 from "@/public/images/ourRec/slide4.png";
import ronald from "@/public/images/ourRec/ronald.png";
import robert from "@/public/images/ourRec/robert.png";
import jenny from "@/public/images/ourRec/jenny.png";
import slideUser1 from "@/public/images/girl.png";
import Fire from "@/public/icons/OurRec/Fire.svg";
import Wallet from "@/public/icons/OurRec/Wallet.svg";
import { useState } from "react";

const items = [
  {
    image: slide1,
    title: "Roselands House",
    price: "$ 35.000.000",
    status: {
      icon: <Fire />,
      text: "Popular",
      color: "red",
    },
    type: "house",
    user: {
      image: slideUser1,
      username: "Dianne Russell",
      locatin: "Manchester, Kentucky",
    },
  },
  {
    image: slide2,
    title: "Woodlandside",
    price: "$ 20.000.000",
    status: {
      icon: <House />,
      text: "New house",
      color: "blue",
    },
    type: "villa",
    user: {
      image: robert,
      username: "Robert Fox",
      locatin: "Dr. San Jose, South Dakota",
    },
  },
  {
    image: slide3,
    title: "The Old Lighthouse",
    price: "$ 44.000.000",
    status: {
      icon: <Wallet />,
      text: "Best Deals",
      color: "green",
    },
    type: "apartment",
    user: {
      image: ronald,
      username: "Ronald Richards",
      locatin: "Santa Ana, Illinois",
    },
  },
  {
    image: slide4,
    title: "Cosmo's House",
    price: "$ 22.000.000",
    status: {
      icon: <Fire />,
      text: "Popular",
      color: "red",
    },
    type: "house",
    user: {
      image: jenny,
      username: "Jenny Wilson",
      locatin: "Preston Rd. Inglewood, Maine 98380",
    },
  },
  {
    image: slide1,
    title: "Roselands House",
    price: "$ 35.000.000",
    status: {
      icon: <Fire />,
      text: "Popular",
      color: "red",
    },
    type: "house",
    user: {
      image: slideUser1,
      username: "Dianne Russell",
      locatin: "Manchester, Kentucky",
    },
  },
  {
    image: slide2,
    title: "Woodlandside",
    price: "$ 20.000.000",
    status: {
      icon: <House />,
      text: "New house",
      color: "blue",
    },
    type: "villa",
    user: {
      image: robert,
      username: "Robert Fox",
      locatin: "Dr. San Jose, South Dakota",
    },
  },
  {
    image: slide3,
    title: "The Old Lighthouse",
    price: "$ 44.000.000",
    status: {
      icon: <Wallet />,
      text: "Best Deals",
      color: "green",
    },
    type: "apartment",
    user: {
      image: ronald,
      username: "Ronald Richards",
      locatin: "Santa Ana, Illinois",
    },
  },
  {
    image: slide4,
    title: "Cosmo's House",
    price: "$ 22.000.000",
    status: {
      icon: <Fire />,
      text: "Popular",
      color: "red",
    },
    type: "house",
    user: {
      image: jenny,
      username: "Jenny Wilson",
      locatin: "Preston Rd. Inglewood, Maine 98380",
    },
  },
  {
    image: slide4,
    title: "Cosmo's House",
    price: "$ 22.000.000",
    status: {
      icon: <Fire />,
      text: "Popular",
      color: "red",
    },
    type: "house",
    user: {
      image: jenny,
      username: "Jenny Wilson",
      locatin: "Preston Rd. Inglewood, Maine 98380",
    },
  },
];

export default function OurRec() {
  const [filterBy, setFilterBy] = useState("");

  return (
    <div className="container mb-[120px] pr-0">
      <div className="mb-[40px] flex flex-wrap items-end justify-between gap-y-5">
        <div>
          <h5 className="subtitle relative mb-[12px] ml-[32px] text-yellow before:absolute before:right-full before:top-1/2 before:mr-[8px] before:h-[1px] before:w-[32px] before:-translate-y-1/2  before:bg-yellow sm:ml-0">
            Our Recommendation
          </h5>
          <h2 className="text-darkBlue">Featured House</h2>
        </div>

        <div className="flex flex-wrap gap-y-5">
          <button
            onClick={() => setFilterBy("house")}
            className="mr-[32px] flex items-center rounded-full border border-gray-100 px-[24px] py-[14px] text-gray-200 transition-all hover:border-transparent hover:bg-lightGreen hover:text-darkGreen"
          >
            <House className="mr-[8px]" />
            House
          </button>
          <button
            onClick={() => setFilterBy("villa")}
            className="mr-[32px] flex items-center rounded-full border border-gray-100 px-[24px] py-[14px] text-gray-200 transition-all hover:border-transparent hover:bg-lightGreen hover:text-darkGreen"
          >
            <Villa className="mr-[8px]" />
            Villa
          </button>
          <button
            onClick={() => setFilterBy("apartment")}
            className="flex items-center rounded-full border border-gray-100 px-[24px] py-[14px] text-gray-200 transition-all hover:border-transparent hover:bg-lightGreen hover:text-darkGreen"
          >
            <Apartment className="mr-[8px]" />
            Apartment
          </button>
        </div>

        <div className="flex">
          <button
            id="sliderPrev"
            className="mr-[16px] rounded-[32px] bg-gray-100 px-[26px] py-[18px] text-gray-300 transition-all hover:bg-darkGreen hover:text-white"
          >
            <ArrowLeft />
          </button>
          <button
            id="sliderNext"
            className="rounded-[32px] bg-gray-100 px-[26px] py-[18px] text-gray-300 transition-all hover:bg-darkGreen hover:text-white"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
      <div className="relative">
        <Slider
          items={items.filter((item) =>
            filterBy === "" ? true : item.type === filterBy
          )}
        />
      </div>
    </div>
  );
}
