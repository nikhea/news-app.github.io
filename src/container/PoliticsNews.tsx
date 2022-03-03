import { useEffect } from "react";

import Moment from "react-moment";
import "moment-timezone";

import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import {
  Card,
  CardDesc,
  CardDate,
  CardImage,
  CardTitle,
  Col2,
  Grid,
} from "../components/styles/Card.style";
import { Container } from "../components/styles/Container.style";
import { Flex } from "../components/styles/Flex.style";
import {fetchPoliticsData } from "../service/newsApi/NewsApiService";
const News = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPoliticsData());
  }, []);
  const { news } = useSelector((state: RootStateOrAny) => state.news);

  const renderNews = news.map((news: any, index: number) => (
    <Card key={index}>
      <a href={news.url}>
        <Flex>
          <CardImage src={news.urlToImage} />
          <CardTitle> {news.title}</CardTitle>
          <CardDesc>{news.description}</CardDesc>
          <CardDate>
            <Moment format="D MMM YYYY" withTitle>
              {news.publishedAt}
            </Moment>
          </CardDate>
        </Flex>
      </a>
    </Card>
  ));
  return (
    <Container width="90%">
      <Grid>
        <Col2>
          <Flex
            alignItems="start"
            justifyContent=""
            flexDirection="row"
            flexWrap="wrap"
          >
            {renderNews}
          </Flex>
        </Col2>
        <div>
          <h1>rsyersrtsrsy</h1>
          <h1>rsyersrtsrsy</h1>
          <h1>rsyersrtsrsy</h1>
          <h1>rsyersrtsrsy</h1>
          <h1>rsyersrtsrsy</h1>
        </div>
      </Grid>
    </Container>
  );
};

export default News;
