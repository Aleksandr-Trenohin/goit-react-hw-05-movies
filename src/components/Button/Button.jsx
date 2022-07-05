import PropTypes from 'prop-types';

import { Btn } from './Button.styled';

const Button = ({ title }) => {
  return <Btn>{title}</Btn>;
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Button;
