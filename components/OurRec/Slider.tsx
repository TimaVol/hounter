import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import { Navigation } from "swiper";

interface Props {
  items: any[];
}

export default function Slider({ items }: Props) {
  const colorVariants = {
    red: "text-darkRed bg-lightRed",
    blue: "text-[#1D4ED8] bg-lightBlue",
    green: "text-[#047857] bg-lightGreen",
  };

  return (
    <Swiper
      spaceBetween={15}
      slidesPerView={1.5}
      modules={[Navigation]}
      allowTouchMove={false}
      navigation={{
        nextEl: "#sliderNext",
        prevEl: "#sliderPrev",
      }}
      className="OurRecSlider"
      breakpoints={{
        640: {
          slidesPerView: 2.5,
          spaceBetween: 20,
        },

        1024: {
          slidesPerView: 3.5,
          spaceBetween: 40,
        },
      }}
    >
      {items.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="relative mb-[24px]">
            <div
              className={`${
                colorVariants[item.status.color as keyof typeof colorVariants]
              } absolute bottom-[16px] left-[16px] flex w-max items-center rounded-full px-[18px] py-[9px]`}
            >
              <div className="mr-[13px]">{item.status.icon}</div>
              <p className="mt-[2px] text-[14px] font-medium leading-normal">
                {item.status.text}
              </p>
            </div>
            <Image src={item.image} alt="image of slider" />
          </div>
          <h3 className="mb-[8px] text-black">{item.title}</h3>
          <p className="mb-[24px] text-gray-300">{item.price}</p>
          <div className="flex flex-col items-start gap-y-5 sm:flex-row sm:items-center">
            <Image
              className="mr-[16px] h-[40px] w-[40px]"
              src={item.user.image}
              alt="user image"
            />

            <div>
              <h4 className="mb-[4px] text-black">{item.user.username}</h4>
              <p className="text-[14px] font-medium text-gray-200">
                {item.user.locatin}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
