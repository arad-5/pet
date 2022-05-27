import {
    ThemeProvider,
    createTheme,
    Container,
    Box,
    useTheme,
} from '@mui/material';
import Navbar from './navbar';
import { useEffect, useState } from 'react';

const Layout = ({ children }) => {
    const [darkmode, setDarkmode] = useState(true);
    console.log(useTheme());

    const darkTheme = createTheme({
        palette: {
            mode: darkmode ? 'dark' : 'light',
            primary: {
                // light: will be calculated from palette.primary.main,
                main: '#ff4400',
                // dark: will be calculated from palette.primary.main,
                // contrastText: will be calculated to contrast with palette.primary.main
            },
            secondary: {
                light: '#0066ff',
                main: '#0044ff',
                dark: '#fff',
                contrastText: '#ffcc00',
            },
            backgroundSecondary: {
                light: '#fff',
                main: '#fff',
                dark: '#000',
                contrastText: '#000',
            },
            background: {
                light: '#fff',
                main: '#fff',
                dark: '#fff',
                contrastText: '#000',
            },
            contrastThreshold: 3,
            tonalOffset: 0.2,
        },
    });
    useEffect(() => {
        // const theme = window.localStorage.getItem('darkmode');
        // setDarkmode(theme ? JSON.parse(theme) : false);
    }, []);

    return (
        <ThemeProvider theme={darkTheme}>
            <Container
                sx={{
                    transition: '200ms',
                }}
            >
                <Navbar darkmode={darkmode} setDarkmode={setDarkmode} />
                <main>{children}</main>
            </Container>
        </ThemeProvider>
    );
};

export default Layout;
