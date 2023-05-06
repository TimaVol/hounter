import Bed from "@/public/icons/ReadyToSell/Bed.svg";
import Bathroom from "@/public/icons/ReadyToSell/Bathroom.svg";
import Car from "@/public/icons/ReadyToSell/Car.svg";
import Floor from "@/public/icons/ReadyToSell/Floor.svg";
import Phone from "@/public/icons/ReadyToSell/Phone.svg";
import girlImg from "@/public/images/girl.png";
import Gallery from "./Gallery";
import Image from "next/image";

interface Props {
  handleModal: (arg: string) => void;
}

export default function SliderItem({ handleModal }: Props) {
  return (
    <div className="flex flex-col items-center justify-between sm:p-[60px] lg:flex-row">
      <div className="mb-4 lg:mb-0">
        <h5 className="subtitle relative mb-[12px] ml-[32px] text-yellow before:absolute before:right-full before:top-1/2 before:mr-[8px] before:h-[1px] before:w-[32px] before:-translate-y-1/2 before:bg-yellow sm:ml-0">
          Ready to Sell!
        </h5>
        <h2 className="mb-[16px] text-darkBlue">
          Let&#8217;s Tour And See Our House!
        </h2>

        <p className="mb-[16px] max-w-[413px] text-gray-200">
          Houses recommended by our partners that have been curated to become
          the home of your dreams!
        </p>

        <h5 className="mb-[16px] text-darkBlue">House Detail</h5>

        <div className="mb-[16px] grid max-w-[400px] grid-cols-2 gap-y-[16px] border-b-2 border-gray-100 pb-[32px]">
          <div className="flex items-center">
            <Bed className="mr-[20px]" />
            <p className="text-gray-300">4 Bedrooms</p>
          </div>
          <div className="flex items-center">
            <Bathroom className="mr-[20px]" />
            <p className="text-gray-300">2 Bathrooms</p>
          </div>
          <div className="flex items-center">
            <Car className="mr-[20px]" />
            <p className="text-gray-300">1 Carport</p>
          </div>
          <div className="flex items-center">
            <Floor className="mr-[20px]" />
            <p className="text-gray-300">2 Floors</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-y-5">
          <Image
            src={girlImg}
            alt="image of girl"
            className="mr-[24px] max-w-[56px]"
          />
          <div className="mr-[56px]">
            <h4 className="text-black">Dianne Russell</h4>
            <p className="text-gray-200">Manager Director</p>
          </div>

          <button className="flex items-center rounded-full border border-transparent bg-darkGreen px-[16px] py-[13px] text-[14px] text-white transition-all hover:border-darkGreen hover:bg-white hover:text-darkGreen">
            <Phone className="mr-[16px]" />
            Contact Now
          </button>
        </div>
      </div>
      <Gallery handleModal={handleModal} />
    </div>
  );
}
