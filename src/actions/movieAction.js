import axios from 'axios';
import {
  GET_MOVIES,
  SET_LOADING,
  MOVIES_ERROR,
  SEARCH_MOVIES,
  CLEAR_SEARCH,
} from './types';

let movieAPI;

if (process.env.NODE_ENV !== 'production') {
  movieAPI = process.env.REACT_APP_THE_MOVIE_DB_API_KEY;
} else {
  movieAPI = process.env.THE_MOVIE_DB_API_KEY;
}

// Get Movies from the movie database
export const getMovies = () => async (dispatch) => {
  try {
    setLoading();
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${movieAPI}`
    );

    dispatch({
      type: GET_MOVIES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: MOVIES_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Search movies
export const searchMovies = (text) => (dispatch) => {
  try {
    setLoading();
    dispatch({
      type: SEARCH_MOVIES,
      payload: text,
    });
  } catch (err) {
    dispatch({
      type: MOVIES_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Clear Search
export const clearSearch = () => (dispatch) => {
  dispatch({ type: CLEAR_SEARCH });
};

// Set Loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
