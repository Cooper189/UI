import article from './article';
import authorization from './authorization'
import {combineReducers} from 'redux';
import { routeReducer} from 'react-router-redux';
import menu from './menu'

const rootReducers = combineReducers({
    routing: routeReducer,
    article,
    authorization,
    menu
});
export default rootReducers