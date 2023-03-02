import styled from 'styled-components';

export const Section = styled.section`
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
`;

export const Container = styled.div`
  max-width: 480px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  margin-bottom: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.accent};
  text-align: center;
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.xl}px;
`;

export const Subtitle = styled.h3`
  margin-bottom: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.secondary};
  text-align: center;
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes.l}px;
`;
