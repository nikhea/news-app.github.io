import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "./components/styles/Global";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import "./App.css";
import { fetchData } from "./services/newsApi/NewsApiService";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  const { news } = useSelector((state: RootStateOrAny) => state.news);

  const renderNews = news.map((news: any, index: number) => (
    <div key={index}>
      {news.title}
      <img src={news.urlToImage} />
    </div>
  ));
  return (
    <ThemeProvider theme={theme}>
       <>
       <GlobalStyle/>
      {renderNews}
      </>
    </ThemeProvider>
  );
}
export default App;
