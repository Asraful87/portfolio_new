import { FunctionComponent } from "react";

export type CTABanner1Type = {
  className?: string;
};

const CTABanner1: FunctionComponent<CTABanner1Type> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1440px] relative bg-white h-[700px] overflow-hidden shrink-0 text-left text-5xl text-white font-general-sans-variable ${className}`}
    >
      <div className="absolute top-[122px] left-[calc(50%_-_598px)] w-[1200px] h-[455px]">
        <div className="absolute top-[0px] left-[calc(50%_-_600px)] rounded-37xl bg-gray-200 w-[1200px] h-[455px]" />
        <img
          className="absolute top-[0px] left-[calc(50%_-_600px)] w-[1200px] h-[455px]"
          alt=""
          src="/mask-group.svg"
        />
        <div className="absolute top-[308px] left-[79px] rounded-50xl bg-mediumslateblue-200 flex flex-row items-start justify-start py-4 px-12">
          <div className="relative capitalize font-medium">Start Now</div>
        </div>
        <div className="absolute top-[102px] left-[79px] text-37xl leading-[63px] capitalize font-medium inline-block w-[521px]">
          start your journey with us now
        </div>
        <div className="absolute top-[52px] left-[761px] rounded-[50%] bg-yellow w-[352px] h-[352px]" />
        <img
          className="absolute h-[17.8%] w-[11.25%] top-[41.98%] right-[13%] bottom-[40.22%] left-[75.75%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector.svg"
        />
        <img
          className="absolute h-[20.77%] w-[5.42%] top-[40.66%] right-[25.5%] bottom-[38.57%] left-[69.08%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector1.svg"
        />
      </div>
    </div>
  );
};

export default CTABanner1;
