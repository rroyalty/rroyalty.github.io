import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme, responsiveFontSizes, Theme } from "@material-ui/core/styles";
import { purple, green, deepOrange, indigo, blue } from '@material-ui/core/colors/';
import { fade } from '@material-ui/core/styles/colorManipulator';

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    bg?: Palette['primary'];
    navbar?: Palette['primary'];
    bio?: Palette['primary'];
    skills?: Palette['primary'];
    portfolio?: Palette['primary'];
    footer?: Palette['primary'];
  }
  interface PaletteOptions {
    bg?: PaletteOptions['primary'];
    navbar?: PaletteOptions['primary'];
    bio?: PaletteOptions['primary'];
    skills?: PaletteOptions['primary'];
    portfolio?: PaletteOptions['primary'];
    footer?: PaletteOptions['primary'];
  }
}

let theme: Theme = createMuiTheme({
  palette: {
    bg: {
      main: fade(`#181D27`, 0.89),
    },
    navbar: {
      main: blue[100],
    },
    bio:{
      main: blue[100],
    },
    skills:{
      main: green[600],
    },
    portfolio:{
      main: deepOrange[500],
    },
    footer:{
      main: deepOrange[500],
    }
  },
});

theme = responsiveFontSizes(theme);
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
