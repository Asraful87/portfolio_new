import { FunctionComponent } from "react";

export type HeroSectionType = {
  className?: string;
};

const HeroSection: FunctionComponent<HeroSectionType> = ({
  className = "",
}) => {
  return (
    <section
      className={`w-full min-h-screen bg-white font-general-sans-variable ${className}`}
    >
      <div className="container mx-auto px-4 py-8 md:py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Main Heading */}
            <h1 className="text-6xl md:text-7xl lg:text-[77px] leading-tight capitalize font-bagel-fat-one text-black">
              We Take Care Of Your Project
            </h1>

            {/* Subheading */}
            <p className="text-xl text-gray-500 font-medium max-w-lg">
              We care about our work and we care about our clients.
            </p>

            {/* Contact Form */}
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your Email"
                className="flex-1 rounded-[18px] bg-gray-100 border border-gray-400 py-5 px-[18px] text-lg text-darkgray font-medium capitalize"
              />
              <button className="rounded-[51px] bg-mediumslateblue-200 text-white py-5 px-6 text-lg font-medium capitalize whitespace-nowrap">
                Lets Talk
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative mt-8 lg:mt-0">
            <img
              src="/hero_img.png"
              alt="Hero illustration"
              className="lg:w-[400px]  xl:w-full h-auto object-cover "
              width={450}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
