import React from "react";
import SubLandingPage1 from "./SubLandingPages/SubLandingPage1";
import SubLandingPage2 from "./SubLandingPages/SubLandingPage2";
import SubLandingPage3 from "./SubLandingPages/SubLandingPage3";
import SubLandingPage4 from "./SubLandingPages/SubLandingPage4";

const LandingPage = () => {
  return (
    <div className="landingpage h-auto z-0 max-w-full relative overflow-hidden">
      <SubLandingPage1 />
      <SubLandingPage2 />
      <SubLandingPage3 />
      <SubLandingPage4 />
    </div>
  );
};

export default LandingPage;
