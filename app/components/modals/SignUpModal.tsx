"use client";

import { Modal } from "@mui/material";
import { AppDispatch, RootState } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeSignupModal, openSignUpModal } from "@/redux/slices/modalSlice";
import { EyeIcon, EyeSlashIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import { auth } from "@/firebase";
import { signInUser } from "@/redux/slices/userSlice";

export default function SignUpModal() {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isOpen = useSelector(
    (state: RootState) => state.modals.signUpModalOpen
  );

  const dispatch: AppDispatch = useDispatch();

  async function handleSignup(event: React.FormEvent) {
    event.preventDefault();
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth, email, password,
      );

      console.log(userCredentials);

      await updateProfile(userCredentials.user, {
        displayName: name || email.split('@')[0],
      });

      dispatch(signInUser(
        {
          name: userCredentials.user.displayName,
          username: userCredentials.user.email!.split('@')[0],
          uid: userCredentials.user.uid,
          email: userCredentials.user.email,
        }
      ));

      dispatch(closeSignupModal());
    } catch (error) {
      console.error("Error signing up:", error);
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) return;
      dispatch(signInUser(
        {
          username: currentUser.email!.split('@')[0],
          uid: currentUser.uid,
          email: currentUser.email,
          displayName: currentUser.displayName,
        }
      ));
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <>
      <button
        className="w-full h-[48px] md:w-[88px] md:h-[40px] md:text-sm text-md 
    font-bold bg-white rounded-full"
        onClick={() => dispatch(openSignUpModal())}
      >
        Sign Up
      </button>

      <Modal
        open={isOpen}
        onClose={() => dispatch(closeSignupModal())}
        className="flex justify-center items-center"
      >
        <div
          className="w-full h-full  sm:w-[600px] sm:h-fit sm:rounded-xl
         bg-white "
        >

          <XMarkIcon className="w-7 h-7 mt-5 ms-5 cursor-pointer"
          onClick={() => dispatch(closeSignupModal())} />

          <div className="pt-10 pb-20 px-4 sm:px-20">
            <h1 className="text-3xl font-bold mb-10">Create your account</h1>
            <form onSubmit={handleSignup}>
              <div className="w-full space-y-5 mb-10">
                <input
                  type="text"
                  className="w-full h-[54px] border border-gray-200 
                outline-none ps-3 rounded-[4px] focus:border-[#F4AF01] transition"
                  placeholder="Name"
                  onChange={(event) => setName(event.target.value)}
                  value={name}
                />

                <input
                  type="email"
                  className="w-full h-[54px] border border-gray-200 
                outline-none ps-3 rounded-[4px] focus:border-[#F4AF01] transition"
                  placeholder="Email"
                  onChange={(event) => setEmail(event.target.value)}
                  value={email}
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
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
                  />
                  <div onClick={() => setShowPassword(!showPassword)}
                  className="w-7 h-7 text=gray-400 cursor-pointer">
                    {showPassword ?  <EyeSlashIcon/> : <EyeIcon/> }
                  </div>
                </div>
              </div>

              <button className="bg-[#F4AF01] text-white h-[48px] rounded-full 
              shadow-md w-full mb-5 " type="submit">Sign up</button>
            </form>
            <span className="mb-5 text-sm text-center block">Or</span>
            <button className="bg-[#F4AF01] text-white h-[48px] rounded-full 
            shadow-md w-full  ">Log In as Guest</button>
          </div>
        </div>
      </Modal>
    </>
  );
}
