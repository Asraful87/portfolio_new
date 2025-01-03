import { FunctionComponent } from "react";

export type CTABannerType = {
  className?: string;
};

const CTABanner: FunctionComponent<CTABannerType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1440px] relative h-[573px] overflow-hidden shrink-0 text-left text-45xl text-white font-general-sans-variable ${className}`}
    >
      <div className="absolute top-[100px] left-[calc(50%_-_600px)] rounded-13xl bg-mediumslateblue-100 w-[1200px] h-[371px] overflow-hidden">
        <img
          className="absolute top-[-44px] left-[-399.5px] w-[1144.8px] h-[463.7px]"
          alt=""
          src="/group-584.svg"
        />
        <div className="absolute top-[calc(50%_-_94.5px)] left-[calc(50%_-_526px)] tracking-[-1px] leading-[87px] capitalize font-medium inline-block w-[393px]">
          Elevate your brand Today!
        </div>
        <div className="absolute top-[calc(50%_-_87.5px)] left-[660px] flex flex-col items-start justify-start gap-8 text-xl">
          <div className="w-[483px] relative leading-[40px] font-medium inline-block">
            Ready to transform your digital dresence? Let's create magic
            together! book our services now!
          </div>
          <div className="rounded-45xl bg-white flex flex-row items-start justify-start py-4 px-12 text-5xl text-black">
            <div className="relative capitalize font-medium">Book Call</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTABanner;
