import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[5]}px;

  &:nth-child(even) {
    background-color: ${p => p.theme.colors.backgroundMain};
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: ${p => p.theme.fontSizes.s}px;
`;

export const Name = styled.p`
  font-weight: ${p => p.theme.fontWeights.medium};
`;

export const Number = styled.p`
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: ${p => p.theme.space[5]}px;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.textLight};
  font-size: ${p => p.theme.fontSizes.xs}px;
  background-color: ${p => p.theme.colors.primary};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.normal};
  transition: background-color ${p => p.theme.transition.normal},
    box-shadow ${p => p.theme.transition.normal};

  &:hover,
  :focus {
    background-color: ${p => p.theme.colors.secondary};
    box-shadow: ${p => p.theme.shadows.accent};
  }
`;
