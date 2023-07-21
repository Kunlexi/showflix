import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  imgUrl: "",
  title: "",
  id: "",
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    updateMovie: (state, action) => {
      state.imgUrl = action.payload.imgUrl;
      state.title = action.payload.title;
      state.id = action.payload.id;
    },
  },
});

export const { updateMovie } = movieSlice.actions;
export default movieSlice.reducer;
