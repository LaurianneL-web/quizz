import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import appReducer from "./reducers/app";
import playersReducer from "./reducers/players";

const createRootReducer = history =>
    combineReducers({
        router: connectRouter(history),
        app: appReducer,
        players : playersReducer
    });

export default createRootReducer;