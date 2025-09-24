import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isActive: false,
  lang: "1",
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    onToggleActive: (state) => {
      state.isActive = !state.isActive;
    },
    setLang: (state, { payload }) => {
      state.lang = payload;
    },
  },
});

export const {
    onToggleActive,
    setLang,
} = menuSlice.actions;

export default menuSlice;

