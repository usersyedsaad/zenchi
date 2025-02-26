import React from "react";
import BgVid from "../BgVid";
import VerticalBars from "./SubLandingPage1Components/VerticalBars";
import CircleDesign from "./SubLandingPage1Components/CircleDesign";

const SubLandingPage1 = () => {
  return (
    <div className="relative h-[100vh] w-[100vw]">
      <BgVid />
      <CircleDesign className="vertical absolute bottom-0 left-0 w-[clamp(80px,36vw,210px)]  h-[calc(100%-93px)] " />
      <VerticalBars className="vertical absolute bottom-0 right-0 w-[clamp(5px,32vw,16%)]  h-[calc(100%-93px)] " />
      <div className="absolute top-[73.23%] inset-x-[10%] tranaslate-x-[-100%] translate-y-[-50%] w-[clamp(30px,49vw,722px)]">
        <p className="font-inter font-[500] text-[clamp(16px,1.67vw,24px)] bg-gradient-to-r from-[#e3ab00] via-[#efd891] to-[#d0a114] bg-clip-text text-transparent ">
          TASTE ASIA
        </p>
        <h1 className=" relative text-[clamp(48px,6.94vw,100px)] font-[400] leading-[clamp(54px,8.47vw,122px)] max-w-prose">
          <em>Zenchi</em>{" "}
          <span className="inline-block text-nowrap">The Real</span> <br />
          <span className="absolute lg:right-0 bg-gradient-to-r from-[#e3ab00] via-[#efd891] to-[#d0a114] bg-clip-text text-transparent">
            <em>Sensation</em>
          </span>
        </h1>
      </div>
    </div>
  );
};

export default SubLandingPage1;
