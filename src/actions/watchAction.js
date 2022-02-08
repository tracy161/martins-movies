import {
  WATCH_MOVIE,
  SET_LOADING,
  MOVIES_ERROR,
  GET_WATCHED_MOVIE,
} from './types';

export const watchMovie = (id) => async (dispatch) => {
  try {
    setLoading();
    dispatch({
      type: WATCH_MOVIE,
      payload: id,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: MOVIES_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getWatchedMovie = (id) => async (dispatch) => {
  try {
    setLoading();
    dispatch({
      type: GET_WATCHED_MOVIE,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: MOVIES_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Set Loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
