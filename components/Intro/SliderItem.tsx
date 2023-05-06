import { introSliderItem } from "@/helpers/types";
import Image from "next/image";

interface Props {
  data: introSliderItem;
}

export default function SliderItem({ data }: Props) {
  return (
    <div className="flex items-center rounded-[32px] bg-white p-[24px]">
      <Image className="mr-[16px]" src={data.imgSrc} alt="logo" />
      <div className="flex flex-col">
        <span className="mb-[2px] text-[16px] font-medium">{data.title}</span>
        <span className="text-200 text-[12px] font-medium">{data.label}</span>
      </div>
    </div>
  );
}
