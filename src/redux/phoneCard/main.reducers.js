import { combineReducers } from "redux";
import { phoneCardReducer } from "./phoneCard.reducer";
import { phonePageReducer } from "./phonePage";

export const mainPhone = combineReducers({
    cards: phoneCardReducer,
    page: phonePageReducer
});
