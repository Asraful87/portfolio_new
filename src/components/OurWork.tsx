import { FunctionComponent } from "react";

export type OurWorkType = {
  className?: string;
};
const images = [
  "/rectangle-251@2x.png",
  "/rectangle-252@2x.png",
  "/rectangle-253@2x.png",
  "/rectangle-254@2x.png",
  "/rectangle-255@2x.png",
  "/rectangle-256@2x.png",
  "/rectangle-257@2x.png",
  "/rectangle-258@2x.png",
  "/rectangle-259@2x.png",
  "/rectangle-260@2x.png"
]

const OurWork: FunctionComponent<OurWorkType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1440px] relative h-[920px] overflow-hidden shrink-0 text-left text-45xl text-black font-general-sans-variable ${className}`}
    >
      <div className="w-full text-center capitalize font-medium">
        Our Work
      </div>
      <div className="w-full  text-lg leading-[32px] font-medium text-gray-500 text-center inline-block ">
        A glimpse of our portfolio
      </div>
      <div className="flex w-full items-end flex-wrap gap-3">
      {images.map((item,index) => { 
        return(
          <img src={item} alt="" className="w-[200px] h-[300px] object-cover rounded-lg hover:scale-105 transition"/>
        )
       })}
      </div>
    </div>
  );
};

export default OurWork;
