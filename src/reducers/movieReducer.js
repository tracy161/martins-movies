import {
  GET_MOVIES,
  SET_LOADING,
  MOVIES_ERROR,
  SEARCH_MOVIES,
  CLEAR_SEARCH,
} from '../actions/types';

const initialState = {
  movies: null,
  filtered: null,
  currentPage: 1,
  totalResults: 0,
  totalPages: 0,
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
        currentPage: payload.page,
        totalResults: payload.total_results,
        totalPages: payload.total_pages,
        loading: false,
      };
    case SEARCH_MOVIES:
      return {
        ...state,
        filtered: state.movies.results.filter(({ title }) => {
          const testString = `${title}`.toLowerCase();
          return testString.includes(payload.toLowerCase());
        }),
        loading: false,
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        filtered: null,
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
