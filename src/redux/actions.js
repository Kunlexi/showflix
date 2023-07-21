export const SET_MOVIE = "SET_MOVIE";

export const setMovie = (movie) => (dispatch) => {
  dispatch({
    type: SET_MOVIE,
    payload: movie,
  });
};
