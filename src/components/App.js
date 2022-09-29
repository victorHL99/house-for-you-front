/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/globalStyle';
import theme from '../styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <h1>Hello World</h1>
      </BrowserRouter>
    </ThemeProvider>
  );
}
