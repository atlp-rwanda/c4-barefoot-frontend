import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#257AAA',
    },
    secondary: {
      main: '#ffef62'
    }
  },
  typography: {
    fontFamily: "'Poppins', sans-serif"
  }
});

export default theme;