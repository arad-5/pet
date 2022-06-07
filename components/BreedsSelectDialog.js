import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/system';
import CircularProgress from '@mui/material/CircularProgress';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function DialogSelect({ pet }) {
    const [open, setOpen] = React.useState(false);
    const [selectedBreed, setSelectedBreed] = React.useState('');
    const [breedsList, setBreedsList] = React.useState([]);
    const theme = useTheme();

    const handleChange = (event) => {
        setSelectedBreed(event.target.value);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason !== 'backdropClick') {
            setOpen(false);
        }
    };
    React.useEffect(() => {
        const getBreedsList = async () => {
            fetch(`https://api.the${pet}api.com/v1/breeds`)
                .then((response) => response.json())
                .then((data) => setBreedsList(data));
        };
        getBreedsList();
    }, []);

    return (
        <div>
            <Button onClick={handleClickOpen}>Select Breed</Button>
            <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle>Select your breed</DialogTitle>
                <DialogContent>
                    <Box
                        component='form'
                        sx={{ display: 'flex', flexWrap: 'wrap' }}
                    >
                        <FormControl sx={{ m: 1, width: 300 }}>
                            <InputLabel id='demo-multiple-name-label'>
                                Breeds
                            </InputLabel>
                            <Select
                                labelId='demo-multiple-name-label'
                                id='demo-multiple-name'
                                value={selectedBreed}
                                onChange={handleChange}
                                input={<OutlinedInput label='Name' />}
                                MenuProps={MenuProps}
                            >
                                <MenuItem
                                    value='all'
                                    style={getStyles(
                                        breedsList,
                                        selectedBreed,
                                        theme
                                    )}
                                >
                                    <em>None</em>
                                </MenuItem>
                                {!breedsList.length && (
                                    <Box
                                        py='1rem'
                                        display='flex'
                                        justifyContent='center'
                                    >
                                        <CircularProgress size={30} />
                                    </Box>
                                )}
                                {breedsList.map((breed) => (
                                    <MenuItem
                                        key={breed.name}
                                        value={breed.name}
                                        style={getStyles(
                                            breed.name,
                                            selectedBreed,
                                            theme
                                        )}
                                    >
                                        {breed.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Ok</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
