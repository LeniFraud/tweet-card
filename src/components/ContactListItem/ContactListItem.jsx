import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { Item, Info, Button } from './ContactListItem.styled';

export const ContactListItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <Info>
        <p>{name}: </p>
        <p>{number}</p>
      </Info>
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </Button>
    </Item>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
