import GalleryImageList from '../../components/GalleryImageList';
import Pagination from '@mui/material/Pagination';
import { Box } from '@mui/material';
import { useTheme } from '@emotion/react';
import { useState } from 'react';

const Gallery = () => {
    const [page, setpage] = useState(1);
    const [pageCount, setpageCount] = useState(10);
    const handlePagintation = (e, value) => {
        setpage(value);
        if (value === pageCount) setpageCount((curr) => curr + 10);
    };

    return (
        <div>
            <GalleryImageList page={page} />
            <Box
                sx={{
                    position: 'fixed',
                    left: '50%',
                    bottom: '0',
                    transform: 'translateX(-50%)',
                }}
                width='100%'
                display='flex'
                justifyContent='center'
            >
                <Pagination
                    count={pageCount}
                    defaultPage={1}
                    siblingCount={0}
                    size='large'
                    onChange={handlePagintation}
                    color='primary'
                    sx={{
                        bgcolor: `rgba(${
                            useTheme().palette.mode === 'dark'
                                ? '18 ,18 ,18'
                                : '255 ,255 ,255'
                        }, 70%)`,
                        backdropFilter: 'blur(20px)',
                        py: '0.5rem',
                        px: '1rem',
                        borderRadius: '30px 30px 0 0',
                    }}
                />
            </Box>
        </div>
    );
};

export default Gallery;
