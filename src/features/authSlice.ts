import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchUser = createAsyncThunk('auth/fetchUser', async () => {
    const response = await fetch('/api/user');
    return response.json();
  });
interface AuthState {
  isAuthenticated: boolean;
  user: null | { id: string; name: string };
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
      });
    },
  });

export default authSlice.reducer;