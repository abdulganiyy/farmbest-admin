import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchInvestment = createAsyncThunk(
  "investment/fetchInvestment",
  async (id) => {
    const response = await axios.get(
      `https://farmbest-backend.herokuapp.com/investments/${id}`
    );
    return response.data;
  }
);

export const updateInvestment = createAsyncThunk(
  "investment/updateInvestment",
  async (data) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.patch(
      `https://farmbest-backend.herokuapp.com/investments/${data.id}`,
      { ...data.data },
      config
    );
    return response.data;
  }
);

const investmentSlice = createSlice({
  name: "investment",
  initialState: {
    loading: false,
    investment: null,
  },
  extraReducers: {
    [fetchInvestment.fulfilled]: (state, action) => {
      const { investment } = action.payload;

      state.investment = investment;
    },
    [updateInvestment.fulfilled]: (state, action) => {
      const { investment } = action.payload;

      state.investment = investment;
    },
  },
});

export const investmentAction = investmentSlice.actions;
export default investmentSlice.reducer;
