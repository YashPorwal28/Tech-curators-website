import React, { useState } from "react";
import "../styles.css";
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className=" bg-[#121619] ">
      <div className="flex p-3 bg-[#121619]  h-[60px] justify-between items-center relative lg:w-4/5 m-auto border border-black ">
        <div className="logo flex items-center">
          <img src="" alt="" />
          <p className="font-black text-xl text-[#42BE65] font-darker-grotesque ">
            TechCurators
          </p>
        </div>

        <div className="">
          <RxHamburgerMenu
            className=" text-[#42BE65] lg:hidden"
            onClick={toggleMenu}
            size={20}
          />
          <div
            className={`categories absolute top-[57px] right-0  ${
              menuVisible ? "flex" : "hidden"
            }  lg:top-[20px] lg:flex  `}
          >
            <ul className="flex flex-col gap-2 right-10 lg:flex-row lg:w-[500px] lg:gap-[60px] text-white bg-[#121619] p-5 lg:p-0 opacity-[20px] ">
              <li className="text-[#42BE65] font-semibold  ">About US</li>
              <li className="font-semibold">Services</li>
              <li className="font-semibold">Partners</li>
              <li className="font-semibold">Blog</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
