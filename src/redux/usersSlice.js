import { createSlice } from "@reduxjs/toolkit";

let initialState = [];

export const slice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    setUsers: (state, action) => {
      state.push({ ...action.payload });
      return state;
    },
  },
});

export const { setUsers } = slice.actions;

export const selectUsers = (state) => state.users;

export default slice.reducer;
