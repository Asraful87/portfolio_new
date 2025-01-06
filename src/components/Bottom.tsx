import SparkleButton from "./SparkleButton";
import {
  FaSquareXTwitter,
  FaSquareInstagram,
  FaSquareFacebook,
} from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";
import { IconType } from "react-icons";
const socialLinks = [
  {
    url: "https://discordapp.com/users/1069136797281558609npm",
    icon: SiDiscord,
  },
  {
    url: "https://www.facebook.com/asraful.871",
    icon: FaSquareFacebook,
  },
  {
    url: "https://t.me/Xeno_Pulse",
    icon: FaTelegramPlane,
  },
  {
    url: "https://x.com/xeno_pulse?t=Vk_IT_0zeyBsZdzJrLqV9Q&s=09",
    icon: FaSquareXTwitter,
  },
];

console.log(socialLinks);

const Bottom = () => {
  return (
    <div className="flex flex-col items-center justify-around w-full md:flex-row gap-4 min-h-18 mb-3 mt-5 md:mt-1">
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
        {socialLinks.map((link, index) => {
          return (
            <a href={link.url} target="_blank" className="">
              <link.icon className="size-10  text-black hover:scale-[1.1] transition" />
            </a>
          );
        })}
      </div>
      <SparkleButton>Contuct Us</SparkleButton>
    </div>
  );
};

export default Bottom;
