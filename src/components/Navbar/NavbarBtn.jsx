import React from "react";
import { FaFileDownload } from "react-icons/fa";

function NavbarBtn() {
  return (
    <button className="px-4 ml-2 flex items-center py-2 rounded-full text-xl font-bold text-yellow-900 border-cyan border bg-gradient-to-r from-cyan to-orange hover:scale-110 hover:border-orange transition-all duration-500 hover:shadow-cyanShadow">
      <a
        href="resume.pdf"
        download
        className="flex gap-2 items-center"
      >
        CV
        <span>
          <FaFileDownload />
        </span>
      </a>
    </button>
  );
}

export default NavbarBtn;
