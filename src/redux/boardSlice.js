import { createSlice } from "@reduxjs/toolkit";

const initialState = Array(8)
  .fill(null)
  .map((_, rowIndex) =>
    Array(8)
      .fill(null)
      .map((_, colIndex) => {
        const isWhite = (rowIndex + colIndex) % 2 === 0;
        return {
          color: isWhite ? "white" : "black",
        };
      })
  );

const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    changeColor: (state, action) => {
      const { rowIndex, colIndex } = action.payload;
      const square = state[rowIndex][colIndex];
      square.color = square.color === "white" ? "yellow" : square.color === "black" ? "red" : square.color;
    },
  },
});

export const { changeColor } = boardSlice.actions;
export default boardSlice.reducer;
