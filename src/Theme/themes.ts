import { createTheme } from '@mui/material';  

export const theme = createTheme({
    palette: {
        primary: {
            light: '#bcbcbc',
            main: '#000000',
            dark: '#5b5b5b',
            contrastText: 'rgba(255, 255, 255, 1)'
        },
        contrastThreshold: 3,
        tonalOffset: 0.2
    }
});