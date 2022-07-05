import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Grid } from 'react-loader-spinner';

import { LoaderWrap } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderWrap>
      <Grid color="#2196f3" height={80} width={80} />
    </LoaderWrap>
  );
};

export default Loader;
