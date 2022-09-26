import React from "react";
import {
  AssignmentOutlined,
  AutoStoriesOutlined,
  GridViewRounded,
  QuestionAnswerRounded,
  SettingsRounded,
} from "@mui/icons-material";

export default function Sidebar() {
  return (
    <div className="justify-between w-[20%] bg-[#ffffff] h-[100%] absolute left-0 flex flex-col items-center">
      <div className="mt-24 w-full">
        <ul className="flex flex-col">
          <li className=" p-5 pl-7 text-[#676666] hover:text-black flex items-center gap-2 cursor-pointer">
            <GridViewRounded className="text-sm" />
            Dashboard
          </li>
          <li className=" p-5 pl-7 text-[#676666] hover:text-black flex items-center gap-2 cursor-pointer">
            <AutoStoriesOutlined className="text-sm" />
            Courses
          </li>
          <li className=" p-5 pl-7 text-[#676666] hover:text-black flex items-center gap-2 cursor-pointer">
            <AssignmentOutlined className="text-sm" />
            Assignments
          </li>
          <li className=" p-5 pl-7 text-[#676666] hover:text-black flex justify-between items-center gap-2 cursor-pointer">
            <span>
              <QuestionAnswerRounded className="text-sm" />
              Messages
            </span>
            <span className="rounded-full h-5 w-5 p-1 flex items-center justify-center bg-red-500 text-white">
              2
            </span>
          </li>
          <li className=" p-5 pl-7 text-[#676666] hover:text-black flex items-center gap-2 cursor-pointer">
            <SettingsRounded className="text-sm" />
            Settings
          </li>
        </ul>
      </div>
      <div className="h-40 w-[80%] rounded-2xl overflow-hidden relative bottom-10">
        <img
          src="https://img.freepik.com/free-vector/modern-dark-texture-background_1035-11632.jpg?w=1480&t=st=1663924118~exp=1663924718~hmac=91c391935e84f544ebc8fcd52fc226c448263086c27fb0408caf0101e40536a8"
          alt="..."
          className="w-full h-full"
        />
        <p className="absolute w-[70%] top-4 left-5 text-white text-2xl font-semibold">
          Upgrade to premium
        </p>
        <button className="rounded-xl font-bold bg-white absolute bottom-4 left-5 px-4 py-2">
          Get Started
        </button>
      </div>
    </div>
  );
}
