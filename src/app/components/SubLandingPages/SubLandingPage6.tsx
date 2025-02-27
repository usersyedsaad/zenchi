import React from "react";
import Image from "next/image";
import { circleFrame, topViewHotPot } from "@/app/utils";
const SubLandingPage6 = () => {
  return (
    <div className="my-10  h-[calc(100vmin)] w-screen relative z-0   flex justify-center items-center mb-[120px]">
      <div className="h-[20%] w-full absolute top-0">
        <Image src={circleFrame} fill alt="circleFrame" />
      </div>
      <div className="h-[20%] w-full absolute bottom-0">
        <Image src={circleFrame} fill alt="circleFrame" />
      </div>
      <div className="h-[80%] w-full absolute top-[10%] bottom-[20%] z-[1]">
        <Image src={topViewHotPot} fill alt="topViewHotPot" />
      </div>
    </div>
  );
};

export default SubLandingPage6;
