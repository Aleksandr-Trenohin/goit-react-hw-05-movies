import PropTypes from 'prop-types';
import { useState } from 'react';

import Button from 'components/Button/Button';

import { Form, Input } from './SearchForm.styled';

import { Notify } from 'notiflix';

const SearchForm = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleChange = evt => {
    setInput(evt.currentTarget.value.toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (input.trim() === '') {
      Notify.warning('Please enter a title');
      return;
    }

    onSubmit(input);
    setInput('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="title"
        value={input}
        onChange={handleChange}
        autoComplete="off"
        autoFocus
        placeholder="Search movies..."
      />
      <Button title="Search" type="submit" />
    </Form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
