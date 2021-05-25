import { createSlice } from '@reduxjs/toolkit';

const INITIAL_VAlUE = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_VAlUE,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export default authSlice;
export const authActions = authSlice.actions;
