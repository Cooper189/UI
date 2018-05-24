import article from './article';
import authorization from './authorization'
import {combineReducers} from 'redux';
import { routeReducer} from 'react-router-redux';
import menu from './menu';
import grid from './grid.reducer';

const rootReducers = combineReducers({
    routing: routeReducer,
    article,
    grid,
    authorization,
    menu
});
export default rootReducers