import { FunctionComponent } from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import OurWork from "../components/OurWork";
import CTABanner from "../components/CTABanner";
import CTABanner1 from "../components/CTABanner1";
import Help from "../components/Help";
import Bottom from "../components/Bottom";
import PricingSection from "@/components/PricingSection";
import About from "@/components/About";

const LandingPage: FunctionComponent = () => {
  return (
    <div className="scroll-smooth relative bg-white w-full  overflow-x-hidden flex flex-col items-center justify-start  text-45xl text-gray-300 font-general-sans-variable">
      <NavBar />
      <HeroSection />
      <About />
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
      <PricingSection />
      <img
        src="/banner.png"
        alt="Banner"
        className="w-full md:container mx-auto cover mt-7 rounded-lg"
      />

      <Help />
      <Bottom />
      <footer className="w-full bg-black h-20 text-sm text-white">
        <div className="container mx-auto h-full px-4">
          <div className="h-full flex items-center justify-between">
            {/* Copyright */}
            <div className="font-medium">
              © 2025 Xeno Pulse, Inc. - All Rights Reserved
            </div>

            {/* Links */}
            <div className="flex gap-8 sm:gap-12 font-medium">
              <a
                href="/terms"
                className="hover:text-gray-100 transition-colors text-white no-underline"
              >
                Terms of use
              </a>
              <a
                href="/privacy"
                className="hover:text-gray-100 transition-colors text-white no-underline"
              >
                Privacy policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
