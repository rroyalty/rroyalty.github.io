import { createMuiTheme } from '@material-ui/core/styles';

// interface PaletteColor {
//     light?: string;
//     main: string;
//     dark?: string;
//     contrastText?: string;
//   }

const theme = createMuiTheme({
  palette: {
    primary: {
      main: `#181D27`,
    },
    secondary: {
      main: `#146CA1`,
    },
  },
});

export default theme;