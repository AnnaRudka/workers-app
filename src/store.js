import { configureStore } from "@reduxjs/toolkit";
import activeUsersReducer from "./redux/activeUsersSlice";
import usersReducer from "./redux/usersSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    activeUsers: activeUsersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;
