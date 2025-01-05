import SparkleButton from "./SparkleButton";
import { FaSquareXTwitter ,FaSquareInstagram,FaSquareFacebook} from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";

const Bottom = () => {
  return (
    <div className="flex flex-col items-center justify-around w-full md:flex-row gap-4 min-h-18 mb-3">
      <div className="flex items-center justify-center gap-2">
        <img
          src="rectangle-196@2x.png"
          alt="XenoPulse logo"
          height={30}
          width={30}
        />
        <b
          className={`
            text-[28px] tracking-[-2px] capitalize font-helvetica
            text-black
            transition-colors duration-300
          `}
        >
          XenoPulse
        </b>
      </div>
      <div className="flex item-center justify-center gap-7">
        <a href="/" target="_blank" className="">
        <SiDiscord className="size-10 text-black"/>
        </a>
        <a href="/" target="_blank" className="">
        <FaSquareFacebook className="size-10  text-black hover:scale-[1.1] transition"/>
        </a>

        <a href="/" target="_blank" className="">
        <FaSquareInstagram className="size-10 text-black"/>
        </a>
        <a href="/" target="_blank" className="">
        <FaTelegramPlane className="size-10 text-black"/>
        </a>
        <a href="/" target="_blank" className="">
        <FaSquareXTwitter className="size-10 text-black"/>
        </a>
      </div>
      <SparkleButton>Contuct Us</SparkleButton>
    </div>
  );
};

export default Bottom;
