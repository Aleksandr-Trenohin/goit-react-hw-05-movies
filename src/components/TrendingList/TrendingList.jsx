import { useState, useEffect } from 'react';

import { Item, LinkStyled, List } from './TrendingList.styled';

import * as API from 'service/Api';

import Loader from 'components/Loader/Loader';
import Notification from 'components/Notification/Notification';

const TrendingList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [trendingMovies, setTrendingMovies] = useState([]);
  // ? const { results, page, total_pages } = trendingMovies;

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        setIsLoading(true);
        const trendingMoviesData = await API.getTrendingMovies();

        setTrendingMovies(trendingMoviesData.results);
        setIsLoading(false);
      } catch (error) {
        setError(true);
        setIsLoading(false);
      }
    }
    fetchTrendingMovies();
  }, []);

  return (
    <List>
      {isLoading && <Loader />}
      {error ? (
        <Notification message="Oop! Something went wrong! Try again later!" />
      ) : (
        trendingMovies.map(({ title, id }) => (
          <Item key={id}>
            <LinkStyled to={`/movies/${id}`}>{title}</LinkStyled>
          </Item>
        ))
      )}
    </List>
  );
};

export default TrendingList;
