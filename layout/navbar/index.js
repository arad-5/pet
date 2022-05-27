import PropTypes from 'prop-types';

import DarkmodeButton from '../navbar/DarkmodeButton';
import MenuIcon from '@mui/icons-material/Menu';
import {
    Link,
    Box,
    Button,
    useTheme,
    Container,
    IconButton,
    Slide,
    CssBaseline,
    Toolbar,
    useMediaQuery,
    useScrollTrigger,
    AppBar,
} from '@mui/material';
import { useRouter } from 'next/router';
function HideOnScroll({ children, window }) {
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction='down' in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default function Navbar(props) {
    const matches = useMediaQuery('(min-width:500px)');
    const { darkmode } = props;
    console.log(useRouter());
    return (
        <>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar
                    sx={{
                        background: 'transparent',
                        backdropFilter: 'blur(20px)',
                        boxShadow: 0,
                    }}
                >
                    <Container>
                        <Box
                            width='100%'
                            height='4rem'
                            display='flex'
                            justifyContent='space-between'
                            alignItems='center'
                            sx={{ px: '3rem' }}
                        >
                            <Link href='/'>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 100 100'
                                    height='2.5rem'
                                >
                                    <path
                                        fill={darkmode ? '#fff' : '#000'}
                                        d='M61 44.6c0 5.9-5 10.8-11 10.8s-11-4.9-11-10.8v-5.4c0-5.9 5-10.8 11-10.8 3 0 5.8 1.2 7.8 3.2 2 1.9 3.3 4.6 3.3 7.6v5.4zm38.6-18.3c-.1-.3-.3-.6-.5-.9-1.4-2.8-3.1-5.4-5-7.8-.3-.4-.7-.9-1-1.3-2.1-2.6-5.4-4.1-8.7-4.1h-51c-6.1 0-11 4.9-11 10.8v32.4c0 5.9-5 10.8-11 10.8H5.5c-3 0-5.5 2.4-5.5 5.4 0 .8.2 1.5.4 2.1.1.3.3.6.5.9 1.4 2.8 3.1 5.4 5 7.8.3.4.7.9 1 1.3 2.1 2.6 5.4 4.1 8.7 4.1h17.8c6.1 0 11-4.9 11-10.8 0-3 2.5-5.4 5.5-5.4s5.5 2.4 5.5 5.4c0 3 1.2 5.7 3.3 7.6 2 2 4.7 3.2 7.8 3.2H72c6.1 0 11-4.9 11-10.8V44.6c0-5.9 5-10.8 11-10.8h.3c3 0 5.5-2.4 5.5-5.4.2-.8 0-1.5-.2-2.1z'
                                    ></path>
                                </svg>
                            </Link>
                            <Box>
                                <DarkmodeButton {...props} />
                                {matches ? (
                                    <Button variant='text' color='secondary'>
                                        Text
                                    </Button>
                                ) : (
                                    <IconButton
                                        size='large'
                                        edge='start'
                                        color='inherit'
                                        aria-label='menu'
                                    >
                                        <MenuIcon
                                            sx={{ fontSize: '2rem' }}
                                            color='action'
                                        />
                                    </IconButton>
                                )}
                            </Box>
                        </Box>
                    </Container>
                </AppBar>
            </HideOnScroll>
            {matches ? <Toolbar sx={{ mb: 4 }} /> : <Toolbar sx={{ mb: 2 }} />}
        </>
    );
}
