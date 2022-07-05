import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding: 0 33px;
  background-color: #fff;
`;
export const HeaderBar = styled.header`
  padding: 22px 0;
  padding-left: 44px;
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  z-index: 1100;
  background-color: #f2f2f2;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 22px;
`;
export const LinkStyled = styled(NavLink)`
  font-size: 20px;
  line-height: 1.2;
  font-weight: 500;
  color: black;
  &:hover,
  &:focus {
    color: red;
  }
  &.active {
    color: red;
  }
`;
