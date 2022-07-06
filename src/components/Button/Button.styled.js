import styled from 'styled-components';

export const Btn = styled.button`
  font-size: 14px;
  height: 33px;
  border-radius: 5px;
  padding: 3px 13px;
  border: 1px solid #d1cccc;
  background-color: #fff;
  &:hover,
  &:focus {
    color: red;
    box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),
      1px 4px 6px rgb(0 0 0 / 16%);
  }
`;
