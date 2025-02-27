import React from "react";
import SubLandingPage1 from "./SubLandingPages/SubLandingPage1";
import SubLandingPage2 from "./SubLandingPages/SubLandingPage2";
import SubLandingPage3 from "./SubLandingPages/SubLandingPage3";
import SubLandingPage4 from "./SubLandingPages/SubLandingPage4";
import SubLandingPage5 from "./SubLandingPages/SubLandingPage5";
import SubLandingPage6 from "./SubLandingPages/SubLandingPage6";
import SubLandingPage7 from "./SubLandingPages/SubLandingPage7";
import SubLandingPage8 from "./SubLandingPages/SubLandingPage8";
const LandingPage = () => {
  return (
    <div className="landingpage h-auto z-0 max-w-full relative overflow-hidden">
      <SubLandingPage1 />
      <SubLandingPage2 />
      <SubLandingPage3 />
      <SubLandingPage4 />
      <SubLandingPage5 />
      <SubLandingPage6 />
      <SubLandingPage7 />
      <SubLandingPage8 />
    </div>
  );
};

export default LandingPage;
