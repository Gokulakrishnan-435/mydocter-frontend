import React, { useState } from "react";



import { GiHamburgerMenu } from "react-icons/gi";

import NavbarContent from "./NavbarContent";
import NavIcon from "./NavIcon";
const Navbar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex ">
      <div
        className={` ${
          open ? "w-14" : "w-60 "
        } bg-black h-screen p-5  pt-8 relative duration-300`}
      >
        <GiHamburgerMenu
          className={`absolute cursor-pointer right-1 top-9 w-10 
            fill-gray-200 text-5xl ${!open && "rotate-90"}`}
          onClick={() => setOpen(!open)}
        />

        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/logo.png"
            alt=""
            className={`cursor-pointer duration-500 ${
              !open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              open && "scale-0"
            }`}
          >
            My Doctor
          </h1>
        </div>
        <ul className="pt-6 text-white">
          {!open ? <NavbarContent /> : <NavIcon open={open} />}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
