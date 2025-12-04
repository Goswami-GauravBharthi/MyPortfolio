import React from "react";

function SubHeroSection() {
  return (
    // <div className="w-full border-y border-lightGrey text-lightGrey  justify-around uppercase xl:text-4xl md:2xl sm:4xl  py-8 items-center bg-brown/50  overflow-auto">
    //   <span>Fast Learner</span>
    //   <span>Team Work</span>
    //   <span>Design master</span>
    //   <span>Fast Learner</span>
    //   <span>Team Work</span>
    //   <span>Design master</span>
    // </div>
    <div class="w-full p-4 bg-brown/50 border-y border-lightGrey text-lightGrey flex items-center justify-center  uppercase py-8">
      <div class="whitespace-nowrap overflow-auto scrollbar-hide flex space-x-4  xl:text-4xl md:2xl sm:4xl">
        <span class="inline-block text-xl px-6 "> Fast Learner</span>
        <span class="inline-block text-xl px-6 "> Team Work</span>
        <span class="inline-block text-xl px-6 ">Design master</span>
        <span class="inline-block text-xl px-6 "> Leadership</span>
        <span class="inline-block text-xl px-6 ">Clean Code</span>
      </div>
    </div>
  );
}

export default SubHeroSection;
