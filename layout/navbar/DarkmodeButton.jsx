import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

function DarkmodeButton({ darkmode, setDarkmode }) {
    return (
        <IconButton
            onClick={() => setDarkmode((curr) => !curr)}
            color='inherit'
            sx={{ mr: 2 }}
        >
            {darkmode ? (
                <Brightness7Icon sx={{ fontSize: '2rem' }} color='warning'/>
            ) : (
                <Brightness4Icon sx={{ fontSize: '2rem' }} color='secondary'/>
            )}
        </IconButton>
    );
}
export default DarkmodeButton;
