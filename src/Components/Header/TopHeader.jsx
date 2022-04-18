import React from "react";
import * as MdIcons from "react-icons/md";
import { Link } from "react-router-dom";
import classes from "./css/header.module.css";

const TopHeader = () => {
  return (
    <div className="container m-auto grid grid-cols-12 items-center px-4 lg:px-12 gap-4 py-4">
      <div className="col-span-3 lg:col-span-8 flex items-center">
        <div className="realtive mr-[50px]">
        <Link to="/">
            <img
              className={` ${classes.imgboxShadow} absolute top-0 h-[75px]`}
              src="/assets/logo.svg"
              alt="logo"
            />
        </Link>

        </div>
        <nav className="hidden lg:block col-span-7 justify-self-start ml-[50px]">
          <ul className="flex gap-5 text-white">
            <li className="flex justify-start aligned-center gap-[5px] font-semibold text-[1.rem]  cursor-pointer  leading-2">
              <img src="/assets/icons/Home.svg" alt="" />
              Home
            </li>
            <li className="flex justify-start aligned-center gap-[5px] font-semibold text-[1.rem]  cursor-pointer leading-2">
              <img src="/assets/icons/whiteone800.svg" alt="" />
              Explore
            </li>
            <li className="flex justify-start aligned-center gap-[5px] font-semibold text-[1.rem]   cursor-pointer leading-2">
              <img src="/assets/icons/AskQuestion.svg" alt="" />
              Ask
            </li>
            <li className="flex justify-start aligned-center gap-[5px] font-semibold text-[1.rem]  cursor-pointer leading-2">
              <img src="/assets/icons/NearMe.svg" alt="" />
              <span>Near Me</span>
            </li>
          </ul>
        </nav>
        {/* <div className="searchbox  flex justify-start items-center bg-white p-2.5 rounded-[15px]">
                <img className="px-[10px]" src="/assets/icons/Search.svg" alt="search" />
                <input className="w-[400px] border-0 focus:outline-none" type="text" placeholder="Search" />
            </div> */}
      </div>
      <nav className="col-span-9 lg:col-span-4 justify-self-end">
        <ul className="flex gap-5 text-white">
          <li className="flex justify-start items-center gap-[5px] font-semibold text-[1.rem]  cursor-pointer leading-2">
            <img src="/assets/icons/Search.svg" alt="" />
            Search
          </li>

          <li className="flex justify-start items-center gap-[5px] font-semibold text-[1.rem]  cursor-pointer leading-2">
            <img src="/assets/icons/User.svg" alt="" />
            Profile
          </li>
          <li className="notification relative  cursor-pointer">
            <span className="absolute bg-red -top-1 -right-1 rounded-full px-[4px] font-semibold text-white border-2 border-white leading-[13px] text-[8px]">
              9
            </span>
            <img
              className="inline"
              src="/assets/icons/Notification.svg"
              alt="notification"
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default TopHeader;
