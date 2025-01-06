import { FunctionComponent } from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import OurWork from "../components/OurWork";

import Help from "../components/Help";
import Bottom from "../components/Bottom";
import PricingSection from "@/components/PricingSection";
import About from "@/components/About";
import Statitistic from "@/components/Statitistic";

const LandingPage: FunctionComponent = () => {
  return (
    <div className="scroll-smooth relative bg-white w-screen  overflow-x-hidden flex flex-col items-center justify-start  text-45xl text-gray-300 font-general-sans-variable">
      <NavBar />
      <HeroSection />
      <About />
      <Statitistic />
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
