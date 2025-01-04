import { PricingCard } from "./PricingCard";

const PricingCards: React.FC = () => {
  const starterFeatures = [
    "Trending Dashboard",
    "10 Keywords",
    "100 Accounts Tracking",
    "3 Users",
    "Basic Support",
  ];

  const proFeatures = [
    "Trending Dashboard",
    "25 Keywords",
    "250 Accounts Tracking",
    "10 Users",
    "Early Beta Features",
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
        price="$79"
        description="For agencies and businesses"
        features={proFeatures}
        isPro
      />
    </div>
  );
};

export default PricingCards;
