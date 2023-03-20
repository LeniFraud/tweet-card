import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

body {
  font-family: ${p => p.theme.fonts.body};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: ${p => p.theme.colors.textDark};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.normal};
}

html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  padding: ${p => p.theme.space[0]}px;
  margin: ${p => p.theme.space[0]}px;
  
  list-style: none;
  box-sizing: inherit;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font-family: inherit;
  cursor: pointer;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

code {
  font-family: ${p => p.theme.fonts.code};
}
`;
