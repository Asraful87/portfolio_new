import { ReactNode } from "react";
import { FireIcon } from "./icons/FireIcon";
import { PricingFeature } from "./PricingFeature";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPro?: boolean;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  isPro = false,
}) => {
  const containerClasses = isPro
    ? "flex flex-col items-center bg-gradient-to-br from-blue-100 via-orange-100 to-purple-100 p-1 rounded-lg shadow-lg relative border-8 border-orange-200 w-[360px] md:w-[400px]"
    : "flex flex-col items-center p-1 bg-slate-100  rounded-lg shadow-lg w-[360px]  md:w-[400px]";

  return (
    <div
      className={`${containerClasses} min-h-[500px] flex flex-col items-center justify-center gap-4`}
    >
      {isPro && (
        <>
          <FireIcon />
          <p className="mono text-sm absolute -top-4 bg-red-400 text-zinc-100 py-0.5 px-2 font-bold tracking-wider rounded">
            POPULAR
          </p>
        </>
      )}
      <div className="flex flex-col  ">
        <h2 className="font-extrabold text-[30px] text-center">{title}</h2>
        <p className="opacity-60 text-center text-[18px]">{description}</p>
        <p className="text-center text-[45px] font-bold mt-1">{price}</p>
      </div>
      <div className="flex flex-col gap-3 w-full">
        {features.map((feature, index) => (
          <PricingFeature key={index} withQuestion={index === 0}>
            {feature}
          </PricingFeature>
        ))}
        <div className="flex justify-center mt-6">
          <button className="px-6 py-2.5 border-violet-400 border-4 hover:bg-violet-100 rounded-xl font-medium transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
