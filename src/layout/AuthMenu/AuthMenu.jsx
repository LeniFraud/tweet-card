import { routes } from 'utils/routes';
import { Link } from './AuthMenu.styled';

export const AuthMenu = () => {
  return (
    <div>
      <Link to={routes.REGISTER}>Register</Link>
      <Link to={routes.LOGIN}>Log In</Link>
    </div>
  );
};
