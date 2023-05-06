import Image from "next/image";
import firstImg from "@/public/images/readyToSell/1.png";
import secondImg from "@/public/images/readyToSell/2.png";
import thirdImg from "@/public/images/readyToSell/3.png";
import videoPreviewImg from "@/public/images/readyToSell/videoPreview.png";
import Play from "@/public/icons/ReadyToSell/Play.svg";

interface Props {
  handleModal: (arg: string) => void;
}

export default function Gallery({ handleModal }: Props) {
  return (
    <div className="relative z-10">
      <Play
        onClick={() => {
          handleModal("video");
        }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
      />
      <Image
        src={videoPreviewImg}
        alt="video preview"
        className="max-w-[260px] sm:max-w-[400px] xl:max-w-[488px]"
      />
      <div className="absolute bottom-0 left-[-20px] flex items-end xl:bottom-[-40px] xl:left-[-40px]">
        <Image
          onClick={() => {
            handleModal("firstImg");
          }}
          className="mr-[12px] max-w-[130px] cursor-pointer sm:max-w-[200px] xl:max-w-[296px]"
          src={firstImg}
          alt="image of gallery"
        />
        <Image
          onClick={() => {
            handleModal("secondImg");
          }}
          className="mr-[8px] max-w-[60px] cursor-pointer sm:max-w-[70px] xl:max-w-[96px]"
          src={secondImg}
          alt="image of gallery"
        />
        <Image
          onClick={() => {
            handleModal("thirdImg");
          }}
          className="max-w-[60px] cursor-pointer sm:max-w-[70px] xl:max-w-[96px]"
          src={thirdImg}
          alt="image of gallery"
        />
      </div>
    </div>
  );
}
