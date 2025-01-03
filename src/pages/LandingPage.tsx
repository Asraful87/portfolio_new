import { FunctionComponent } from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import OurWork from "../components/OurWork";
import CTABanner from "../components/CTABanner";
import CTABanner1 from "../components/CTABanner1";
import Help from "../components/Help";
import Bottom from "../components/Bottom";

const LandingPage: FunctionComponent = () => {
  return (
    <div className="relative bg-white w-full h-[6791px] overflow-x-hidden flex flex-col items-center justify-start  text-45xl text-gray-300 font-general-sans-variable">
      <NavBar />
      <HeroSection />
      <div className="w-[1468px] relative h-[1136px] overflow-hidden shrink-0 bg-[url('/public/partners@3x.png')] bg-cover bg-no-repeat bg-[top]">
        <div className="absolute top-[369px] left-[120px] w-[1200px] h-12" />
      </div>
      <div className="w-[1440px] relative h-[536px] overflow-hidden shrink-0">
        <div className="absolute top-[137px] left-[121px] flex flex-col items-start justify-start">
          <div className="relative capitalize font-semibold">245%</div>
          <div className="w-[215px] relative text-base leading-[24px] font-medium text-gray-500 inline-block">
            More revenues for the brand
          </div>
        </div>
        <div className="absolute top-[138px] left-[425px] flex flex-col items-start justify-start">
          <div className="relative capitalize font-semibold">130K+</div>
          <div className="w-[155px] relative text-base leading-[24px] font-medium text-gray-500 inline-block">{`Audiences reached `}</div>
        </div>
        <div className="absolute top-[289px] left-[121px] flex flex-col items-start justify-start">
          <div className="relative capitalize font-semibold">50+</div>
          <div className="w-[155px] relative text-base leading-[24px] font-medium text-gray-500 inline-block">
            <span className="capitalize">b</span>rands trust us
          </div>
        </div>
        <div className="absolute top-[289px] left-[425px] flex flex-col items-start justify-start">
          <div className="relative capitalize font-semibold">24+</div>
          <div className="w-[169px] relative text-base leading-[24px] capitalize font-medium text-gray-500 inline-block">
            Worldwide awards
          </div>
        </div>
        <div className="absolute top-[137px] left-[730px] flex flex-col items-start justify-start gap-5 text-black">
          <div className="w-[502px] relative tracking-[-1px] capitalize font-medium inline-block">
            commitments
          </div>
          <div className="w-[576px] relative text-lg leading-[32px] font-medium text-gray-500 inline-block">
            We are committed to working with you collaboratively to understand
            your goals and create a strategy that will achieve them.
          </div>
        </div>
      </div>
      <HowItWorks />
      <OurWork />
      <CTABanner />
      <CTABanner1 />
      <Help />
      <Bottom />
      <div className="w-[1468px] relative bg-black h-[119px] overflow-hidden shrink-0 text-sm text-white">
        <div className="absolute top-[50px] left-[100px] leading-[20px] font-medium">
          © 2022 Embrace, Inc. - All Rights Reserved
        </div>
        <div className="absolute top-[50px] left-[1043px] flex flex-row items-start justify-start gap-[125px]">
          <div className="relative leading-[20px] font-medium whitespace-pre-wrap">{`Terms of use   `}</div>
          <div className="relative leading-[20px] font-medium">{`Privacy policy `}</div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
