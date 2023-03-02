import { BsArrowDownCircleFill } from 'react-icons/bs';
import phonebook from './phonebook.png';
import { Container } from './HomePage.styled';
import { NavLink } from 'react-router-dom';
import { routes } from 'utils/routes';

import styled from 'styled-components';

const Header = styled.h1`
  color: ${p => p.theme.colors.accent};
  font-family: ${p => p.theme.fonts.heading};
`;

export default function HomePage() {
  return (
    <section>
      <Container>
        <Header>Phonebook</Header>
        <p>All your contacts are here!</p>
        <BsArrowDownCircleFill size={52} />
        <NavLink to={routes.CONTACTS}>
          <img src={phonebook} alt="Phonebook" width="100" />
        </NavLink>
      </Container>
    </section>
  );
}
