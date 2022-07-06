import { useState, useEffect } from 'react';

import { useParams, useNavigate, useLocation, Outlet } from 'react-router-dom';

import { MdOutlineKeyboardBackspace } from 'react-icons/md';

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

  const baseImgUrl = 'https://image.tmdb.org/t/p/w500';
  const defaultPoster =
    'https://www.pngkey.com/png/detail/483-4837105_clipart-free-stock-movie-projector-clipart-movie-projector.png';

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        setIsLoading(true);
        const movieData = await API.getMovieDetails(id);

        setSelectedMovie(movieData);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovieDetails();
  }, [id]);

  return (
    <Wrapper>
      {isLoading && <Loader />}
      <Btn type="button" onClick={() => navigate(backLinkHref)}>
        <MdOutlineKeyboardBackspace size="18px" />
        Go back
      </Btn>

      {error ? (
        <Notification message="Oop! Something went wrong! Try again later!" />
      ) : (
        selectedMovie && (
          <Card>
            <Img
                            src={
                selectedMovie.poster_path
                  ? `${baseImgUrl}${selectedMovie.poster_path}`
                  : `${defaultPoster}`
              }
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
          <LinkStyled
                        to={`/movies/${id}/cast`}
            state={{ from: backLinkHref }}
          >
            Cast
          </LinkStyled>
        </Item>
        <Item>
          <LinkStyled
                        to={`/movies/${id}/reviews`}
            state={{ from: backLinkHref }}
          >
            Reviews
          </LinkStyled>
        </Item>
      </List>
      <Outlet />
    </Wrapper>
  );
};

export default MovieCard;
