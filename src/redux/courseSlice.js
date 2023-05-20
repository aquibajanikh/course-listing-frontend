import { createSlice } from "@reduxjs/toolkit";

export const courseSlice = createSlice({
  name: "courses",
  initialState: {
    courses: [],
  },
  reducers: {
    fetchCourses: (state, action) => {
      state.courses = action.payload;
    },
    addCourse: (state, action) => {
      state.courses.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { fetchCourses, addCourse } = courseSlice.actions;

export default courseSlice.reducer;
