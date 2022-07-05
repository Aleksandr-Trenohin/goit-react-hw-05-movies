import { MoviesPage } from './Movies.styled';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import * as API from 'service/Api';

import Loader from 'components/Loader/Loader';
import Notification from 'components/Notification/Notification';
import SearchingList from 'components/SearchingList/SearchingList';
import SearchForm from 'components/SearchForm/SearchForm';

const Movies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [searchingMovies, setSearchingMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const page = 1;
  const message = `${query} not found!`;

  useEffect(() => {
    if (query !== '') {
      async function fetchSearchingMovies() {
        try {
          setIsLoading(true);
          const searchingMoviesData = await API.getQueryMovies(query, page);

          setSearchingMovies(searchingMoviesData);
          setIsLoading(false);
        } catch (error) {
          setError(true);
          setIsLoading(false);
        }
      }
      fetchSearchingMovies();
    }
  }, [query]);

  const movieTitle = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <MoviesPage>
      <SearchForm onSubmit={movieTitle} />

      {isLoading && <Loader />}
      {!isLoading &&
        !error &&
        searchingMovies.length !== 0 &&
        searchingMovies.results.length === 0 && (
          <Notification message={message} />
        )}

      {error ? (
        <Notification message="Oop! Something went wrong! Try again later!" />
      ) : (
        searchingMovies.length !== 0 && (
          <SearchingList searchingMovies={searchingMovies} />
        )
      )}
    </MoviesPage>
  );
};

export default Movies;
