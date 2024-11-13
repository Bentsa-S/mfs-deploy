import { registrationReducer } from "./registration.reducer";
import { combineReducers } from "redux";

export const mainForms = combineReducers({
    registration: registrationReducer,
});
