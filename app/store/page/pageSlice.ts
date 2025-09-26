import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const pageSlice = createSlice({
  name: "page",
  initialState: {
    value: 1,
  },
  reducers: {
    incrementPage: (state) => {
      state.value += 1;
    },
    decrementPage: (state) => {
      if (state.value > 1) {
        state.value -= 1;
      }
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { incrementPage, decrementPage, setPage } = pageSlice.actions;
export default pageSlice;
