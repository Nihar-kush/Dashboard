import React from "react";
// import Calendar from "react-calendar";
import Calendar from "@fall-out/react-calendar";
import "@fall-out/react-calendar/dist/Calendar.css";
import { AdjustRounded, AssignmentRounded } from "@mui/icons-material";
import Cards from "./Cards";

export default function Main() {
  return (
    <div className="grid grid-cols-3 grid-rows-5 gap-2 p-2 bg-[#F5F4F7] absolute w-[80%] h-[90%] bottom-0 right-0">
      <div className="bg-[#ffffff] p-2 rounded-xl col-span-2  flex items-center justify-evenly gap-2">
        <div className="rounded-xl bg-[#f7dfdf] w-[30%] h-24 overflow-hidden relative flex justify-center items-center">
          <img
            src="https://images.pexels.com/photos/3648850/pexels-photo-3648850.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <span className="text-white absolute top-5 text-center">
            <p className="text-2xl font-bold">124</p>
            <p className="font-semibold">Hours spent</p>
          </span>
        </div>
        <div className="rounded-xl bg-[#f8e7f2] w-[30%] h-24 relative flex justify-center items-center">
          <span className="text-black absolute top-5 text-center">
            <p className="text-2xl font-bold">10</p>
            <p className="font-semibold">Certificates earned</p>
          </span>
        </div>
        <div className="rounded-xl bg-[#e3e3fa] w-[30%] h-24 relative flex justify-center items-center">
          <span className="text-black absolute top-5 text-center">
            <p className="text-2xl font-bold">7</p>
            <p className="font-semibold">Courses enrolled</p>
          </span>
        </div>
      </div>
      <div className="bg-[#ffffff] row-span-3 rounded-xl overflow-hidden flex items-center justify-center">
        {/* <Calendar className="bg-[#bf1f1f] text-center" /> */}
        <Calendar className="" />
      </div>

      {/* Assignments */}
      <div className="Assignments bg-[#ffffff] p-5 rounded-xl col-span-2 row-span-2 flex flex-col gap-3">
        <p className="text-lg font-semibold">Your Assignments</p>
        <ul className="overflow-y-scroll flex flex-col gap-4">
          <li className="flex items-center justify-between">
            <span className="flex gap-5 items-center">
              <AssignmentRounded
                fontSize="large"
                className="text-white bg-black rounded-full p-2"
              />
              <span className="">
                <p className="font-bold">Lorem ipsum</p>
                <p className="text-xs font-semibold text-gray-500">
                  3 Aug 2022
                </p>
              </span>
            </span>
            <span>
              <p className="font-bold">80/100</p>
              <p className="text-xs font-semibold text-gray-500">Your Grade</p>
            </span>
            <span className="bg-[#E2FEEB] w-24 text-center rounded-2xl py-1 px-2 text-[#5EB59E]">
              completed
            </span>
          </li>
          <li className="flex items-center justify-between">
            <span className="flex gap-5 items-center">
              <AssignmentRounded
                fontSize="large"
                className="text-white bg-black rounded-full p-2"
              />
              <span className="">
                <p className="font-bold">Lorem ipsum</p>
                <p className="text-xs font-semibold text-gray-500">
                  3 Aug 2022
                </p>
              </span>
            </span>
            <span>
              <p className="font-bold">98/100</p>
              <p className="text-xs font-semibold text-gray-500">Your Grade</p>
            </span>
            <span className="bg-[#E2FEEB] w-24 text-center rounded-2xl py-1 px-2 text-[#5EB59E]">
              completed
            </span>
          </li>
          <li className="flex items-center justify-between">
            <span className="flex gap-5 items-center">
              <AssignmentRounded
                fontSize="large"
                className="text-white bg-black rounded-full p-2"
              />
              <span className="">
                <p className="font-bold">Lorem ipsum</p>
                <p className="text-xs font-semibold text-gray-500">
                  Today, 10:30 AM
                </p>
              </span>
            </span>
            <span>
              <p className="font-bold">--/100</p>
              <p className="text-xs font-semibold text-gray-500">Your Grade</p>
            </span>
            <span className="bg-[#FFEDEA] w-24 text-center rounded-2xl py-1 px-2 text-[#DFA9A4]">
              To Do
            </span>
          </li>
        </ul>
      </div>
      <div className="bg-[#ffffff] rounded-xl p-5 row-span-2 col-span-2 overflow-y-scroll">
        <p className="font-semibold text-lg mb-2">Top Picks For You</p>
        <Cards />
      </div>
      <div className="bg-[#ffffff] rounded-xl p-5 row-span-2">
        <p className="font-semibold text-lg mb-2">Schedule</p>
      </div>
    </div>
  );
}
