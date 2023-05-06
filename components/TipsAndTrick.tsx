import firstImg from "@/public/images/tipsAndTrick/1.png";
import fourthImg from "@/public/images/tipsAndTrick/4.png";
import Image from "next/image";
import girlImg from "@/public/images/girl.png";
import Time from "@/public/icons/TipsAndTrick/Time.svg";

export default function TipsAndTrick() {
  return (
    <div className="container relative mb-[120px]">
      <h5 className="subtitle relative mb-[12px] text-center text-yellow before:absolute before:-top-[8px] before:left-1/2 before:h-[1px] before:w-[32px] before:-translate-x-1/2 before:bg-yellow">
        See tips and trick from our partnership
      </h5>
      <h2 className="mx-auto mb-[24px] max-w-[422px] text-center text-darkBlue">
        Find out more about selling and buying homes
      </h2>

      <button className="mx-auto mb-[40px] flex items-center rounded-full border border-transparent bg-darkGreen px-[16px] py-[13px] text-white transition-all hover:border-darkGreen hover:bg-white hover:text-darkGreen">
        More Artikel
      </button>

      <div className="relative z-10 flex flex-col-reverse justify-between lg:flex-row">
        <div className="lg:mr-[30px] xl:mr-[68px]">
          <div className="mb-[42px] flex flex-wrap sm:flex-nowrap">
            <Image
              src={firstImg}
              alt="first post"
              className="mb-5 mr-5 max-w-[200px] sm:mb-0 sm:mr-[32px]"
            />
            <div>
              <div className="mb-[12px] flex items-center">
                <Image
                  src={girlImg}
                  alt="ava"
                  className="mr-[16px] max-w-[32px]"
                />
                <h5 className="subtitle text-gray-300">Dianne Russell</h5>
              </div>

              <h4 className="mb-[16px] max-w-[328px] leading-[32px] text-darkBlue">
                The things we need to check when we want to buy a house
              </h4>

              <div className="flex items-center">
                <Time className="mr-[12px]" />
                <p className="text-[14px] text-gray-200">
                  4 min read | 25 Apr 2021
                </p>
              </div>
            </div>
          </div>
          <div className="mb-[42px] flex flex-wrap sm:flex-nowrap">
            <Image
              src={firstImg}
              alt="first post"
              className="mb-5 mr-5 max-w-[200px] sm:mb-0 sm:mr-[32px]"
            />
            <div>
              <div className="mb-[12px] flex items-center">
                <Image
                  src={girlImg}
                  alt="ava"
                  className="mr-[16px] max-w-[32px]"
                />
                <h5 className="subtitle text-gray-300">Dianne Russell</h5>
              </div>

              <h4 className="mb-[16px] max-w-[328px] leading-[32px] text-darkBlue">
                The things we need to check when we want to buy a house
              </h4>

              <div className="flex items-center">
                <Time className="mr-[12px]" />
                <p className="text-[14px] text-gray-200">
                  4 min read | 25 Apr 2021
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap sm:flex-nowrap">
            <Image
              src={firstImg}
              alt="first post"
              className="mb-5 mr-5 max-w-[200px] sm:mb-0 sm:mr-[32px]"
            />
            <div>
              <div className="mb-[12px] flex items-center">
                <Image
                  src={girlImg}
                  alt="ava"
                  className="mr-[16px] max-w-[32px]"
                />
                <h5 className="subtitle text-gray-300">Dianne Russell</h5>
              </div>

              <h4 className="mb-[16px] max-w-[328px] leading-[32px] text-darkBlue">
                The things we need to check when we want to buy a house
              </h4>

              <div className="flex items-center">
                <Time className="mr-[12px]" />
                <p className="text-[14px] text-gray-200">
                  4 min read | 25 Apr 2021
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-[20px] lg:mb-0 lg:max-w-[400px] xl:max-w-[560px]">
          <Image src={fourthImg} alt="post" className="mb-[24px]" />
          <div className="mb-[12px] flex items-center">
            <Image src={girlImg} alt="ava" className="mr-[16px] max-w-[32px]" />
            <h5 className="subtitle text-gray-300">Dianne Russell</h5>
          </div>

          <h3 className="mb-[16px] leading-[32px] text-darkBlue">
            The things we need to check when we want to buy a house
          </h3>

          <p className="mb-[16px] text-[14px] text-gray-200">
            Want to buy a house but are unsure about what we should know, here I
            will try to explain what we should know and check when we want to
            buy a house
          </p>

          <div className="flex items-center">
            <Time className="mr-[12px]" />
            <p className="text-[14px] text-gray-200">
              4 min read | 25 Apr 2021
            </p>
          </div>
        </div>
      </div>

      <div className="absolute left-[-200px] top-[-60px] h-[523px] w-[741px]">
        <div className="absolute left-0 top-0 h-[494px] w-[438px] rounded-full bg-[#82FFE8] opacity-30 blur-[60px]"></div>
        <div className="absolute left-0 top-[150px] h-[494px] w-[438px] rounded-full bg-[#C8FF82] opacity-30 blur-[60px]"></div>
      </div>
    </div>
  );
}
