import PropTypes from 'prop-types';

import { useLocation } from 'react-router-dom';

import { Item, LinkStyled, List } from './SearchingList.styled';

const SearchingList = ({ searchingMovies }) => {
  const { results } = searchingMovies;
  // ? page, total_pages

  const location = useLocation();

  return (
    <List>
      {results.map(({ title, id }) => (
        <Item key={id}>
          <LinkStyled to={`${id}`} state={{ from: location }}>
            {title}
          </LinkStyled>
        </Item>
      ))}
    </List>
  );
};

SearchingList.propTypes = {
  searchingMovies: PropTypes.object.isRequired,
};

export default SearchingList;
