
import axios from "axios";
import {
  loadNewsError,
  loadNews,
  loadNewsSuccess,
} from "../../features/NewsAPI/NewsAPISlice";

// const API = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.REACT_API_KEY}`;
const API =
  "https://newsapi.org/v2/everything?q=travel&from=2022-01-25&sortBy=publishedAt&apiKey=2eab312599424811b5e1807b3d859a40";

export function fetchData() {
  return async (dispatch: (arg0: { payload: any; type: string }) => void) => {
    dispatch(loadNews());
    try {
      const response = await axios.get(`${API}`);
      const data = await response.data;
      // console.log("jdsdh", data.articles[0].title);
      console.log("jdsdh", data.articles);

      dispatch(loadNewsSuccess(data.articles));
    } catch (error) {
      console.log("error", error);
      dispatch(loadNewsError(error));
    }
  };
}
// console.log("ress", response.data.articles);

console.log("data :golbal");
