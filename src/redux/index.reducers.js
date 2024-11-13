import { combineReducers, createStore, applyMiddleware } from "redux";
import { thunk } from 'redux-thunk'; // Без фігурних дужок

import { mainPhone } from "./phoneCard/main.reducers";
import { mainForms } from "./forms/main.reducers";

const indexReducer = combineReducers({
    phone: mainPhone,
    form: mainForms
});

export const store = createStore(indexReducer, applyMiddleware(thunk));
