import React from "react";

import Form from "./Form";
import Platform from "./Platform";

function ContactMain() {
  return (
    <div className="w-full py-6  max-w-[1200px] mx-auto " id="contact">
      <h2 className="text-5xl text-cyan text-center">Contact Me</h2>
      <div className="w-[90%] bg-lightBrown mx-auto mt-5 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-2 p-6 rounded-2xl">
        {/* //first div */}
        <Form />

        {/* second div */}
        <Platform />
      </div>
    </div>
  );
}

export default ContactMain;
