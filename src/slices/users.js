import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(
    "https://farmbest-backend.herokuapp.com/users"
  );
  return response.data;
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    loading: false,
    users: null,
  },
  extraReducers: {
    [fetchUsers.fulfilled]: (state, action) => {
      const { users } = action.payload;

      state.users = users;
    },
  },
});

export const usersAction = usersSlice.actions;
export default usersSlice.reducer;
