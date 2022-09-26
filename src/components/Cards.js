import { AccessTime } from "@mui/icons-material";
import React from "react";

export default function Cards() {
  return (
    <div className="flex gap-5 overflow-x-scroll p-2">
      <div className="flex w-[30%] h-[95%] gap-1 p-2 flex-col ring-1 ring-[#e2e2e2] rounded-lg">
        <img
          src="https://images.pexels.com/photos/4778403/pexels-photo-4778403.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="rounded-lg "
        />
        <p className="font-bold">Lorem Ipsum</p>
        <p className="flex items-center gap-1 text-gray-500 text-xs">
          <AccessTime fontSize="small" /> 48 hours
        </p>
        <span className="flex items-center gap-1">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="w-5 h-5 rounded-full object-cover"
          />
          <p className="text-sm font-semibold">Andrew Lin</p>
        </span>
      </div>

      <div className="flex w-[30%]  gap-1 p-2 flex-col ring-1 ring-[#e2e2e2] rounded-lg">
        <img
          src="https://images.pexels.com/photos/4778403/pexels-photo-4778403.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="rounded-lg w-full"
        />
        <p className="font-bold">Lorem Ipsum</p>
        <p className="flex items-center gap-1 text-gray-500 text-xs">
          <AccessTime fontSize="small" /> 48 hours
        </p>
        <span className="flex items-center gap-1">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="w-5 h-5 rounded-full object-cover"
          />
          <p className="text-sm font-semibold">Andrew Lin</p>
        </span>
      </div>

      <div className="flex w-[30%]  gap-1 p-2 flex-col ring-1 ring-[#e2e2e2] rounded-lg">
        <img
          src="https://images.pexels.com/photos/4778403/pexels-photo-4778403.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="rounded-lg w-full"
        />
        <p className="font-bold">Lorem Ipsum</p>
        <p className="flex items-center gap-1 text-gray-500 text-xs">
          <AccessTime fontSize="small" /> 48 hours
        </p>
        <span className="flex items-center gap-1">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="w-5 h-5 rounded-full object-cover"
          />
          <p className="text-sm font-semibold">Andrew Lin</p>
        </span>
      </div>
    </div>
  );
}
