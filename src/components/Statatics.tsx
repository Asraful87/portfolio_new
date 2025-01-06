const Statistics = () => {
  return (
    <div className="w-full min-h-[500px] md:container px-4">
      <div className="flex flex-col items-center justify-around md:flex-row gap-8 md:gap-16">
        {/* Left and middle stats columns */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          {/* Left column */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col items-start">
              <p className="font-semibold text-[42px] leading-tight">245%</p>
              <p className="text-base text-gray-500 font-medium">
                More revenues for the brand
              </p>
            </div>
            <div className="flex flex-col items-start">
              <p className="font-semibold text-[42px] leading-tight">50+</p>
              <p className="text-base text-gray-500 font-medium">
                Brands trust us
              </p>
            </div>
          </div>

          {/* Middle column */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col items-start">
              <p className="font-semibold text-[42px] leading-tight">130K+</p>
              <p className="text-base text-gray-500 font-medium">
                Audiences reached
              </p>
            </div>
            <div className="flex flex-col items-start">
              <p className="font-semibold text-[42px] leading-tight">24+</p>
              <p className="text-base text-gray-500 font-medium">
                Worldwide awards
              </p>
            </div>
          </div>
        </div>

        {/* Right content column */}
        <div className="flex flex-col gap-5 md:max-w-[576px]">
          <h2 className="text-[52px] tracking-[-1px] font-medium capitalize">
            commitments
          </h2>
          <p className="text-lg leading-[32px] text-gray-500 font-medium">
            We are committed to working with you collaboratively to understand
            your goals and create a strategy that will achieve them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
