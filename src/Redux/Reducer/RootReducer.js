import { combineReducers } from "redux";
import { AuthReducer } from "./Auth.Reducer";

export const RootReducer = combineReducers({
    auth:AuthReducer
})