import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "@/public/images/intro/slide1.png";
import slide2 from "@/public/images/intro/slide2.png";
import slide3 from "@/public/images/intro/slide3.png";
import SliderItem from "./SliderItem";
import { introSliderItem } from "@/helpers/types";
import { Autoplay } from "swiper";

const introSldies: introSliderItem[] = [
  {
    title: "1K+ People",
    label: "Successfully Getting Home",
    imgSrc: slide1,
  },
  {
    title: "56 Houses",
    label: "Sold Monthly",
    imgSrc: slide2,
  },
  {
    title: "4K+",
    label: "People Looking for New Homes",
    imgSrc: slide3,
  },
  {
    title: "1K+ People",
    label: "Successfully Getting Home",
    imgSrc: slide1,
  },
  {
    title: "56 Houses",
    label: "Sold Monthly",
    imgSrc: slide2,
  },
];

export default function Slider() {
  return (
    <Swiper
      spaceBetween={16}
      autoplay
      slidesPerView={4}
      modules={[Autoplay]}
      allowTouchMove={false}
      className="absolute bottom-[48px] px-[48px]"
    >
      {introSldies.map((el, i) => {
        return (
          <SwiperSlide key={i} className="w-max">
            <SliderItem data={el} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
