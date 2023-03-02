import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
// import { useAuth } from 'hooks';
import { selectUserName } from 'redux/auth/selectors';
import defaultAvatar from './default-avatar.png';
import { Wrapper, Avatar, Name } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);
  const avatar = defaultAvatar;

  return (
    <Wrapper>
      <Avatar src={avatar} alt="User Avatar" />
      <Name>Welcome, {name}</Name>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </Wrapper>
  );
};
