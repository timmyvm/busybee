import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: "",
    username: "",
    email: "",
    uid: ""
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInUser: (state, action) => {
        state.name = action.payload
        state.username = action.payload
        state.email = action.payload
        state.uid = action.payload
    },
    signOutUser: (state) => {
        state.name = ''
        state.username = ''
        state.email = ''
        state.uid = ''
    }
  }
});

export const {signInUser, signOutUser} = userSlice.actions

export default userSlice.reducer    