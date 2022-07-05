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
    margin-bottom: 7px;
  }
`;
export const Title = styled.h3`
  font-size: 14px;
  line-height: 1.18;
  margin: 11px 0;
`;
export const Text = styled.p`
  font-size: 14px;
`;
