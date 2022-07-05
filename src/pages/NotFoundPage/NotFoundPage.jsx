import { LinkStyled, NotFound } from './NotFoundPage.styled';

const NotFoundPage = () => {
  return (
    <NotFound>
      Извините, страница не найдена! Перейдите на страницу{' '}
      <LinkStyled to="/"> Home</LinkStyled>
    </NotFound>
  );
};

export default NotFoundPage;
