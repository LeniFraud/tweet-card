import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContactsValue } from 'redux/selectors';
import { Form, Label, Input, Button } from './ContactForm.styled';

export const ContactForm = () => {
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');
  const contacts = useSelector(getContactsValue);
  const dispatch = useDispatch();

  // const handleChange = e => {
  //   const { name, value } = e.currentTarget;
  //   if (name === 'name') return setName(value);
  //   if (name === 'number') return setNumber(value);
  // };

  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const number = e.target.number.value;
    const isContactExists = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isContactExists) return alert(`Contact ${name} already exists!`);

    dispatch(addContact({ id: nanoid(), name, number }));
    // if (isSuccess) reset();
    // reset();
    e.target.reset();
  };

  // const reset = () => {
  //   setName('');
  //   setNumber('');
  // };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Phone
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
