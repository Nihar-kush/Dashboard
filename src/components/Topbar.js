import React from "react";
import {
  KeyboardArrowDown,
  NotificationsOutlined,
  Search,
} from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="Topbar fixed top-0 z-10 w-full h-[10%] bg-[#FFFFFF] border-b-2 border-[#F5F4F7] flex items-center">
      <div className="TopContainer flex items-center justify-between w-full px-5">
        <a href="/" className="">
          <img
            className="w-60"
            src="https://i.ibb.co/Wg3xCcH/imageedit-2-7952603828.png"
            alt="Logo"
          />
        </a>
        <div className="w-[60%] flex">
          <span className="p-3 divide-x-2 rounded-2xl  text-[#9BA2AC] flex items-center gap-2 bg-[#ececed]">
            <Search className="text-sm cursor-pointer" />
            <input
              type="text"
              name="Search"
              placeholder="Search"
              className="bg-[#ececed] outline-none"
            />
          </span>
        </div>

        <div className="flex gap-10 items-center">
          <span className="cursor-pointer flex items-center justify-center h-10 w-10 ring-1 ring-[#ececed] rounded-full text-[#9BA2AC]">
            <NotificationsOutlined />
          </span>
          <span className="flex items-center gap-2">
            <img
              className="w-10 h-10 rounded-full object-cover cursor-pointer"
              src="https://images.pexels.com/photos/6389849/pexels-photo-6389849.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="..."
            />
            <KeyboardArrowDown className="cursor-pointer text-[#9BA2AC]" />
          </span>
        </div>
      </div>
    </div>
  );
}

// #F5F4F7
// #9BA2AC
// #F5F7F9
//
// #080808
