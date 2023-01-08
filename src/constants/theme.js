import { createTheme } from '@mui/material/styles';
import { primaryColor, secondaryColor } from './colorsPallet';


const mode = 'light';
export const theme = createTheme({
  
  palette: {
    ...(mode === 'light'
    ?{
        primary: {
          main: primaryColor,
        },
        background: {
          default: '#fefefe',
          paper: '#fefefe',
        }
    }
    :{
        primary: {
            main: primaryColor,
        },
        background: {
            default: '#232323',
            paper: '#232323',
        },
        text: { 
            primary: '#fff'
        }
    }
    )
  }
  
});

