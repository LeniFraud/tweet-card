import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { ContactListItem, Notification } from 'components';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <>
      <List>
        {visibleContacts.map(contact => (
          <ContactListItem key={contact.id} contact={contact} />
        ))}
      </List>
      {!contacts.length && (
        <Notification message="There are no contacts yet. Please, add someone!" />
      )}
      {!!contacts.length && !visibleContacts.length && (
        <Notification message="No contacts found..." />
      )}
    </>
  );
};
