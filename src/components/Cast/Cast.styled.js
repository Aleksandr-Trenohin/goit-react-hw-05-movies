import styled from 'styled-components';

export const Message = styled.p`
  font-size: 16px;
`;

export const List = styled.ul`
  padding-left: 18px;
  margin: 13px auto;

  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(165px, 1fr));
  grid-gap: 33px;

  padding: 0;
  list-style: none;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 3px;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
`;

export const Img = styled.img`
  width: 226px;
  height: 288px;
  object-fit: cover;
  border-radius: 3px;
`;
export const Wrap = styled.div`
  padding: 7px 11px;
`;
export const Text = styled.p`
  font-size: 14px;
  line-height: 1.16;
  :not(:last-child) {
    margin-bottom: 11px;
  }
`;
