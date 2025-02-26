import React from "react";
import Image from "next/image";
import { sushiOnChopSticks } from "@/app/utils";
const SushiOnChopSticks = ({ className }: { className: string }) => {
  return (
    <div className={`${className}`}>
      <Image
        fill={true}
        style={{ objectFit: "contain" }}
        src={sushiOnChopSticks}
        alt="sushiOnChopSticks"
      />
    </div>
  );
};

export default SushiOnChopSticks;
