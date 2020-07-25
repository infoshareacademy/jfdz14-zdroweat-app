import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 250,
    },
}));

const ControlledOpenSelect = () => {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div>

            <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">Czas przygotowywania</InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={age}
                    onChange={handleChange}
                >
                    <MenuItem value="">

                    </MenuItem>
                    <MenuItem value={0}>dowolny</MenuItem>
                    <MenuItem value={10}>5-15 minut</MenuItem>
                    <MenuItem value={20}>15-30 minut</MenuItem>
                    <MenuItem value={30}>&gt; 30 minut</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}

export default ControlledOpenSelect