import { useScroll } from "@/lib/hooks/useScroll";
import { Button } from "./ui/button";
import SparkleButton from "./SparkleButton";
import { IoReorderThreeOutline } from "react-icons/io5";
import CustomNavItem from "./CustomNavItem";
const links = [
  { id: "statistics", name: "Statistics" },
  { id: "how-it-works", name: "How it works" },
  { id: "our-work", name: "Our work" },
  { id: "pricing", name: "Pricing" }
];


const NavBar = () => {
  const { isVisible, isScrolling, isAtTop } = useScroll();

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 
        ${!isAtTop ? "bg-white/80 backdrop-blur-sm" : "bg-transparent"}
        transition-all duration-300 transform
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
        ${isScrolling && !isAtTop ? "shadow-md" : "shadow-none"}
        
      `}
    >
      <div className="flex items-center justify-around w-full h-20 max-w-7xl mx-auto px-4 relative">
        {/* Logo */}
        <a href="/" className="flex items-center justify-center gap-2 h-8 no-underline">
          <img
            src="rectangle-196@2x.png"
            alt="XenoPulse logo"
            height={25}
            width={25}
          />
          <b
            className={`
            text-[22px] tracking-[-2px] capitalize font-helvetica
            text-black
            transition-colors duration-300
          `}
          >
            XenoPulse
          </b>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center justify-center gap-8">
          
          {links.map((link) => (
            <a
            href={`#${link.id}`}
            className={`
              font-medium text-lg no-underline
              ${
                isAtTop
                  ? "text-white hover:text-gray-200"
                  : "text-black hover:text-blue-500"
              }
              transition-colors duration-300
            `}
          >
            {link.name}
          </a>
          ))}
        </div>

        {/* CTA Button - Keeping original styling */}
        
         <div className="flex items-center gap-3">
         <a
            href="https://x.com/xeno_pulse"
            target="_blank"
            className="text-white no-underline"
          >
            <SparkleButton>Contact us</SparkleButton>
          </a>
          <CustomNavItem/>
         </div>
      
      </div>
    </nav>
  );
};

export default NavBar;
