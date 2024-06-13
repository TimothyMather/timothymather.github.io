import { createTheme } from '@mui/material/styles';
import { grey, blueGrey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: blueGrey[500],
    },
    secondary: {
      main: grey[200],
    },
  },
});


export default theme;