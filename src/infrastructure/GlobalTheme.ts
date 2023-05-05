import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: '#5F9A8C',
      },
      error: {
        // This is green.A700 as hex.
        main: '#11cb5f',
      },
      success: {
        // This is green.A700 as hex.
        main: '#427B4A',
      },
      warning: {
        // This is green.A700 as hex.
        main: '#DCA12F',
      },
    },
});

export default theme;