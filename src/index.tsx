import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme, responsiveFontSizes, Theme } from "@material-ui/core/styles";
import { fade } from '@material-ui/core/styles/colorManipulator';
import { purple  } from '@material-ui/core/colors/';

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
      main: "FFFFFF",
    },
    bg: {
      main: fade("#A9B18F", .90),
    },
    dark: {
      main: "#353535",
    },
    light:{
      main: "#353535",
    }
  },
  typography: {
    fontFamily: [
      "Lora",
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
