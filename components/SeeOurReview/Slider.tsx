import { Swiper, SwiperSlide } from "swiper/react";
import slideImage1 from "@/public/images/seeOurReview/slide1.png";
import slideUser1 from "@/public/images/girl.png";
import Image from "next/image";
import Star from "@/public/icons/SeeOurReview/Star.svg";
import { Pagination } from "swiper";

const items = [
  {
    image: slideImage1,
    title: "Best! I got the house I wanted through Hounter",
    text: "Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.",
    user: {
      image: slideUser1,
      username: "Dianne Russell",
      location: "Manager Director",
      rate: "4.6",
    },
  },
  {
    image: slideImage1,
    title: "Best! I got the house I wanted through Hounter",
    text: "Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.",
    user: {
      image: slideUser1,
      username: "Dianne Russell",
      location: "Manager Director",
      rate: "4.6",
    },
  },
  {
    image: slideImage1,
    title: "Best! I got the house I wanted through Hounter",
    text: "Through this website I can get a house with the type and specifications I want very easily, without a complicated process to be able to find information on the house we want.",
    user: {
      image: slideUser1,
      username: "Dianne Russell",
      location: "Manager Director",
      rate: "4.6",
    },
  },
];

export default function Slider() {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1.1}
      initialSlide={1}
      centeredSlides
      modules={[Pagination]}
      pagination={{
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      }}
      className="relative left-1/2 -translate-x-1/2 overflow-visible"
      breakpoints={{
        640: {
          spaceBetween: 15,
          slidesPerView: 1.2,
        },
        768: {
          spaceBetween: 26,
          slidesPerView: 1.8,
        },
        1024: {
          spaceBetween: 56,
          slidesPerView: 1.9,
        },
      }}
    >
      {items.map((item, i) => (
        <SwiperSlide key={i} className="relative">
          <Image className="w-full" src={item.image} alt="image of slide" />

          <div className="absolute bottom-[-100px] left-1/2 w-full max-w-[500px] -translate-x-1/2 rounded-[16px] bg-white p-[15px] shadow-md xl:max-w-[646px] xl:p-[32px]">
            <h3 className="mb-[8px] text-[11px] font-semibold text-darkBlue sm:mb-[12px] sm:text-[14px] lg:text-[20px] xl:mb-[16px]">
              {item.title}
            </h3>

            <p className="mb-[12px] text-[10px] leading-normal text-gray-200 sm:text-[12px] sm:leading-[24px] lg:text-[14px] xl:mb-[24px]">
              {item.text}
            </p>

            <div className="flex items-center">
              <Image
                className="mr-[24px] max-w-[30px] sm:max-w-[40px]"
                src={item.user.image}
                alt="user image"
              />
              <div>
                <h5 className="text-[9px] text-black sm:mb-[4px] sm:text-[14px]">
                  {item.user.username}
                </h5>
                <p className="text-[8px] leading-relaxed text-gray-200 sm:text-[11px] lg:text-[14px]">
                  {item.user.location}
                </p>
              </div>
              <div className="ml-auto flex items-center self-end">
                <Star className="mr-[18px] w-[24px]" />

                <h3 className="text-[12px] font-semibold leading-[28px] text-gray-300 sm:text-[24px]">
                  {item.user.rate}
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="swiper-pagination absolute bottom-[-135px] left-1/2 flex -translate-x-1/2 items-center"></div>
    </Swiper>
  );
}
