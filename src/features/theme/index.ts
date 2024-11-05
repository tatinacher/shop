import { createSlice } from "@reduxjs/toolkit";

export interface ThemeState {
  value: boolean;
}

const initialState: ThemeState = {
  value: false,
};

export const themeSlice = createSlice({
  name: "isDarkTheme",
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggle } = themeSlice.actions;

export default themeSlice.reducer;
