import { useScroll } from "@/lib/hooks/useScroll";
import { Button } from "./ui/button";

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
      <div className="flex items-center justify-around w-full h-20 max-w-7xl mx-auto px-4">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 h-8">
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
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center justify-center gap-8">
          <a
            href="#how-it-works"
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
            How it works
          </a>
          <a
            href="#our-work"
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
            Our work
          </a>
          <a
            href="#pricing"
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
            Pricing
          </a>
          <a
            href="#about-us"
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
            About us
          </a>
        </div>

        {/* CTA Button - Keeping original styling */}
        <Button className="bg-blue-500 rounded-2xl hover:bg-blue-600 transition-colors">
          <a
            href="https://x.com/xeno_pulse"
            target="_blank"
            className="text-white no-underline"
          >
            Contact us
          </a>
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
