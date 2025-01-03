import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type QuestionItemsType = {
  className?: string;
  howDoISignUpForTheProject?: string;

  /** Style props */
  howDoIWidth?: CSSProperties["width"];
};

const QuestionItems: FunctionComponent<QuestionItemsType> = ({
  className = "",
  howDoISignUpForTheProject,
  howDoIWidth,
}) => {
  const howDoIStyle: CSSProperties = useMemo(() => {
    return {
      width: howDoIWidth,
    };
  }, [howDoIWidth]);

  return (
    <div
      className={`w-[616px] flex flex-row items-center justify-start text-left text-xl text-black font-general-sans-variable ${className}`}
    >
      <div className="flex-1 flex flex-row items-center justify-start py-8 px-2.5">
        <div
          className="relative leading-[36px] font-medium"
          style={howDoIStyle}
        >
          {howDoISignUpForTheProject}
        </div>
      </div>
      <img
        className="w-6 relative h-6 overflow-hidden shrink-0"
        alt=""
        src="/materialsymbolsaddcirclerounded.svg"
      />
    </div>
  );
};

export default QuestionItems;
