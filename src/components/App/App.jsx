import { useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { nanoid } from 'nanoid';
import {
  Container,
  ContactForm,
  Filter,
  ContactList,
  Notification,
} from 'components';
import { Title } from './App.styled';

// const defaultContacts = [
//   { id: 'id-1', name: 'The Shrike', number: '444-88-77' },
//   { id: 'id-2', name: 'Lamia Brawne', number: '555-12-98' },
//   { id: 'id-3', name: 'Fedmahn Kassad', number: '123-69-69' },
//   { id: 'id-4', name: 'Martin Silenus', number: '666-66-66' },
//   { id: 'id-5', name: 'Jonh Keats', number: '089-80-07' },
//   { id: 'id-6', name: 'Rachel Weintraub', number: '333-58-69' },
// ];

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    const isContactExists = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isContactExists) {
      alert(`Contact ${name} already exists!`);
      return false;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(prevContacts => [newContact, ...prevContacts]);
    return true;
  };

  const deleteContact = contactId =>
    setContacts(contacts.filter(contact => contact.id !== contactId));

  const filterChange = e => setFilter(e.currentTarget.value);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const isFilteredContacts = getVisibleContacts().length;
  const isSavedContacts = contacts.length;

  return (
    <Container title="Phonebook">
      <ContactForm onSubmit={addContact} />
      <Title>Contacts</Title>
      {!!isSavedContacts && (
        <Filter value={filter} onFilterChange={filterChange} />
      )}
      {!!isFilteredContacts && (
        <ContactList
          contacts={getVisibleContacts()}
          onDeleteContact={deleteContact}
        />
      )}
      {!isSavedContacts && (
        <Notification message="There are no contacts yet. Please, add someone!" />
      )}
      {!!isSavedContacts && !isFilteredContacts && (
        <Notification message="No contacts found..." />
      )}
    </Container>
  );
};
