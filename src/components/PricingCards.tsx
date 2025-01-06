import { PricingCard } from "./PricingCard";

const PricingCards: React.FC = () => {
  const starterFeatures = [
    "Trending Dashboard",
    "Up to 5 Hundreed Active user",
    " Upcoming 5 Tweet Supoort",
    "Basic Support",
  ];

  const proFeatures = [
    "Trending Dashboard",
    "Up to 7 Hundreed Active user",
   " Upcoming Any Tweet Supoort Like + RT",
    "24/7 Help Center & Support For Your Any Question",
    "Premium Support",
  ];

  return (
    <div className="flex flex-col md:flex-row gap-3 text-zinc-800 mt-10">
      <PricingCard
        title="Starter"
        price="$29"
        description="For the individual and small teams"
        features={starterFeatures}
      />
      <PricingCard
        title="Pro"
        price="$49"
        description="For agencies and businesses"
        features={proFeatures}
        isPro
      />
    </div>
  );
};

export default PricingCards;
