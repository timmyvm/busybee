import {
  EllipsisHorizontalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

export default function Widgets() {
  return (
    <div className="p-3 hidden lg:flex flex-col  space-y-4 w-[400px] ps-10">
      <div
        className="bg-[#EFF3F4] flex text-[#89959D]
       h-[44px] items-center space-x- 
       rounded-full pl-5 "
      >
        <MagnifyingGlassIcon className="w-[22px] h-[22px]" />
        <input
          type="text"
          placeholder="Search Busy Bee"
          className="bg-transparent outline-none"
        />
      </div>

      <div className="bg-[#EFF3F4] rounded-xl p-3">
        <h1 className="text-xl font-bold">Whats Happen?!</h1>
        <div className="flex flex-col py-3  space-y-0.5">
          <div
            className="flex justify-between text-[#536471]
          text-[13px]"
          >
            <span>Trending in Australia</span>
            <EllipsisHorizontalIcon className="w-[20px]" />
          </div>
          <span className="font-bold text-sm">#ReactJS</span>
          <span className="text-[#536471] text-xs"> 240K Bumbles</span>
        </div>
        <div className="flex flex-col py-3  space-y-0.5 ">
          <div
            className="flex justify-between text-[#536471]
          text-[13px]"
          >
            <span>Trending in Australia</span>
            <EllipsisHorizontalIcon className="w-[20px]" />
          </div>
          <span className="font-bold text-sm">#DiddyParty</span>
          <span className="text-[#536471] text-xs"> 69K Bumbles</span>
        </div>
        <div className="flex flex-col py-3  space-y-0.5 ">
          <div
            className="flex justify-between text-[#536471]
          text-[13px]"
          >
            <span>Trending in Australia</span>
            <EllipsisHorizontalIcon className="w-[20px]" />
          </div>
          <span className="font-bold text-sm">#S3RL</span>
          <span className="text-[#536471] text-xs"> 23k Bumbles</span>
        </div>
        <div className="flex flex-col py-3  space-y-0.5 ">
          <div
            className="flex justify-between text-[#536471]
          text-[13px]"
          >
            <span>Trending in Australia</span>
            <EllipsisHorizontalIcon className="w-[20px]" />
          </div>
          <span className="font-bold text-sm">#TIMMY4PRESIDENT</span>
          <span className="text-[#536471] text-xs"> 4.4M Bumbles</span>
        </div>
      </div>

      <div className="bg-[#EFF3F4] rounded-xl p-3">
        <h1 className="text-xl font-bold">Who To Follow</h1>

        <div className=" flex justify-between items-center py-3">
          <div className="flex space-x-3 items-center">
            <Image
              className="w-14 h-14 rounded-full"
              src="/assets/tim.jpg"
              width={44}
              height={44}
              alt="Pfp"
            />
            <div className="flex flex-col text-sm">
              <span className="font-bold">Timothy Mota</span>
              <span>@timothymota</span>
            </div>
          </div>

          <button className="bg-[#0F1419] text-white w-[72px] h-[40px] rounded-full text-sm">Follow</button>
        </div>
        <div className=" flex justify-between items-center py-3">
          <div className="flex space-x-3 items-center">
            <Image
              className="w-14 h-14 rounded-full"
              src="/assets/kim.jpg"
              width={44}
              height={44}
              alt="Pfp"
            />
            <div className="flex flex-col text-sm">
              <span className="font-bold">Kim Kardashian</span>
              <span>@kimkardashian</span>
            </div>
          </div>

          <button className="bg-[#0F1419] text-white w-[72px] h-[40px] rounded-full text-sm">Follow</button>
        </div>
        <div className=" flex justify-between items-center py-3">
          <div className="flex space-x-3 items-center">
            <Image
              className="w-14 h-14 rounded-full"
              src="/assets/yeezy.jpeg"
              width={44}
              height={44}
              alt="Pfp"
            />
            <div className="flex flex-col text-sm">
              <span className="font-bold">Kanye West</span>
              <span>@ye</span>
            </div>
          </div>

          <button className="bg-[#0F1419] text-white w-[72px] h-[40px] rounded-full text-sm">Follow</button>
        </div>
      </div>
    </div>
  );
}
