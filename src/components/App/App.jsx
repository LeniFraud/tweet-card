import { useSelector } from 'react-redux';
import { getContactsValue } from 'redux/selectors';
import { Container, ContactForm, Filter, ContactList } from 'components';
import { Title } from './App.styled';

export const App = () => {
  const contacts = useSelector(getContactsValue);

  return (
    <Container title="Phonebook">
      <ContactForm />
      <Title>Contacts</Title>
      {!!contacts.length && <Filter />}
      <ContactList />
    </Container>
  );
};
