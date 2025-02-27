import React from "react";
import Image from "next/image";
import { circleFrame, social } from "@/app/utils";
const SubLandingPage7 = () => {
  return (
    <div className="my-10  h-[calc(100vmin)] w-screen relative z-0   flex justify-center items-center mb-[120px]">
      <div className="h-[80%] z-1 w-full absolute bottom-[10%]">
        <Image src={social} fill alt="social" />
      </div>
      <div className="h-[20%] z-[-1] w-full absolute bottom-0">
        <Image src={circleFrame} fill alt="circleFrame" />
      </div>
    </div>
  );
};

export default SubLandingPage7;
