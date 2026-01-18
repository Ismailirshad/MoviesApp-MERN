import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#ffffff', // White primary actions
        },
        secondary: {
            main: '#b0b0b0', // Grey secondary
        },
        background: {
            default: '#000000', // Pure black background
            paper: '#121212',   // Slightly lighter for cards
        },
        text: {
            primary: '#ffffff',
            secondary: '#aaaaaa',
        },
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h4: {
            fontWeight: 700,
            letterSpacing: '-0.5px',
        },
        h5: {
            fontWeight: 600,
        },
        h6: {
            fontWeight: 600,
        },
        button: {
            textTransform: 'none', // Modern look (no all-caps)
            fontWeight: 600,
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#000000',
                    backgroundImage: 'none',
                    borderBottom: '1px solid #333',
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 12, // Softer corners
                    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                    '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 16px rgba(255,255,255, 0.1)',
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    padding: '8px 16px',
                },
                contained: {
                    backgroundColor: '#ffffff',
                    color: '#000000',
                    '&:hover': {
                        backgroundColor: '#e0e0e0',
                    },
                },
                outlined: {
                    borderColor: '#333333',
                    '&:hover': {
                        borderColor: '#ffffff',
                        backgroundColor: 'rgba(255,255,255, 0.05)',
                    },
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#333',
                        },
                        '&:hover fieldset': {
                            borderColor: '#666',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#fff',
                        },
                    }
                }
            }
        }
    },
});

export default theme;
