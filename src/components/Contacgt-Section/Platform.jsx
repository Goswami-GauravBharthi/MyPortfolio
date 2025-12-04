import React from "react";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { GrInstagram } from "react-icons/gr";
import { RiLinkedinFill } from "react-icons/ri";
import { LuGithub } from "react-icons/lu";

function Platform() {
  return (
    <div className="order-1 lg:order-2 flex flex-col gap-5 items-center justify-center">
      <img
        src="email-image.png"
        alt=""
        className="w-auto h-[250px]"
      />
      <div>
        <div className="flex gap-3 items-center text-lg ">
          <CiMail className="text-white" />
          <p className="text-white">gaurav02105@gmail.com</p>
        </div>

        <div className="flex gap-3 items-center text-lg ">
          <CiLocationOn className="text-white" />
          <p className="text-white">Bhavnagar, Gujarat</p>
        </div>
      </div>

      <div className="flex gap-4 items-center justify-between w-[150px] mt-5">
        <div className="border-2 text-2xl cursor-pointer animate-bounce border-darkOrange rounded-full p-2">
          <a href="https://github.com/Goswami-GauravBharthi" target="_blank">
            <LuGithub className="text-darkOrange" />
          </a>
        </div>
        <div className="border-2 text-2xl cursor-pointer animate-bounce border-darkOrange rounded-full p-2">
          <a
            href="https://www.instagram.com/gaura_v_210?igsh=YzljYTk1ODg3Zg=="
            target="_blank"
          >
            <GrInstagram className="text-darkOrange" />
          </a>
        </div>

        <div className="border-2 text-2xl cursor-pointer animate-bounce border-darkOrange rounded-full p-2">
          <a href="" target="_blank">
            <RiLinkedinFill className="text-darkOrange" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Platform;
