import { combineReducers } from "redux";
import newsSlice from "./NewsAPI/NewsAPISlice"

const rootReducer = combineReducers({
    news:newsSlice
});

export default rootReducer;
