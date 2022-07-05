import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

import { Container, HeaderBar, LinkStyled, Nav } from './SharedLayout.styled';

import Loader from 'components/Loader/Loader';

const SharedLayout = () => {
  return (
    <Container>
      <HeaderBar>
        <Nav>
          <LinkStyled to="/">Home</LinkStyled>
          <LinkStyled to="/movies">Movies</LinkStyled>
        </Nav>
      </HeaderBar>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
