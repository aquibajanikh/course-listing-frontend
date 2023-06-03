import { createSlice } from "@reduxjs/toolkit";

export const supportSlice = createSlice({
  name: "supportMessages",
  initialState: {
    supportMessages: [],
  },
  reducers: {
    fetchMessages: (state, action) => {
      state.supportMessages = action.payload;
    },
    addMessage: (state, action) => {
      state.supportMessages.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { fetchMessages, addMessage } = supportSlice.actions;

export default supportSlice.reducer;
