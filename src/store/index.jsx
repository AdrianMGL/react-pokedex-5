import { configureStore } from "@reduxjs/toolkit";
import coachSlice from "./slice/coach.slice";

export default configureStore({
  reducer: {
    coach: coachSlice,
  },
});
