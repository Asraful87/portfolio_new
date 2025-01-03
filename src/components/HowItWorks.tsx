import { FunctionComponent } from "react";
import WorkflowStepIcons from "./WorkflowStepIcons";

export type HowItWorksType = {
  className?: string;
};

const HowItWorks: FunctionComponent<HowItWorksType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1440px] relative h-[804px] overflow-hidden shrink-0 text-left text-45xl text-black font-general-sans-variable ${className}`}
    >
      <div className="absolute top-[100px] left-[120px] flex flex-col items-start justify-start gap-[15px]">
        <div className="w-[402px] relative tracking-[-1px] capitalize font-medium inline-block">
          how it Works
        </div>
        <div className="w-[499px] relative text-lg leading-[36px] font-medium text-gray-500 inline-block">
          We believe that the best way to create successful marketing campaigns
          is to work closely with our clients to understand their goals and
          challenges.
        </div>
      </div>
      <img
        className="absolute top-[391px] left-[120px] rounded-21xl w-[487px] h-[311px] object-cover"
        alt=""
        src="/rectangle-160@2x.png"
      />
      <div className="absolute top-[100px] left-[730px] flex flex-col items-start justify-start gap-[42px] text-13xl">
        <WorkflowStepIcons
          heroiconsSolidlightningBolt="/heroiconssolidlightningbolt.svg"
          discovery="Discovery"
          weMeetWithYouToLearnAboutYou="We meet with you to learn about your business, your goals, and your target audience."
        />
        <WorkflowStepIcons
          heroiconsSolidlightningBolt="/fluentchess20filled.svg"
          discovery="Strategy"
          discoveryWidth="179px"
          discoveryDisplay="inline-block"
          discoveryAlignSelf="unset"
          weMeetWithYouToLearnAboutYou="We develop a customized marketing strategy that is based on your unique needs and goals."
        />
        <WorkflowStepIcons
          heroiconsSolidlightningBolt="/fluenttargetarrow16filled.svg"
          discovery="Execution"
          discoveryWidth="179px"
          discoveryDisplay="inline-block"
          discoveryAlignSelf="unset"
          weMeetWithYouToLearnAboutYou="We execute our strategy using the latest digital marketing tools and techniques."
        />
        <WorkflowStepIcons
          heroiconsSolidlightningBolt="/phrulerfill.svg"
          discovery="Measurement"
          discoveryWidth="unset"
          discoveryDisplay="unset"
          discoveryAlignSelf="stretch"
          weMeetWithYouToLearnAboutYou="We track the results of our campaigns so that we can make adjustments as needed."
        />
      </div>
    </div>
  );
};

export default HowItWorks;
