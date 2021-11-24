import { configureStore } from '@reduxjs/toolkit';
import activeUsersReducer from './activeUsersSlice';
import usersReducer from './usersSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    activeUsers: activeUsersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});

export default store;
