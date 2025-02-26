import React from "react";
import Image from "next/image";
import { verticalBars } from "@/app/utils";
const VerticalBars = ({
  className,
  scrollText,
}: {
  className: string;
  scrollText?: React.ReactNode;
}) => {
  return (
    <div className={`${className}`}>
      <Image
        src={verticalBars}
        alt="verticalBars"
        fill
        style={{ objectFit: "contain" }} // ✅ Correct way in Next.js 13+
      />
      <>{scrollText}</>
    </div>
  );
};

export default VerticalBars;
