import { configureStore } from '@reduxjs/toolkit';
import navbarReducer from './navbarSlice.js';

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
  },
  devTools: import.meta.env.DEV,
});
