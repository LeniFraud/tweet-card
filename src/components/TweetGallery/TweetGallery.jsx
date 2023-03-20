import stats from '../../data/stats';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { TweetCard } from 'components';
import { Container, List, Section } from './TweetGallery.styled';

export const TweetGallery = () => {
  const [users, setUsers] = useLocalStorage('users', stats);

  const toggleFollow = id => {
    const currentUser = users.find(user => user.id === id);

    if (!currentUser.isFollow) {
      currentUser.isFollow = true;
      currentUser.followers += 1;
    } else {
      currentUser.isFollow = false;
      currentUser.followers -= 1;
    }

    setUsers(prevUsers =>
      prevUsers.map(user => {
        return user.id !== id ? user : currentUser;
      })
    );
  };

  return (
    <Section>
      <Container>
        <List>
          {users.map(user => (
            <TweetCard key={user.id} user={user} toggleFollow={toggleFollow} />
          ))}
        </List>
      </Container>
    </Section>
  );
};
