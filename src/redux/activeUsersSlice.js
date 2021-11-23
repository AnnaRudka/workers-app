import { createSlice } from '@reduxjs/toolkit';

let initialState = [];

const reduxState = JSON.parse(localStorage.getItem('reduxState'));

if (reduxState) initialState = reduxState.activeUsers || initialState;

export const slice = createSlice({
  name: 'activeUsers',
  initialState: initialState,
  reducers: {
    addActiveUsers: (state, action) => {
      state.push({ ...action.payload });
      return state;
    },
    deleteActiveUsers: (state, action) => {
      state.splice(
        state.findIndex(item => item.id === action.payload.id),
        1,
      );
      return state;
    },
  },
});

export const { addActiveUsers, deleteActiveUsers } = slice.actions;

export const selectActiveUsers = state => state.activeUsers;

export default slice.reducer;
