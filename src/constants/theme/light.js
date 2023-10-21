import { createTheme } from '@mui/material/styles';
import { primaryColor, secondaryColor } from '../colorsPallet';


export const light = createTheme({
  palette: {
    primary: {
      main: primaryColor
    },
    secondary:{
      main: secondaryColor
    },
    background: {
      default: '#fefefe',
      paper: '#fefefe'
    }
  }
    
  
  
});

