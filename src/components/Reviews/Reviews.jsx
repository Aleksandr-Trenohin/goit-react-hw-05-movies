import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { Item, List, Message, Title, Text } from './Reviews.styled';

import * as API from 'service/Api';

import Loader from 'components/Loader/Loader';

const Reviews = () => {
  const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(false);
  const [reviews, setReviews] = useState(null);
  // ?  const { results, total_pages } = reviews;
  const page = 1;

  const { id } = useParams();

  useEffect(() => {
    async function fetchMovieReviews() {
      try {
        setIsLoading(true);
        const reviewsData = await API.getMovieReviews(id, page);

        setReviews(reviewsData);
      } catch (error) {
        // setError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovieReviews();
  }, [id]);

  return (
    <>
      {isLoading && <Loader />}

      {reviews && reviews.total_pages === 0 && (
        <Message>We don't have any reviews for this movie.</Message>
      )}
      {reviews &&
        reviews.results.map(({ id, author, content }) => (
          <List>
            <Item key={id}>
              <Title>Author: {author}</Title>
              <Text>{content}</Text>
            </Item>
          </List>
        ))}
    </>
  );
};

export default Reviews;
