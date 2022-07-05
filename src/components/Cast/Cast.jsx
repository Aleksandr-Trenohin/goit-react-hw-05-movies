import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { Img, Item, List, Text, Message } from './Cast.styled';

import * as API from 'service/Api';

import Loader from 'components/Loader/Loader';

const Cast = () => {
  const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(false);
  const [cast, setCast] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    async function fetchMovieCast() {
      try {
        setIsLoading(true);
        const castData = await API.getMovieCast(id);

        setCast(castData.cast);
        setIsLoading(false);
      } catch (error) {
        // setError(true);
        console.log(error);
        setIsLoading(false);
      }
    }
    fetchMovieCast();
  }, [id]);

  return (
    <List>
      {isLoading && <Loader />}

      {cast && cast.length === 0 && (
        <Message>We don't have any cast for this movie.</Message>
      )}
      {cast &&
        cast
          .slice(0, 12)
          .map(({ cast_id, profile_path, original_name, character }) => (
            <Item key={cast_id}>
              <Img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt="profile portrait"
              />
              <Text>{original_name}</Text>
              <Text>Character: {character}</Text>
            </Item>
          ))}
    </List>
  );
};

export default Cast;
