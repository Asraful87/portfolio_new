import { FunctionComponent } from "react";
import QuestionItems from "./QuestionItems";

export type HelpType = {
  className?: string;
};

const Help: FunctionComponent<HelpType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1439px] relative h-[582px] overflow-hidden shrink-0 text-left text-xl text-black font-general-sans-variable ${className}`}
    >
      <div className="absolute top-[141px] left-[119px] w-[1200px] flex flex-row items-start justify-start gap-[120px]">
        <div className="flex flex-col items-start justify-start">
          <img
            className="w-[616px] relative max-h-full"
            alt=""
            src="/vector-3.svg"
          />
          <QuestionItems howDoISignUpForTheProject="How do i sign up for the project?" />
          <img
            className="w-[616px] relative max-h-full"
            alt=""
            src="/vector-3.svg"
          />
          <QuestionItems
            howDoISignUpForTheProject="What thing that i should prepare before starting?"
            howDoIWidth="unset"
          />
          <img
            className="w-[616px] relative max-h-full"
            alt=""
            src="/vector-3.svg"
          />
          <QuestionItems
            howDoISignUpForTheProject="Does my company need help for marketing advices?"
            howDoIWidth="unset"
          />
          <img
            className="w-[616px] relative max-h-full"
            alt=""
            src="/vector-3.svg"
          />
        </div>
        <div className="w-[464px] flex flex-col items-start justify-start gap-[42px] text-21xl">
          <div className="self-stretch flex flex-col items-start justify-start gap-8">
            <div className="flex flex-col items-start justify-start gap-4">
              <div className="w-[487px] relative tracking-[-1px] leading-[52px] capitalize font-medium inline-block">
                How we can help you?
              </div>
              <div className="w-[431px] relative text-xl leading-[36px] font-medium text-gray-500 inline-block opacity-[0.75] mix-blend-normal">
                Follow our newsletter. We will regulary update our latest
                project and availability.
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-2 text-base text-darkgray">
              <div className="flex-1 rounded-18xl bg-gray-100 flex flex-row items-center justify-start py-5 px-[18px]">
                <div className="relative capitalize font-medium">
                  Enter your Email
                </div>
              </div>
              <div className="w-36 rounded-51xl bg-mediumslateblue-200 h-[62px] flex flex-row items-center justify-center py-5 px-6 box-border text-white">
                <div className="relative leading-[20px] capitalize font-medium">
                  Lets Talk
                </div>
              </div>
            </div>
          </div>
          <div className="w-[119.9px] relative h-6 text-xl text-mediumslateblue-200">
            <div className="absolute top-[0px] left-[0px] [text-decoration:underline] leading-[24px] capitalize font-semibold inline-block w-[105px]">
              more FAQ
            </div>
            <img
              className="absolute h-[54.58%] w-[12.43%] top-[25%] right-[0%] bottom-[20.42%] left-[87.57%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector2.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
