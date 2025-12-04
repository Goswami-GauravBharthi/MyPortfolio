import React from "react";
import AboutText from "./AboutText";
import AboutImage from "./AboutImage";

function AboutMain() {
  return (
    <div id="about" className="flex md:flex-row sm:flex-col gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] justify-between items-center ">
      <div>
        <AboutText />
      </div>
      <div>
        <AboutImage />
      </div>
    </div>
  );
}

export default AboutMain;
