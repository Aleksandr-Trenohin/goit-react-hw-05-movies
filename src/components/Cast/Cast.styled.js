import styled from 'styled-components';

export const Message = styled.p`
  font-size: 16px;
`;

export const List = styled.ul`
  padding-left: 18px;
  margin: 13px auto;
`;
export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 13px;
  }
`;

export const Img = styled.img`
  width: 111px;
  border-radius: 3px;
`;
export const Text = styled.p`
  margin-top: 7px;
  font-size: 14px;
  line-height: 1.16;
`;
