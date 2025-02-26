import React from "react";
import Image from "next/image";
import {
  bgYellow,
  circlePiece,
  sideViewNoodlesBowl,
  topViewOfNoodles,
} from "@/app/utils";

const SubLandingPage3 = () => {
  return (
    <div className="my-10 translate-y-[20%] h-[calc(100vmin)] w-screen relative z-0  flex justify-center items-center">
      <div className="absolute top-0 left-[55%] translate-x-[-15%]  h-[70%] w-[35%] ">
        <Image
          src={topViewOfNoodles}
          alt="topViewOfNoodles"
          fill // Adjusts width & height automatically
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="absolute top-[50%] left-[30%] translate-x-[-43.5%] translate-y-[-40%] h-[70%] w-[35%] z-[-4]">
        <Image
          src={sideViewNoodlesBowl}
          alt="sideViewNoodlesBowl"
          fill // Adjusts width & height automatically
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="absolute top-[22%] left-[50%] translate-x-[-50.5%] translate-y-[-50%] h-[13.89vmin] w-[200px] rotate-45 z-[-3]">
        <Image
          src={circlePiece}
          alt="circlePiece"
          fill // Adjusts width & height automatically
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="absolute bottom-0 left-0  h-[78vmin] w-full z-[-5]">
        <Image
          src={bgYellow}
          alt="bg Yellow"
          fill // Adjusts width & height automatically
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default SubLandingPage3;
