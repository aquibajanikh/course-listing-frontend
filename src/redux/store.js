import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./courseSlice";
import supportReducer from "./supportSlice";

export default configureStore({
  reducer: {
    courses: courseReducer,
    supportMessages: supportReducer,
  },
});
