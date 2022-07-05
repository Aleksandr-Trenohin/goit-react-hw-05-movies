import { HomePage, Title } from './Home.styled';

import TrendingList from 'components/TrendingList/TrendingList';

const Home = () => {
  return (
    <HomePage>
      <Title>Trending today</Title>
      <TrendingList />
    </HomePage>
  );
};

export default Home;
