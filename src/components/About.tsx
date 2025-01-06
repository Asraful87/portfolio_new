import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=100 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen mt-6">
      <div>
        <div className="w-full text-center capitalize font-bold gap-4 text-[30px] md:text-[45px]">
          Here is page statistics
        </div>
        <div className="w-full  text-center capitalize josefin-sans gap-4 text-[14px] md:text-[17px]">
          <p>
            Here is Page Statistics: Our page is created to provide a valuable
            and engaging experience for our visitors. The data shows that we're
            achieving this goal, with a growing number of daily active users and
            a low bounce rate. This indicates that visitors are finding our
            content relevant and are exploring our website further. We're
            committed to continually improving our page to better serve our
            clients.
          </p>
        </div>
      </div>
      <div className="mt-4">
        <img
          src="/partners@3x.png"
          alt=""
          className="w-full h-auto object-cover"
        />
      </div>
      {/* <div className="h-dvh w-screen mt-3" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="/partners@3x.png"
            alt="Background"
            className="absolute left-0 top-0 size-full object-bottom  object-cover"
          />
        </div>
      </div> */}
    </div>
  );
};

export default About;
