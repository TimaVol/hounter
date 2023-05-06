import Slider from "./Slider";

export default function SeeOurReview() {
  return (
    <div className="mb-[120px] overflow-x-hidden pb-[160px] pt-3">
      <div className="container">
        <h5 className="subtitle relative mb-[12px] text-center text-yellow before:absolute before:-top-[8px] before:left-1/2 before:h-[1px] before:w-[32px] before:-translate-x-1/2 before:bg-yellow">
          See Our Review
        </h5>
        <h2 className="mx-auto mb-[40px] text-center text-darkBlue">
          What Our User Say About Us
        </h2>
      </div>

      <Slider />
    </div>
  );
}
