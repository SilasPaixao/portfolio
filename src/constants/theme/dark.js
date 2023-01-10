import { createTheme } from '@mui/material/styles';
import { primaryColor, secondaryColor } from '../colorsPallet';


export const dark = createTheme({
  palette: {
    
    primary: {
        main: primaryColor
    },
    secondary:{
        main: secondaryColor
    },
    background: {
        default: '#232323',
        paper: '#232323',
        contrastText: '#fff'
    },
    text: { 
        primary: '#dfdfdf'
    }
  }
    
  
  
});

