/*
{
    isLoaded: false
}
*/

import { combineReducers } from "redux";

const isLoaded = (state = false, action) => {
    switch (action.type) {
        case "SET_LOADED":
            return true;
        default:
            return state;
    }
};

export default combineReducers({
    isLoaded,
});