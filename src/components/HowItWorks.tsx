import { FunctionComponent } from "react";
import WorkflowStepIcons from "./WorkflowStepIcons";

export type HowItWorksType = {
  className?: string;
};
const workflowSteps = [
  {
    icon: "/heroiconssolidlightningbolt.svg",
    title: "Discovery",
    description: "We meet with you to learn about your business, your goals, and your target audience."
  },
  {
    icon: "/fluentchess20filled.svg",
    title: "Strategy",
    description: "We develop a customized marketing strategy that is based on your unique needs and goals."
  },
  {
    icon: "/fluenttargetarrow16filled.svg",
    title: "Execution",
    description: "We execute our strategy using the latest digital marketing tools and techniques."
  },
  {
    icon: "/phrulerfill.svg",
    title: "Measurement",
    description: "We track the results of our campaigns so that we can make adjustments as needed."
  }
];

const HowItWorks: FunctionComponent<HowItWorksType> = ({ className = "" }) => {
  return (
    <div className={`w-full px-[10px] md:container mx-auto min-h-screen  flex flex-col md:flex-row items-center justify-around gap-6  font-general-sans-variable ${className}`}>
      
        
          <div className="flex flex-col gap-2 h-full w-full">
            <h2 className="text-[35px]  lg:text-5xl font-medium ">
              How it Works
            </h2>
            <p className="text-lg text-gray-500">
              We believe that the best way to create successful marketing campaigns
              is to work closely with our clients to understand their goals and
              challenges.
            </p>
            <img
              className="rounded-3xl w-full max-w-[800px] object-cover mt-8"
              alt="How it works illustration"
              src="/rectangle-160@2x.png"
            />
          </div>
          <div className="flex flex-col gap-8 ">
           {workflowSteps.map((step, index) => (
              <WorkflowStepIcons
              key={index}
              heroiconsSolidlightningBolt={step.icon}
              discovery={step.title}
              weMeetWithYouToLearnAboutYou={step.description}
            />
           ))}
            
          </div>
        
      
    </div>
  );
};

export default HowItWorks;

