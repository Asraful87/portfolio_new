import { PricingCard } from "./PricingCard";

const PricingCards: React.FC = () => {
  const starterFeatures = [
    "Trending Dashboard",
    "Up to 5 Hundreed Active user",
    " Upcoming 5 Tweet Supoort",
    "Basic Support",
    "24 Hour Runtime",
  ];

  const proFeatures = [
    "Trending Dashboard",
    "Up to 7 Hundreed Active user",
   " Upcoming 5 Tweet Supoort Like + RT",
    "24/7 Help Center & Support For Your Any Question",
    "Premium Support",
    "72 Hour Runtime",
  ];
  const ambassadorFeatures = [
    "Trending Dashboard",
    "Gain Infinity Visibility",
   " Upcoming All Tweet Like+Repost",
    "24/7 Help Center & Support For Your Any Question",
    "Available to change PP (extra charges apply)",
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
      <PricingCard
        title="Ambassador"
        price="$99"
        description="For buisness & projects"
        features={ambassadorFeatures}
        isPro
        ></PricingCard>
    </div>
  );
};

export default PricingCards;
