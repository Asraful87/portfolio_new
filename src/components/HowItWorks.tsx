import { FunctionComponent } from "react";
import WorkflowStepIcons from "./WorkflowStepIcons";

export type HowItWorksType = {
  className?: string;
};

const HowItWorks: FunctionComponent<HowItWorksType> = ({ className = "" }) => {
  return (
    <div className={`w-full md:container py-16 text-left font-general-sans-variable ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start justify-center gap-12">
          <div className="flex flex-col gap-4 h-full">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight capitalize">
              How it Works
            </h2>
            <p className="text-lg text-gray-500">
              We believe that the best way to create successful marketing campaigns
              is to work closely with our clients to understand their goals and
              challenges.
            </p>
            <img
              className="rounded-3xl w-full h-auto object-cover mt-8"
              alt="How it works illustration"
              src="/rectangle-160@2x.png"
            />
          </div>
          <div className="flex flex-col gap-8">
            <WorkflowStepIcons
              heroiconsSolidlightningBolt="/heroiconssolidlightningbolt.svg"
              discovery="Discovery"
              weMeetWithYouToLearnAboutYou="We meet with you to learn about your business, your goals, and your target audience."
            />
            <WorkflowStepIcons
              heroiconsSolidlightningBolt="/fluentchess20filled.svg"
              discovery="Strategy"
              weMeetWithYouToLearnAboutYou="We develop a customized marketing strategy that is based on your unique needs and goals."
            />
            <WorkflowStepIcons
              heroiconsSolidlightningBolt="/fluenttargetarrow16filled.svg"
              discovery="Execution"
              weMeetWithYouToLearnAboutYou="We execute our strategy using the latest digital marketing tools and techniques."
            />
            <WorkflowStepIcons
              heroiconsSolidlightningBolt="/phrulerfill.svg"
              discovery="Measurement"
              weMeetWithYouToLearnAboutYou="We track the results of our campaigns so that we can make adjustments as needed."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

