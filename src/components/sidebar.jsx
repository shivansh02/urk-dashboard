import React from "react";
import { RiHomeLine } from "react-icons/ri";
import { FaRegListAlt } from "react-icons/fa";
import { RiProfileLine } from "react-icons/ri";
import { HiOutlineUser } from "react-icons/hi";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { IoMdExit } from "react-icons/io";
import Logo from "../assets/logo.png";

const Sidebar = () => {
  return (
    <div className="sidebar fixed bottom-0 md:py-4 left-0 w-screen flex flex-row-reverse justify-center md:top-0 md:flex-col md:h-screen md:w-min p-1 bg-white">
      <div className="logo flex flex-row md:flex-col text-2xl items-center justify-center ">
        <div className="logo-img flex flex-row  hidden md:block h-6 w-6">
          <img src={Logo} alt="logo" className="" />
        </div>
        <IoSearchSharp className="text-5xl p-3 md:mb-12 md:mt-4 text-gray-400 "></IoSearchSharp>
      </div>
      <div className="nav-icons flex flex-row md:flex-col">
        <a href="#" className="icon-link">
          <RiHomeLine className="text-5xl m-2 text-white bg-accent hover:text-white rounded-lg p-3 " />
        </a>
        <a href="#" className="icon-link">
          <RiProfileLine className="text-5xl m-2 text-gray-400  hover:text-accent rounded-lg p-3 " />
        </a>
        <a href="#" className="icon-link">
          <FaRegListAlt className="text-5xl m-2 text-gray-400  hover:text-accent rounded-lg p-3 " />
        </a>
        <a href="#" className="icon-link">
          <HiOutlineUser className="text-5xl m-2 text-gray-400 hover:text-accent rounded-lg p-3 " />
        </a>
      </div>
      <div className="bottom-icons hidden md:flex flex-row md:flex-col md:mt-auto">
        <a href="#" className="icon-link">
          <MdOutlineNotificationsNone className="text-5xl mx-2 text-gray-400  hover:text-textDark rounded-lg p-3 " />
        </a>
        <a href="#" className="icon-link">
          <IoMdExit className="text-5xl mx-2 text-gray-400 hover:text-textDark rounded-lg p-3 " />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
