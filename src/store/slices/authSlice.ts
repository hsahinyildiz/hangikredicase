import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  email: string;
}

interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: null
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    restoreSession: (
      state,
      action: PayloadAction<AuthState>
    ) => {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.user = action.payload.user;
    }
  }
});

export const { loginSuccess, logout, restoreSession } = authSlice.actions;
export default authSlice.reducer;
