import Slider from "./Slider";

export default function ReadyToSell() {
  return (
    <div className="container relative mb-[120px]">
      <Slider />
      <div className="absolute right-[-500px] top-[-200px] h-[523px] w-[741px]">
        <div className="absolute left-[100px] top-[100px] h-[494px] w-[438px] rounded-full bg-[#FFFA82] opacity-30 blur-[60px]"></div>
        <div className="absolute left-0 top-0 h-[494px] w-[438px] rounded-full bg-[#FF9882] opacity-30 blur-[60px]"></div>
      </div>
    </div>
  );
}
