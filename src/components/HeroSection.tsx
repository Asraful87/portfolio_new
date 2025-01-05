import { FunctionComponent } from "react";

export type HeroSectionType = {
  className?: string;
};

const HeroSection: FunctionComponent<HeroSectionType> = ({
  className = "",
}) => {
  return (
    <section
      className={`w-full min-h-screen hero_bg font-general-sans-variable ${className}`}
    >
      <div className="w-full md:container mx-auto px-4 py-8 md:py-16 lg:py-24">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Left Column */}
          <div className="space-y-6 md:space-y-8 w-full md:w-auto">
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-[77px] leading-tight capitalize font-bagel-fat-one text-white text-center md:text-left">
              We Take Care Of Your Project
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-[22px] text-gray-100 font-medium text-center md:text-left">
              We care about our work and we care about our clients.
            </p>

            {/* Contact Form */}
            <div className="w-full md:w-1/2 flex flex-col md:flex-row hero_gradient p-4 md:p-0 h-auto md:h-[145px] justify-center items-center md:items-start gap-4 md:gap-3 rounded-xl md:rounded-r-xl md:rounded-l-full">
              <img
                src="/profile.jpg"
                alt=""
                className="rounded-full w-24 h-24 md:w-36 md:h-36"
              />
              <div className="flex-1 flex flex-col gap-2 md:gap-1 text-center md:text-left">
                <h2 className="text-white text-lg md:text-sm">Hi, I'm Jack</h2>
                <p className="text-sm md:text-[11px] lg:text-[11px] xl:text-[12px] text-white font-bold poppins-bold">
                  Welcome to my portfolio! I specialize in Twitter promotion and
                  marketing, helping projects like yours gain the visibility
                  they deserve. With years of experience in amplifying digital
                  presence, I'm here to transform your vision into a thriving
                  reality. Let's connect and discuss how we can elevate your
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
