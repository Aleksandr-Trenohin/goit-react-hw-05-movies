import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  max-width: 333px;
  margin: 22px 0;
`;

export const Input = styled.input`
  font-size: 14px;
  width: 222px;
  height: 33px;
  padding: 7px 0;
  padding-left: 13px;
  margin-right: 13px;
  border: 1px solid #94959b;
  border-radius: 3px;

  :focus {
    border: 1px solid #2196f3;
    outline: none;
    box-shadow: 0px 0px 10px rgb(111 111 111 / 55%);
  }
`;
