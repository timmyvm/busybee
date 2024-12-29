import {
  CalendarIcon,
  ChartBarIcon,
  FaceSmileIcon,
  MapPinIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

export default function PostInput() {
  return (
    <div className="flex space-x-5 p-3 border-b border-gray-100">
      <Image
        src="/assets/busybee-logo2.png"
        width={44}
        height={44}
        alt="Logo"
        className="w-11 h-11"
      />
      <div className="w-full">
        <textarea
          className="resize-none outline-none w-full min-h-[50px] text-lg"
          placeholder="What's Happening!?"
        ></textarea>
        <div className="flex justify-between pt-5 border-t border-gray-100">
          <div className="flex space-x-1.5 ">
            <PhotoIcon className="w-[22px] h-[22px] text-[#F4AF01]" />
            <ChartBarIcon className="w-[22px] h-[22px] text-[#F4AF01]" />
            <FaceSmileIcon className="w-[22px] h-[22px] text-[#F4AF01]" />
            <CalendarIcon className="w-[22px] h-[22px] text-[#F4AF01]" />
            <MapPinIcon className="w-[22px] h-[22px] text-[#F4AF01]" />
          </div>

          <button className="bg-[#F4AF01] text-white w-[80px] h-[36px] rounded-full text-sm cursor-pointer">
            Bumble
          </button>
        </div>
      </div>
    </div>
  );
}
