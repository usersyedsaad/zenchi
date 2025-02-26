import React from "react";
import Image from "next/image";
import { circleDesign } from "@/app/utils/index.js";
const CircleDesign = ({ className }: { className: string }) => {
  return (
    <div className={`${className}`}>
      <Image
        src={circleDesign}
        alt="circleDesign"
        fill
        style={{ objectFit: "contain" }} // ✅ Correct way in Next.js 13+
      />
    </div>
  );
};

export default CircleDesign;
