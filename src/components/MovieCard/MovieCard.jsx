import { useState, useEffect } from 'react';

import { useParams, useNavigate, useLocation, Outlet } from 'react-router-dom';

import {
  Wrapper,
  Card,
  Description,
  MovieTitle,
  Text,
  Title,
  List,
  Item,
  Add,
  Img,
  LinkStyled,
  Btn,
} from './MovieCard.styled';

import * as API from 'service/Api';

import Loader from 'components/Loader/Loader';
import Notification from 'components/Notification/Notification';

const MovieCard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        setIsLoading(true);
        const movieData = await API.getMovieDetails(id);

        setSelectedMovie(movieData);
        setIsLoading(false);
      } catch (error) {
        setError(true);
        setIsLoading(false);
      }
    }
    fetchMovieDetails();
  }, [id]);

  return (
    <Wrapper>
      {isLoading && <Loader />}

      <Btn type="button" onClick={() => navigate(backLinkHref)}>
        Go back
      </Btn>

      {error ? (
        <Notification message="Oop! Something went wrong! Try again later!" />
      ) : (
        selectedMovie && (
          <Card>
            <Img
              src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
              alt="movie poster"
            />
            <Description>
              <MovieTitle>{selectedMovie.title}</MovieTitle>
              <Text>
                User score: {Math.round(selectedMovie.vote_average * 10)}%
              </Text>
              <Title>Overview</Title>
              <Text> {selectedMovie.overview} </Text>
              <Title>Genres</Title>
              <Text>
                {selectedMovie.genres.map(item => item.name).join(' ')}
              </Text>
            </Description>
          </Card>
        )
      )}

      <Add>Additional information</Add>
      <List>
        <Item>
          <LinkStyled to="cast">Cast</LinkStyled>
        </Item>
        <Item>
          <LinkStyled to="reviews">Reviews</LinkStyled>
        </Item>
      </List>
      <Outlet />
    </Wrapper>
  );
};

export default MovieCard;
