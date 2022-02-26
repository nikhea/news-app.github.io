import { useEffect } from "react";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { fetchData } from "../service/newsApi/NewsApiService";
const News = () => {
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
    <div>
      News
      <>{renderNews}</>
    </div>
  );
};

export default News;
