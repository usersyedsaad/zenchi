import React from "react";
import VerticalBars from "./SubLandingPage1Components/VerticalBars";
import Image from "next/image";
import { CoupleEating } from "@/app/utils";

const SubLandingPage4 = () => {
  return (
    <div className="relative translate-y-[20%] h-[100vmin] w-full bg-gray-400 flex flex-col md:flex-row p-10">
      <VerticalBars className="vertical absolute left-[5vw] w-[clamp(5px,10vw,16%)]  h-[calc(70%-93px)] top-[10%]" />
      <div className="absolute left-[15vw] w-[clamp(70px,30.85vw,500px)] h-[calc(70%-93px)] top-[10%]">
        <Image
          src={CoupleEating}
          fill
          style={{ objectFit: "cover" }}
          alt="couple eating"
        />
      </div>
      <div className="absolute inset-y-[20%] left-[50%] translate-x-[0%] translate-y-[-16%]">
        <p className="font-inter font-[500] text-[clamp(8px,2vw,18px)] bg-gradient-to-r from-[#e3ab00] via-[#efd891] to-[#d0a114] bg-clip-text text-transparent ">
          Our Story
        </p>
        <p className="font-[400] text-[3.89vw] leading-[4.74vw] tracking-[-2%] font-charter text-white z-[-1]">
          Taste with experience
        </p>
        <p className="font-inter font-[300] text-[clamp(8px,1.67vw,18px)] leading-[clamp(29.05px,2.5vw,29.05px )] pt-[clamp(3px,1vw,24px)] text-white/70">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <button className="border-[0.5px] font-inter font-[300] text-[clamp(8px,1.39vw,20px)] leading-[clamp(18px,1.67vw,24.2px)] py-[clamp(2px,0.5vw,16px)] px-[clamp(12px,3.33vw,48px)] flex gap-[clamp(4px,0.56vw,8px)] mt-[clamp(5px,1.67vw,24px)] border-[#d0a114]">
          <span>SEE MENU</span>&gt;
        </button>
      </div>
    </div>
  );
};

export default SubLandingPage4;
