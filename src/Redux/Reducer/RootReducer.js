import { combineReducers } from "redux";
import { AlertReducer } from "./Alert.Reducer";
import { AuthReducer } from "./Auth.Reducer";

export const RootReducer = combineReducers({
    auth:AuthReducer,
    alert:AlertReducer
})