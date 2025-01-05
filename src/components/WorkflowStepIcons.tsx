import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type WorkflowStepIconsType = {
  className?: string;
  heroiconsSolidlightningBolt?: string;
  discovery?: string;
  weMeetWithYouToLearnAboutYou?: string;

  /** Style props */
  discoveryWidth?: CSSProperties["width"];
  discoveryDisplay?: CSSProperties["display"];
  discoveryAlignSelf?: CSSProperties["alignSelf"];
};

const WorkflowStepIcons: FunctionComponent<WorkflowStepIconsType> = ({
  className = "",
  heroiconsSolidlightningBolt,
  discovery,
  discoveryWidth,
  discoveryDisplay,
  discoveryAlignSelf,
  weMeetWithYouToLearnAboutYou,
}) => {
  const discoveryStyle: CSSProperties = useMemo(() => {
    return {
      width: discoveryWidth,
      display: discoveryDisplay,
      alignSelf: discoveryAlignSelf,
    };
  }, [discoveryWidth, discoveryDisplay, discoveryAlignSelf]);

  return (
    <div
      className={`w-[590px] flex flex-row items-center justify-center gap-8 text-left text-13xl text-black font-general-sans-variable ${className}`}
    >
      <div className="rounded-3xl bg-mediumslateblue-200 flex flex-row items-center justify-center p-[30px]">
        <img
          className="size-[30px] md:size-[40px] lg:size-[46px] relative overflow-hidden shrink-0"
          alt=""
          src={heroiconsSolidlightningBolt}
        />
      </div>
      <div className="flex-1 flex flex-col items-start justify-start gap-3">
        <div
          className="w-[179px] relative capitalize font-medium inline-block"
          style={discoveryStyle}
        >
          {discovery}
        </div>
        <div className="self-stretch relative text-base leading-[32px] font-medium text-gray-500">
          {weMeetWithYouToLearnAboutYou}
        </div>
      </div>
    </div>
  );
};

export default WorkflowStepIcons;
