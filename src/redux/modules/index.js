import { combineReducers } from "redux";

import entities from "./entities";
import app from "./app";
import detail from "./detail";
import home from './home';
import search from './search';
import login from './login';

export const rootReducer = combineReducers({
    entities,
    app,
    detail,
    home,
    search,
    login
});

export default rootReducer;
