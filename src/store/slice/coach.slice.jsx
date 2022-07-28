import { createSlice } from "@reduxjs/toolkit";

export const coachSlice = createSlice({
  name: "coach",
  initialState: "",
  reducers: {
    changeCoach: (state, action) => {
      return action.payload;
    },
  },
});

export const { changeCoach } = coachSlice.actions;

export default coachSlice.reducer;
