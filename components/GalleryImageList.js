import { useEffect, useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Image from 'next/Image';
import { useMediaQuery, Box, CircularProgress } from '@mui/material';
import { useRouter } from 'next/router';

export default function GalleryImageList({ page }) {
    const [images, setImages] = useState([]);
    const matches = useMediaQuery('(min-width:800px)');

    const {
        query: { pet },
    } = useRouter();
    console.log(pet);
    const getImages = () => {
        fetch(
            `https://api.thedogapi.com/v1/images/search?limit=30&page=${page}`
        )
            .then((response) => response.json())
            .then((data) => setImages(data));
    };

    useEffect(() => getImages(), []);
    useEffect(() => {
        setImages([]);
        getImages();
    }, [page]);

    return (
        <>
            {!images.length && (
                <Box
                    py='1rem'
                    width='100%'
                    display='flex'
                    justifyContent='center'
                    mt='30vh'
                >
                    <CircularProgress size={50} />
                </Box>
            )}
            <ImageList sx={{ width: '100%' , mb: '4rem'}} cols={matches ? 3 : 2}>
                {images.map((dog, index) => (
                    <ImageListItem
                        key={dog.id}
                        sx={{
                            border: '1px solid white',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Box sx={{ transform: 'translateX(-50%)'}} position='absolute' left='50%'>
                            <CircularProgress
                                size={matches ? 35 : 20}
                                color='secondary'
                                
                            />
                        </Box>
                        <Image
                            src={`${dog.url}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${dog.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={dog.breeds.length ? dog.breeds.name : dog.id}
                            layout='responsive'
                            width={1980}
                            height={1080}
                            objectFit='contain'
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </>
    );
}
