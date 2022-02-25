import { combineReducers } from "redux";
import newsSlice from "./NewsAPI/NewsAPISlice"

const rootReducer = combineReducers({
    newsSlice
});

export default rootReducer;
