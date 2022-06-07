import * as React from 'react';
import {
    Card,
    CardContent,
    Typography,
    Button,
    CardActionArea,
    CardActions,
    CardMedia,
    useTheme,
} from '@mui/material';
import Link from 'next/link';

export default function MultiActionAreaCard({ banner }) {
    // console.log(useTheme().palette.mode);

    return (
        <Link href={banner.slug} passHref>
            <Card
                sx={{
                    borderRadius: '3rem',
                    width: '100%',
                    position: 'relative',
                    boxShadow: `0px 10px 10px  0 ${
                        useTheme().palette.mode === 'light' ? '#eee' : '#000'
                    }`,
                }}
            >
                <CardActionArea
                    sx={{
                        borderRadius: '0 0 3rem 3rem',
                    }}
                >
                    <CardMedia
                        component='img'
                        height={'300'}
                        image={banner.image}
                        alt='green iguana'
                        sx={{
                            borderRadius: '0 0 3rem 3rem',
                            background: 'transparent',
                        }}
                    />
                    <CardContent
                        sx={{
                            bg: 'transparent',
                            position: 'absolute',
                            top: '0',
                        }}
                    >
                        <Typography
                            gutterBottom
                            variant='h1'
                            sx={{
                                fontSize: '40px',
                                backgroundColor: 'rgba(100%,100%,100%,70%)',
                                backdropFilter: 'blur(10px)',
                                px: '1.5rem',
                                py: '0.2rem',
                                color: '#000',
                                fontWeight: 'bold',
                                borderRadius: '30px',
                                display: 'flex',
                                height: '70px',
                                alignItems: 'center',
                            }}
                            component='div'
                        >
                            {banner.badgeIcon}
                            {banner.title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions
                    sx={{
                        p: '0.5rem 0',
                    }}
                >
                    <Button
                        sx={{
                            width: '60%',
                            fontSize: '20px',
                        }}
                        size='large'
                        color='primary'
                    >
                        Breeds
                    </Button>
                    <Link href={`${banner.slug}/gallery`}>
                        <Button
                            sx={{
                                width: '100%',
                                fontSize: '20px',
                            }}
                            size='large'
                            color='primary'
                        >
                            Gallery
                        </Button>
                    </Link>
                    <Button
                        sx={{
                            width: '40%',
                            fontSize: '20px',
                        }}
                        size='large'
                        color='primary'
                    >
                        🎲
                    </Button>
                </CardActions>
            </Card>
        </Link>
    );
}
