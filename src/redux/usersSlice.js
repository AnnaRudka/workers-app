import { createSlice } from "@reduxjs/toolkit";

let initialState = [];

const reduxState = JSON.parse(localStorage.getItem("reduxState"));

if (reduxState) initialState = reduxState.users || initialState;

export const slice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    addUsers: (state, action) => {
      state.push({ ...action.payload });
      return state;
    },
    deleteUsers: (state, action) => {
      state.splice(
        state.findIndex((item) => item.id === action.payload.id),
        1
      );
      return state;
    },
  },
});

export const { addUsers, deleteUsers } = slice.actions;

export const selectUsers = (state) => state.users;

export default slice.reducer;
