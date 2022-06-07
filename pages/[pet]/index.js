import Image from 'next/image';
import { Box, Typography, useTheme, Button, Link } from '@mui/material';
import BreedsSelectDialog from '../../components/BreedsSelectDialog';

const Pet = ({ slug }) => {
    const {
        palette: { mode },
    } = useTheme();

    return (
        <section>
            <Box
                position='relative'
                display='flex'
                flexDirection='column'
                alignItems='center'
            >
                <Box marginBottom='2rem'>
                    <Typography
                        variant='h1'
                        component='h2'
                        fontSize='4rem'
                        fontWeight='bold'
                    >
                        {slug}
                    </Typography>
                    <Box
                        marginLeft='90%'
                        marginTop='-2rem'
                        width='2rem'
                        height='2rem'
                        bgcolor='primary.main'
                        borderRadius='100%'
                    />
                </Box>
                <Box
                    display='flex'
                    justifyContent='center'
                    mt={2}
                    px={5}
                    py={2}
                    bgcolor='#fff'
                    mx='auto'
                    borderRadius='40px 40px 0 0'
                    border={mode === 'light' && '1px solid #eee'}
                    borderBottom='0'
                >
                    <BreedsSelectDialog pet={slug} />
                    <Link href={`/${slug}/gallery`}>
                        <Button variant='text'>Gallery</Button>
                    </Link>
                </Box>
                <Box
                    border={mode === 'light' && '1px solid #eee'}
                    style={{ borderRadius: '50px' }}
                >
                    <Image
                        src={`/images/${slug}PageBanner.webp`}
                        width='990'
                        height='540'
                        alt={slug}
                        style={{ borderRadius: '50px' }}
                    />
                </Box>
            </Box>
        </section>
    );
};

export default Pet;

export const getStaticProps = async (context) => {
    const {
        params: { pet },
    } = context;

    return {
        props: { slug: pet },
    };
};

export const getStaticPaths = async () => {
    return {
        paths: [{ params: { pet: 'dog' } }, { params: { pet: 'cat' } }],
        fallback: false,
    };
};
