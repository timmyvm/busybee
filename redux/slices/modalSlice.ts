import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    signUpModalOpen: false, 
    LogInModalOpen: false,
}

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openSignUpModal: (state) => {
        state.signUpModalOpen = true;
    }, closeSignupModal: (state) => {
        state.signUpModalOpen = false;
    },
    openLogInModal: (state) => {
        state.LogInModalOpen = true;
    }, closeLogInModal: (state) => {
        state.LogInModalOpen = false;
    }
  }
});

export const {openSignUpModal, closeSignupModal, openLogInModal, closeLogInModal} = modalSlice.actions

export default modalSlice.reducer