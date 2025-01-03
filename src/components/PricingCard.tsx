import { ReactNode } from 'react';
import { FireIcon } from './icons/FireIcon';
import { PricingFeature } from './PricingFeature';

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
    ? "flex flex-col items-center bg-gradient-to-br from-blue-100 via-orange-100 to-purple-100 p-8 rounded-lg shadow-lg relative border-8 border-orange-200 max-w-sm"
    : "flex flex-col items-center bg-slate-100 p-8 rounded-lg shadow-lg max-w-sm";

  return (
    <div className={containerClasses}>
      {isPro && (
        <>
          <FireIcon />
          <p className="mono text-sm absolute -top-4 bg-red-400 text-zinc-100 py-0.5 px-2 font-bold tracking-wider rounded">
            POPULAR
          </p>
        </>
      )}
      <div>
        <h2 className="font-extrabold text-3xl text-center mb-2">{title}</h2>
        <p className="opacity-60 text-center">{description}</p>
        <div className="flex flex-col items-center my-8">
          <p className="font-extrabold text-4xl">{price}</p>
          <p className="text-sm opacity-60">/month</p>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        {features.map((feature, index) => (
          <PricingFeature key={index} withQuestion={index === 0}>
            {feature}
          </PricingFeature>
        ))}
        <div className="flex justify-center mt-8">
          <button className=" px-4 py-2 border-violet-400 border-4 hover:bg-violet-100 rounded-xl">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

