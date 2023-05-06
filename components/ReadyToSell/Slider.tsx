import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay } from "swiper";
import Rodal from "rodal";
import { Portal } from "../Portal";
import React, { useState } from "react";
import firstImg from "@/public/images/readyToSell/1.png";
import secondImg from "@/public/images/readyToSell/2.png";
import thirdImg from "@/public/images/readyToSell/3.png";
import SliderItem from "./SliderItem";

export default function Slider() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContentId, setModalContentId] = useState<string>();

  const handleModal = (id: any) => {
    setModalContentId(id);
    setIsModalOpen(!isModalOpen);
  };

  const modalContent = {
    video: (
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/PjUmEhytjos"
        title="FLYING OVER EUROPE (4K UHD) - Relaxing Music Along With Beautiful Nature Videos - 4K Video HD"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    ),
    firstImg: (
      <Image className="h-full w-full" src={firstImg} alt="image of gallery" />
    ),
    secondImg: (
      <Image className="h-full" src={secondImg} alt="image of gallery" />
    ),
    thirdImg: (
      <Image className="h-full" src={thirdImg} alt="image of gallery" />
    ),
  };

  return (
    <>
      <Swiper
        spaceBetween={60}
        slidesPerView={1}
        // autoplay={{ pauseOnMouseEnter: true, delay: 5000 }}
        modules={[Autoplay]}
        allowTouchMove={false}
      >
        <SwiperSlide>
          <SliderItem handleModal={handleModal} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem handleModal={handleModal} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderItem handleModal={handleModal} />
        </SwiperSlide>
      </Swiper>

      <Portal>
        <Rodal
          width={305}
          height={250}
          visible={isModalOpen}
          onClose={handleModal}
          customStyles={{
            padding: 10,
          }}
        >
          <div className="mt-[24px] flex h-[90%] justify-center">
            {modalContent[modalContentId as keyof typeof modalContent]}
          </div>
        </Rodal>
      </Portal>
    </>
  );
}
