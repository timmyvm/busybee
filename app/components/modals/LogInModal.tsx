"use client";

import { Modal } from "@mui/material";
import { AppDispatch, RootState } from "@/redux/store";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeLogInModal, openLogInModal } from "@/redux/slices/modalSlice";
import { EyeIcon, EyeSlashIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function LogInModal() {

  const [showPassword, setShowPassword] = useState(false)

  const isOpen = useSelector(
    (state: RootState) => state.modals.LogInModalOpen
  );

  const dispatch: AppDispatch = useDispatch();

  return (
    <>
      <button className="hover:bg-white hover:bg-opacity-25 transition w-full h-[48px] 
        rounded-full md:w-[88px] md:h-[40px] md:text-sm text-md border-2
         border-gray-100 text-white font-bold"
         
         onClick={() => dispatch(openLogInModal())}>Login</button>

      <Modal
        open={isOpen}
        onClose={() => dispatch(closeLogInModal())}
        className="flex justify-center items-center"
      >
        <div
          className="w-full h-full  sm:w-[600px] sm:h-fit sm:rounded-xl
         bg-white "
        >

          <XMarkIcon className="w-7 h-7 mt-5 ms-5 cursor-pointer"
          onClick={() => dispatch(closeLogInModal())} />

          <form className="pt-10 pb-20 px-4 sm:px-20">
            <h1 className="text-3xl font-bold mb-10">Login to busy bee</h1>
            <div className="w-full space-y-5 mb-10">

              <input
                type="email"
                className="w-full h-[54px] border border-gray-200 
              outline-none ps-3 rounded-[4px] focus:border-[#F4AF01] transition"
                placeholder="Email"
              />

              <div
                className="w-full h-[54px] border border-gray-200 
              outline-none rounded-[4px] focus-within:border-[#F4AF01] transition 
              flex items-center overflow-hidden pr-3"
              >
                <input
                  className="ps-3 w-full h-full outline-none"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                />
                <div onClick={() => setShowPassword(!showPassword)}
                className="w-7 h-7 text=gray-400 cursor-pointer">
                  {showPassword ?  <EyeSlashIcon/> : <EyeIcon/> }
                </div>
              </div>
            </div>

            <button className="bg-[#F4AF01] text-white h-[48px] rounded-full 
            shadow-md w-full mb-5 ">Log In</button>
            <span className="mb-5 text-sm text-center block">Or</span>
            <button className="bg-[#F4AF01] text-white h-[48px] rounded-full 
            shadow-md w-full  ">Log In as Guest</button>
          </form>
        </div>
      </Modal>
    </>
  );
}
