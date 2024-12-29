"use client";

import React, { useState } from "react";
import Image from "next/image";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";
import { useDispatch, useSelector } from "react-redux";
import { signOutUser, signInUser } from "@/redux/slices/userSlice";
import { AppDispatch, RootState } from "@/redux/store";

export default function SideBarUserInfo() {
  const dispatch: AppDispatch = useDispatch();

  const user = useSelector((state: RootState) => state.user) || {};

  console.log(user.name);

  async function handleSignOut() {
    await signOut(auth);
    dispatch(signOutUser());
  }

  return (
    <div
      className="absolute bottom-3 flex items-center space-x-2
          hover:bg-gray-500 hover:bg-opacity-10 xl:p-3 xl:pe-6 rounded-full 
          transition cursor-pointer"
    >
      <Image
        src={"/assets/profile-pic.png"}
        width={36}
        height={36}
        alt="Profile Pic"
        className="w-9 h-9"
      />

      <div className="hidden xl:flex flex-col text-sm">
        <span className="font-bold"></span>
        <span className="text-gray-500">@</span>
      </div>

      <div className="hidden xl:flex flex-col text-sm ms-2 max-w-[130px]">
        <span
          className="text-gray-500 block whitespace-nowrap text-ellipsis overflow-hidden"
          onClick={() => handleSignOut()}
        >
          Log out
        </span>
      </div>
    </div>
  );
}
