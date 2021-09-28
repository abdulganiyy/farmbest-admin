import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk("auth/login", async (data) => {
  const response = await axios.post(
    "https://farmbest-backend.herokuapp.com/users/login",
    data
  );
  return response.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    user: null,
    loggedIn: false,
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      const { user, token } = action.payload;
      console.log(user);
      localStorage.setItem("token", token);
      state.user = user;
      state.loggedIn = true;
    },
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.loggedIn = false;
      localStorage.removeItem("token");
    },
  },
});

export const authAction = authSlice.actions;
export default authSlice.reducer;
