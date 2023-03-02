import styled from 'styled-components';

export const List = styled.ul`
  background-color: ${p => p.theme.colors.backgroundBook};
  border-radius: ${p => p.theme.radii.medium};
  box-shadow: ${p => p.theme.shadows.accent};
`;
