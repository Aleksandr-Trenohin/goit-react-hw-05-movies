import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const NotFound = styled.h2`
  padding-top: 88px;
  text-align: center;
`;
export const LinkStyled = styled(Link)`
  color: #2196f3;
  &:hover,
  &:focus {
    color: red;
  }
`;
