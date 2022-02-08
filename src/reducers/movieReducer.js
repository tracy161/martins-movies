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
  searchTerm: '',
  loading: false,
  error: null,
};

const movieReducer = (state = initialState, action) => {
  const { type, payload, param } = action;
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
        filtered: payload,
        currentPage: payload.page,
        totalResults: payload.total_results,
        totalPages: payload.total_pages,
        searchTerm: param,
        loading: false,
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        filtered: null,
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

export default movieReducer;
