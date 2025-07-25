import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f5f5f5',
      paper: '#FFF',
      
    },
    primary: {
      main: '#6E57E0',
    },
    secondary: {
      main: '#F87305', 
    },
    text: {
      primary: '#01C8EB', 
      secondary: '#555', 
    },
  },

  typography: {
    fontFamily: `'Poppins', sans-serif`,
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          textTransform: 'none',
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
      paper: '#2A2A2A',
    },
    primary: {
      main: '#6E57E0',
      
    },
    secondary: {
      main: '#F87305',
    },
    text: {
        primary: '#01C8EB',
        secondary: '#E0E0E0',
    },
  },
  typography: {
    fontFamily: `'Poppins', sans-serif`,
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          textTransform: 'none',
        },
      },
    },
  },
});