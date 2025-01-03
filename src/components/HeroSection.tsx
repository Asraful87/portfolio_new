import { FunctionComponent } from "react";

export type HeroSectionType = {
  className?: string;
};

const HeroSection: FunctionComponent<HeroSectionType> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[1440px] relative bg-white h-[941px] overflow-hidden shrink-0 text-left text-xl text-gray-500 font-general-sans-variable ${className}`}
    >
      <div className="absolute top-[96px] left-[32px] w-[1375px] flex flex-row items-center justify-start gap-[72px]">
        <div className="flex flex-col items-start justify-start gap-11">
          <div className="flex flex-col items-start justify-start">
            <div className="w-[508px] relative leading-[32px] font-medium inline-block">
              We care about our work and we care about our clients.
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-3 text-lg text-darkgray">
            <div className="w-[339px] rounded-18xl bg-gray-100 border-gray-400 border-[1px] border-solid box-border flex flex-row items-center justify-start py-5 px-[18px]">
              <div className="relative capitalize font-medium">
                Enter your Email
              </div>
            </div>
            <div className="w-[146px] rounded-51xl bg-mediumslateblue-200 h-16 flex flex-row items-center justify-center py-5 px-6 box-border text-white">
              <div className="relative leading-[20px] capitalize font-medium">
                Lets Talk
              </div>
            </div>
          </div>
        </div>
        <div className="w-[643px] relative h-[681px]">
          <img
            className="absolute top-[19px] left-[26px] rounded-100xl-5 w-[202px] h-[202px] object-cover"
            alt=""
            src="/rectangle-196@2x.png"
          />
          <img
            className="absolute top-[441px] left-[248px] rounded-100xl-5 w-[184px] h-60 object-cover"
            alt=""
            src="/rectangle-204@2x.png"
          />
          <img
            className="absolute top-[221px] left-[460px] rounded-100xl-5 w-[183px] h-60 object-cover"
            alt=""
            src="/rectangle-205@2x.png"
          />
          <img
            className="absolute top-[0px] left-[248px] rounded-100xl-5 w-[241px] h-60 object-cover"
            alt=""
            src="/rectangle-200@2x.png"
          />
          <img
            className="absolute top-[255px] left-[26px] rounded-100xl-5 w-[209px] h-[182px] object-cover"
            alt=""
            src="/rectangle-201@2x.png"
          />
          <img
            className="absolute top-[255px] left-[263px] rounded-100xl-5 w-[175px] h-[173px] object-cover"
            alt=""
            src="/rectangle-202@2x.png"
          />
          <img
            className="absolute top-[441px] left-[0px] rounded-[50%] w-[241px] h-60 object-cover"
            alt=""
            src="/ellipse-84@2x.png"
          />
        </div>
      </div>
      <div className="absolute top-[14px] left-[23px] text-77xl leading-[98.5px] capitalize font-bagel-fat-one text-black inline-block w-[559px] h-[313px]">
        We Take Care Of Your Project
      </div>
    </div>
  );
};

export default HeroSection;
