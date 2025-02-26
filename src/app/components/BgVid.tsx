import React from "react";
import { bgVid } from "../utils";

const BgVid = () => {
  console.log(bgVid);
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
      >
        <source src={bgVid} type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/30"></div>
    </div>
  );
};

export default BgVid;
