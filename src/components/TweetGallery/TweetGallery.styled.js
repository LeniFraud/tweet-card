import styled from 'styled-components';

export const Section = styled.section`
  padding-top: ${p => p.theme.space[5]}px;
  padding-bottom: ${p => p.theme.space[5]}px;
`;

export const Container = styled.div`
  width: 100%;
  padding-right: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[4]}px;
  margin: 0 auto;

  @media screen and (min-width: 480px) {
    max-width: 480px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${p => p.theme.space[4]}px;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }

  @media screen and (min-width: 1200px) {
    gap: 14px;
  }
`;
