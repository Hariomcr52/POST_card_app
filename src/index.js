import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import store from './redux/store';
import App from './App';

const theme = createTheme({
  palette: {
    background: {
      default: '#f0f2f5',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);