import { FunctionComponent } from "react";

export type HeroSectionType = {
  className?: string;
};

const HeroSection: FunctionComponent<HeroSectionType> = ({
  className = "",
}) => {
  return (
    <section
      className={`w-full h-screen hero_bg font-general-sans-variable ${className}`}
    >
      <div className="container mx-auto px-4 py-8 md:py-16 lg:py-24">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Main Heading */}
            <h1 className="text-6xl md:text-7xl lg:text-[77px] leading-tight capitalize font-bagel-fat-one text-white">
              We Take Care Of Your Project
            </h1>

            {/* Subheading */}
            <p className="text-[22px] text-gray-100 font-medium ">
              We care about our work and we care about our clients.
            </p>

            {/* Contact Form */}
            <div className="w-1/2 flex hero_gradient  h-[145px]  justify-center gap-3 rounded-r-xl rounded-l-full">
              <img src="/profile.jpg" alt="" className="rounded-full size-36" />
              <div className="flex-1 flex flex-col gap-1 ">
                <h2 className="text-white text-sm">Hi, I’m Jack</h2>
                <p className="lg:text-[11px] xl:text-[12px] text-white font-bold poppins-bold">
                  Welcome to my portfolio! I specialize in Twitter promotion and
                  marketing, helping projects like yours gain the visibility
                  they deserve. With years of experience in amplifying digital
                  presence, I’m here to transform your vision into a thriving
                  reality. Let’s connect and discuss how we can elevate your
                  project to new heights.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
