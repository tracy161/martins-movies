import { GET_MOVIES, SET_LOADING, MOVIES_ERROR } from '../actions/types';

const initialState = {
  movies: null,
  loading: false,
  error: null,
};

const movieReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case MOVIES_ERROR:
      console.log(payload);
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
