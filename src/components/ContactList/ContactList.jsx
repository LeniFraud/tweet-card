import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/contacts/selectors';
import { ContactListItem, Notification } from 'components';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <>
      <List>
        {visibleContacts?.map(contact => (
          <ContactListItem key={contact.id} contact={contact} />
        ))}
      </List>
      {!isLoading && contacts?.length === 0 && (
        <Notification message="There are no contacts yet. Please, add someone!" />
      )}
      {!!contacts?.length && !visibleContacts.length && (
        <Notification message="No contacts found..." />
      )}
    </>
  );
};
