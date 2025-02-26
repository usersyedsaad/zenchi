import React from "react";
import Image from "next/image";

import VerticalBars from "./SubLandingPage1Components/VerticalBars";
import CircleDesign from "./SubLandingPage1Components/CircleDesign";
import SushiOnChopSticks from "./SubLandingPage1Components/SushiOnChopSticks";
const SubLandingPage2 = () => {
  return (
    <div className="my-10 translate-y-[20%] max-h-full h-[100vmin] w-screen relative z-0">
      <SushiOnChopSticks className="absolute w-[36.39vw]  left-[5vw] top-[15%] h-[73%] z-[1]" />
      <VerticalBars className="absolute top-[6.46%] left-[20vw] w-[3.33vw] h-[100%] z-[-1]" />
      <CircleDesign className="absolute top-[12.46vmin] right-[6vw] w-[13.89vw] h-[100vmin] z-[0] rotate-180" />
      <div className="absolute  top-[50%] left-[50%] translate-x-[-40%] translate-y-[-50%]">
        <p className="font-inter font-[500] text-[1.67vw] bg-gradient-to-r from-[#e3ab00] via-[#efd891] to-[#d0a114] bg-clip-text text-transparent ">
          ABOUT US
        </p>
        <p className="font-[400] text-[3.89vw] leading-[4.74vw] tracking-[-2%] font-charter text-white z-[-1]">
          Nestled in the vibrant heart of Berlin, Zenchi brings the diverse and
          exquisite flavours of Asia to the bustling streets of Germany's
          capital.
        </p>
        <p className="font-inter font-[300] text-[1.67vw] leading-[clamp(29.05px,2.02vw,29.05px )] pt-[24px] ">
          Our journey began in 2018, born from a passion for authentic Asian
          cuisine and a desire to create a culinary bridge between East and
          West.
        </p>
      </div>
    </div>
  );
};

export default SubLandingPage2;
