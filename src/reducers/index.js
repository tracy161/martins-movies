import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import watchReducer from './watchReducer';

export default combineReducers({
    movie: movieReducer,
    watching: watchReducer
});
