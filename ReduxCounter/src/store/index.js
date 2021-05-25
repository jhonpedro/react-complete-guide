import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import counterSlice from './slices/counterSlice';

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export default store;
