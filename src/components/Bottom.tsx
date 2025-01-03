import { FunctionComponent } from "react";

export type BottomType = {
  className?: string;
};

const Bottom: FunctionComponent<BottomType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1440px] relative bg-gray-100 h-[392px] overflow-hidden shrink-0 text-left text-base text-black font-general-sans-variable ${className}`}
    >
      <div className="absolute top-[86px] left-[734px] flex flex-row items-start justify-start gap-[75px]">
        <div className="flex flex-col items-start justify-start gap-12">
          <div className="relative leading-[20px] font-medium">
            Work With Us
          </div>
          <div className="relative leading-[20px] font-medium">
            Advertise With Us
          </div>
          <div className="relative leading-[20px] font-medium">Support Us</div>
          <div className="relative leading-[20px] font-medium">
            Business Advices
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-12">
          <div className="relative leading-[20px] font-medium">About Us</div>
          <div className="relative leading-[20px] font-medium">FAQs</div>
          <div className="relative leading-[20px] font-medium">
            Report a Bug
          </div>
        </div>
      </div>
      <div className="absolute top-[258px] left-[120px] rounded-50xl bg-mediumslateblue-200 w-[217px] flex flex-row items-center justify-center py-4 px-12 box-border text-5xl text-white">
        <div className="relative capitalize font-medium">Contact Us</div>
      </div>
      <div className="absolute top-[160px] left-[139px] flex flex-row items-start justify-start gap-[47px]">
        <img
          className="w-7 relative h-7 overflow-hidden shrink-0"
          alt=""
          src="/riinstagramfill.svg"
        />
        <img
          className="w-7 relative h-7 overflow-hidden shrink-0"
          alt=""
          src="/bitwitter.svg"
        />
        <img
          className="w-7 relative h-7 overflow-hidden shrink-0"
          alt=""
          src="/icbaselinefacebook.svg"
        />
      </div>
      <div className="absolute top-[62px] left-[127px] w-[186.6px] h-[42px] text-17xl-6 font-helvetica">
        <b className="absolute top-[0px] left-[46.6px] tracking-[-2.59px] capitalize">
          Embrace
        </b>
        <div className="absolute top-[9.1px] left-[0px] rounded-[50%] bg-mediumslateblue-200 w-[24.6px] h-[24.6px]" />
        <img
          className="absolute top-[7.8px] left-[23.3px] rounded-11xs-3 w-[23.3px] h-[27.2px] object-contain"
          alt=""
          src="/polygon-11.svg"
        />
      </div>
    </div>
  );
};

export default Bottom;
