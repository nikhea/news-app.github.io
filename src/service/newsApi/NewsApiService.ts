import axios from "axios";
import {
  loadNewsError,
  loadNews,
  loadNewsSuccess,
} from "../../features/NewsAPI/NewsAPISlice";
import { url } from "./URLS";

export function fetchData() {
  return async (dispatch: (arg0: { payload: any; type: string }) => void) => {
    dispatch(loadNews());
    try {
      const response = await axios.get(`${url.Golbal}`);
      const data = await response.data;
      console.log("jdsdh", data.articles[0].title);
      console.log("jdsdh", data.articles);

      dispatch(loadNewsSuccess(data.articles));
    } catch (error) {
      console.log("error", error);
      dispatch(loadNewsError(error));
    }
  };
}

export function fetchTechData() {
  return async (dispatch: (arg0: { payload: any; type: string }) => void) => {
    dispatch(loadNews());
    try {
      const response = await axios.get(`${url.tech}`);
      const data = await response.data;
      dispatch(loadNewsSuccess(data.articles));
    } catch (error) {
      console.log("error", error);
      dispatch(loadNewsError(error));
    }
  };
}
export function fetchBusinessData() {
  return async (dispatch: (arg0: { payload: any; type: string }) => void) => {
    dispatch(loadNews());
    try {
      const response = await axios.get(`${url.business}`);
      const data = await response.data;
      dispatch(loadNewsSuccess(data.articles));
    } catch (error) {
      console.log("error", error);
      dispatch(loadNewsError(error));
    }
  };
}


export function fetchHealthsData() {
  return async (dispatch: (arg0: { payload: any; type: string }) => void) => {
    dispatch(loadNews());
    try {
      const response = await axios.get(`${url.health}`);
      const data = await response.data;
      dispatch(loadNewsSuccess(data.articles));
    } catch (error) {
      console.log("error", error);
      dispatch(loadNewsError(error));
    }
  };
}

console.log("data :golbal");
