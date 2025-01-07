import { FunctionComponent } from "react";
import MemberCard from "./MemberCard";
import MobileMemberCard from "./MobileMemberCard";

export type HeroSectionType = {
  className?: string;
};
const teamMembers = [
  {
    img: "/Asraful.jpg",
    name: "ASHRAFUL ALAM",
    role: "CEO",
  },
  {
    img: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80",
    name: "YASIN ARAFAT",
    role: "COO",
  },
  {
    img: "/firoj.jpg",
    name: "NAEEM HAQUE",
    role: "Manager",
  },
]
const HeroSection: FunctionComponent<HeroSectionType> = ({
  className = "",
}) => {
  return (
    <section
      className={`w-full min-h-screen hero_bg font-general-sans-variable ${className}`}
    >
      <div className="w-full md:container mx-auto px-4 py-8 md:py-16 lg:py-24">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 lg:gap-16">
          {/* Left Column */}
          <div className="space-y-4 md:space-y-8 w-full max-w-full mt-10 md:mt-0 pr-6 md:pr-0">
            {/* Main Heading */}
            <h1 className="text-[50px] md:text-7xl lg:text-[77px] leading-tight capitalize font-bagel-fat-one text-white text-center md:text-left">
              We Take Care Of Your Project
            </h1>

            {/* Subheading */}
            <p className="text-[24px] md:text-[22px] pr-3 md:pr-0 text-gray-100 font-medium text-center md:text-left">
              We care about our work and we care about our clients.
            </p>

            {/* Contact Form */}
            <div className="w-full  md:w-1/2 flex flex-col md:flex-row hero_gradient  h-auto md:h-[145px] items-center justify-center md:items-start gap-4 md:gap-3 rounded-xl md:rounded-r-xl  overflow-hidden">
              <img
                src="/profile.jpg"
                alt=""
                className="rounded-full w-24 h-24 md:w-36 md:h-36 flex-shrink-0"
              />
              <div className="w-[calc(100%-90px)] rounded-xl flex-1 flex flex-col gap-2 md:gap-1 text-center md:text-left px-2 md:pr-4 backdrop-blur-lg py-3">
                <h2 className="text-white md:text-white text-lg md:text-sm">
                  Hi, I'm Jack
                </h2>
                <p className="text-[11px] lg:text-[13px] xl:text-[14px] text-black md:text-white font-bold pr-2 md:pr-0 poppins-bold">
                  Welcome to my portfolio! I specialize in Twitter promotion and
                  marketing, helping projects like yours gain the visibility
                  they deserve. With years of experience in amplifying digital
                  presence, I'm here to transform your vision into a thriving
                  reality. Let's connect and discuss how we can elevate your
                  project to new heights.
                </p>
              </div>
            </div>
          </div>
         
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-[30px] md:text-5xl lg:text-[50px] leading-tight capitalize  text-white text-center md:text-left mt-5">Our Team</h1>
           <div className="flex items-center justify-center md:justify-around gap-12 flex-wrap mt-10">
           {teamMembers.map((member, index) => (
            <MemberCard key={index} img={member.img} name={member.name} role={member.role}/>
           ))}
            {teamMembers.map((member, index) => (
            <MobileMemberCard key={index} img={member.img} name={member.name} role={member.role}/>
            ))}
           </div>
          </div>
      </div>
    </section>
  );
};

export default HeroSection;
