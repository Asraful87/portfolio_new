import { FunctionComponent } from "react";

export type NavBarType = {
  className?: string;
};

const NavBar: FunctionComponent<NavBarType> = ({ className = "" }) => {
  return (
    <div
      className={`w-full md:container mx-auto relative bg-white border-gray-400 border-b-[1px] border-solid box-border h-[88px] overflow-hidden shrink-0 text-left text-base text-black font-general-sans-variable ${className}`}
    >
      
        <div className="w-36 flex items-center justify-center gap-2 h-8 text-9xl-2 font-helvetica">
          <img src="rectangle-196@2x.png" alt="" height={25} width={25} />
          <b className=" tracking-[-2px] capitalize">
           XenoPulse
          </b>
          
        </div>
        <div className="hidden md:flexself-stretch flex-1  flex-row items-center justify-center gap-10">
          <div className="relative capitalize font-medium">How it Works</div>
          <div className="relative capitalize font-medium">Our Work</div>
          <div className="relative capitalize font-medium">Pricing</div>
          <div className="relative capitalize font-medium">About Us</div>
        </div>
        <div className="rounded-51xl bg-mediumslateblue-200 flex flex-row items-start justify-start py-4 px-6 text-white">
          <div className="relative leading-[20px] capitalize font-medium">
            Book a call
          </div>
        </div>
      
    </div>
  );
};

export default NavBar;
