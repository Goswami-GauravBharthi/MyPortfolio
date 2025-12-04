import React from "react";
import { Link } from "react-scroll";

function NavBarLogo() {
  return (
    <div>
      <h1 className="text-white text-2xl cursor-pointer sm:hidden md:block">
        <Link to="hero" smooth={true} spy={true} duration={500} offset={-130}>
          Goswami Gaurav
        </Link>
      </h1>
      <h1 className="text-white font-special cursor-pointer font-bold text-4xl sm:block md:hidden">
        <Link to="hero" smooth={true} spy={true} duration={500} offset={-130}>
          Gaurav
        </Link>
      </h1>
    </div>
  );
}

export default NavBarLogo;
