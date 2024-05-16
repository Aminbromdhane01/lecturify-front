'use client'
import { createTheme } from '@mui/material/styles';


export const theme = createTheme({
  palette: {
    primary: {
      main: '#1976D2', // Your primary color 
      contrastText : "#EEE" 
    },
    secondary: { // Optional secondary color
      main: '#007bff', // Dodger blue from your palette
    },
    text: { // Common text colors
      primary: '#333', // Dark charcoal from your palette
      secondary: '#B4B4B4', // Grey from your palette
      disabled: 'rgba(0, 0, 0, 0.5)', // Disabled text with opacity
    },
    common: { // White and black for contrast
      white: '#fff',
      black: '#000',
    },
  },
});
