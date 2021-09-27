import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchInvestments = createAsyncThunk(
  "investments/fetchInvestments",
  async () => {
    const response = await axios.get(
      "https://farmbest-backend.herokuapp.com/investments/"
    );
    return response.data;
  }
);

const investmentsSlice = createSlice({
  name: "investments",
  initialState: {
    loading: false,
    investments: null,
  },
  extraReducers: {
    [fetchInvestments.fulfilled]: (state, action) => {
      const { investments } = action.payload;

      state.investments = investments;
    },
  },
});

export const investmentsAction = investmentsSlice.actions;
export default investmentsSlice.reducer;
