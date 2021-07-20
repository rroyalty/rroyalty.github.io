import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme, responsiveFontSizes, Theme } from "@material-ui/core/styles";
import { fade } from '@material-ui/core/styles/colorManipulator';
import CssBaseline from '@material-ui/core/CssBaseline';

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    wayback?: Palette['primary'];
    bg?: Palette['primary'];
    dark?: Palette['primary'];
    light?: Palette['primary'];
  }
  interface PaletteOptions {
    wayback?: PaletteOptions['primary'];
    bg?: PaletteOptions['primary'];
    dark?: PaletteOptions['primary'];
    light?: PaletteOptions['primary'];
  }
}

let theme: Theme = createMuiTheme({
  palette: {
    wayback: {
      main: "#f3f9ed",
    },
    bg: {
      main: fade("#899d73", 1),
    },
    dark: {
      main: "#252525",
    },
    light: {
      main: "#003300",
    }
  },
  typography: {
    fontFamily: [
      "Lora",
      "serif",
    ].join(","),
    htmlFontSize: 10,
    h2: {
      fontSize: `4rem`,
      paddingTop: `110px!important`,
      paddingBottom: `30px!important`
    },
    h3: {
      fontSize: "1rem",
      lineHeight: "150%"
    },
    h4: {
      fontSize: "1.3rem"
    },
    subtitle1: {
      fontSize: ".8rem"
    },
    button: {
      fontSize: "1rem"
    },
    allVariants: {
      color: "#252525",
    }
  },
  overrides: {
    MuiListItemText: {
      primary: {
        fontSize: '1rem',
      },
    },
  },
});

theme = responsiveFontSizes(theme);
ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
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
