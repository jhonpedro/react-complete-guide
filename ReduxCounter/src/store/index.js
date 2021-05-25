import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slices/counterSlice';

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

export default store;
