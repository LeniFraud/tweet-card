import React from 'react';
import { nanoid } from 'nanoid';
import {
  Container,
  ContactForm,
  Filter,
  ContactList,
  Notification,
} from 'components';
import { Title } from './App.styled';

export class App extends React.Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'The Shrike', number: '444-88-77' },
      // { id: 'id-2', name: 'Lamia Brawne', number: '555-12-98' },
      // { id: 'id-3', name: 'Fedmahn Kassad', number: '123-69-69' },
      // { id: 'id-4', name: 'Martin Silenus', number: '666-66-66' },
      // { id: 'id-5', name: 'Jonh Keats', number: '089-80-07' },
      // { id: 'id-6', name: 'Rachel Weintraub', number: '333-58-69' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
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
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
    return true;
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  filterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  componentDidMount() {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (savedContacts) {
      this.setState({ contacts: savedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.getVisibleContacts();

    return (
      <Container title="Phonebook">
        <ContactForm onSubmit={this.addContact} />
        <Title>Contacts</Title>
        {contacts.length !== 0 && (
          <Filter value={filter} onFilterChange={this.filterChange} />
        )}
        {filteredContacts.length !== 0 && (
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={this.deleteContact}
          />
        )}
        {contacts.length === 0 && (
          <Notification message="There are no contacts yet. Please, add someone!" />
        )}
        {contacts.length !== 0 && filteredContacts.length === 0 && (
          <Notification message="No contacts found..." />
        )}
      </Container>
    );
  }
}
