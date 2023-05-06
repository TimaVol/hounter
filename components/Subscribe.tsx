import Email from "@/public/icons/Subscribe/Email.svg";

export default function Subscribe() {
  return (
    <div className="container mb-[120px]">
      <div className="flex h-[166px] flex-col items-center justify-center rounded-[32px] bg-subscribeBg bg-cover bg-center bg-no-repeat py-[65px] sm:bg-contain md:h-[200px] lg:h-[267px] xl:h-[334px] 2xl:h-[399px]">
        <h2 className="mb-[20px] max-w-[424px] text-center text-[15px] text-darkBlue sm:text-[20px] md:text-[23px] lg:mb-[32px] lg:text-[32px] lg:leading-[48px]">
          Subscribe For More Info and update from Hounter
        </h2>
        <form className="flex max-w-max items-center rounded-full bg-white p-[2px] pl-[16px] md:mb-[15px] md:p-[4px] md:pl-[24px] lg:mb-[32px]">
          <Email className="mr-[18px]" />

          <input
            className="h-full w-[140px] text-[12px] sm:w-[303px] lg:text-[14px]"
            placeholder="Your email here"
            type="email"
            name=""
            id=""
          />

          <button
            type="submit"
            className="flex items-center rounded-full border border-transparent bg-darkGreen px-[16px] py-[8px] text-[9px] text-white transition-all hover:border-darkGreen hover:bg-white hover:text-darkGreen sm:text-[14px] lg:py-[13px] lg:text-[16px]"
          >
            Subsribe <span className="ml-1 hidden sm:inline-block">Now</span>
          </button>
        </form>
      </div>
    </div>
  );
}
