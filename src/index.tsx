import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme, responsiveFontSizes, Theme } from "@material-ui/core/styles";
import { fade } from '@material-ui/core/styles/colorManipulator';
import { teal, deepOrange } from '@material-ui/core/colors/';

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
      main: fade("#292929", .95),
    },
    navbar: {
      main: teal[300],
    },
    bio:{
      main: teal[300],
    },
    skills:{
      main: teal[300],
    },
    portfolio:{
      main: teal[300],
    },
    footer:{
      main: teal[300],
    }
  },
  typography: {
    fontFamily: [
      "Heebo",
      "serif",
    ].join(","),
    fontSize: 8,
    htmlFontSize: 8 
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
