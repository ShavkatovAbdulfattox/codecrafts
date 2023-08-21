import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedId: null,
};

export const leftSideSlice = createSlice({
  name: "leftSide",
  initialState,
  reducers: {
    setSelectedId: (state, action) => {
      state.selectedId = action.payload;
    },
  },
});

export const { setSelectedId } = leftSideSlice.actions;

export default leftSideSlice.reducer;
