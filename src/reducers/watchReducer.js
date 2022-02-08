import {
  WATCH_MOVIE,
  SET_LOADING,
  MOVIES_ERROR,
  GET_WATCHED_MOVIE,
} from '../actions/types';

const initialState = {
  id: null,
  isWatched: false,
  loading: false,
  error: null,
};

const watchReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case WATCH_MOVIE:
      localStorage.setItem('item', payload);
      return {
        ...state,
        id: [payload, ...payload],
        isWatched: true,
        loading: false,
      };
    case GET_WATCHED_MOVIE:
      return {
        ...state,
        id: localStorage.getItem('item'),
        isWatched: true,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case MOVIES_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};

export default watchReducer;
