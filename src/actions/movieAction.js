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
  movieAPI = process.env.REACT_APP_THE_MOVIE_DB_API_KEY;
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

export const nextPage = (pageNumber) => async (dispatch) => {
  try {
    setLoading();
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${movieAPI}&page=${pageNumber}`
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
// export const searchMovies = (text) => (dispatch) => {
//   try {
//     setLoading();
//     dispatch({
//       type: SEARCH_MOVIES,
//       payload: text,
//     });
//   } catch (err) {
//     dispatch({
//       type: MOVIES_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status },
//     });
//   }
// };

export const searchMovies = (searchTerm) => async (dispatch) => {
  try {
    setLoading();
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${movieAPI}&query=${searchTerm}`
    );
    dispatch({
      type: SEARCH_MOVIES,
      payload: res.data,
      param: searchTerm,
    });
  } catch (err) {
    dispatch({
      type: MOVIES_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const nextSearchPage = (pageNumber, searchTerm) => async (dispatch) => {
  try {
    setLoading();
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${movieAPI}&query=${searchTerm}&page=${pageNumber}`
    );

    dispatch({
      type: SEARCH_MOVIES,
      payload: res.data,
      param: searchTerm,
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
