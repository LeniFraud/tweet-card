import { useSelector } from 'react-redux';
import { AuthMenu, NavMenu, UserMenu } from 'layout';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Container, HeaderBox } from './Header.styled';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <HeaderBox>
      <Container>
        <NavMenu />
        {isLoggedIn ? <UserMenu /> : <AuthMenu />}
      </Container>
    </HeaderBox>
  );
};
