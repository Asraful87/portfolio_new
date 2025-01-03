import { useScroll } from "@/lib/hooks/useScroll";
import { Button } from "./ui/button";

const NavBar = () => {
  const { isVisible, isScrolling } = useScroll();

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm
        transition-all duration-300 transform
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
        ${isScrolling ? "shadow-md" : "shadow-none"}
      `}
    >
      <div className="flex items-center justify-around w-full h-16 max-w-7xl mx-auto px-4">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 h-8">
          <img
            src="rectangle-196@2x.png"
            alt="XenoPulse logo"
            height={20}
            width={20}
          />
          <b className="text-[24px] tracking-[-2px] capitalize font-helvetica">
            XenoPulse
          </b>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center justify-center gap-8">
          <a
            href="#how-it-works"
            className="font-medium text-black text-lg no-underline hover:text-blue-500 transition-colors"
          >
            How it works
          </a>
          <a
            href="#our-work"
            className="font-medium text-black text-lg no-underline hover:text-blue-500 transition-colors"
          >
            Our work
          </a>
          <a
            href="#pricing"
            className="font-medium text-black text-lg no-underline hover:text-blue-500 transition-colors"
          >
            Pricing
          </a>
          <a
            href="#about-us"
            className="font-medium text-black text-lg no-underline hover:text-blue-500 transition-colors"
          >
            About us
          </a>
        </div>

        {/* CTA Button */}
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
