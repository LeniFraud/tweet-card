import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Label, Input, Button } from './ContactForm.styled';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export const ContactForm = ({ onSubmit }) => {
  const [contactInfo, setContactInfo] = useState({ ...INITIAL_STATE });
  const { name, number } = contactInfo;

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    // setContactInfo({ [name]: value });
    // setContactInfo({ ...contactInfo, [name]: value });
    setContactInfo(prevContactInfo => ({ ...prevContactInfo, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const isSuccess = onSubmit({ ...contactInfo });
    if (isSuccess) reset();
  };

  const reset = () => setContactInfo({ ...INITIAL_STATE });

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
          value={name}
          onChange={handleChange}
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
          value={number}
          onChange={handleChange}
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
