import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import {
  Container,
  ContactForm,
  Filter,
  ContactList,
  Loader,
  Notification,
} from 'components';
import { Title } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container title="Phonebook">
      <ContactForm />
      <Title>Contacts</Title>
      {!!contacts?.length && <Filter />}
      {isLoading && <Loader />}
      {!error ? (
        <ContactList />
      ) : (
        <Notification message="Ooops! Something went wrong..." />
      )}
    </Container>
  );
};
