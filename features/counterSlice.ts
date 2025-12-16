import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const counterReducer = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    payloadAmount: (state, action: PayloadAction<number>) =>
      state + action.payload,
  },
});
export const { increment, decrement, payloadAmount } = counterReducer.actions;

export default counterReducer.reducer;
