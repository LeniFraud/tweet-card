import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
// import { useAuth } from 'hooks';
import { routes } from 'utils/routes';
import { Link } from './NavMenu.styled';

export const NavMenu = () => {
  //   const { isLoggedIn } = useAuth();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <Link to={routes.HOME}>Home</Link>
      {isLoggedIn && <Link to={routes.CONTACTS}>Contacts</Link>}
    </nav>
  );
};
