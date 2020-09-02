import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// import { propTypes } from 'react-visibility-sensor';


const useStyles = makeStyles((theme) => ({
    button: {
        display: 'block',
        marginTop: theme.spacing(1),
    },
    formControl: {
        margin: theme.spacing(1),
        width: '100%',
    },
}));

const ControlledOpenSelect = ({ onDropDownChange, dropDownValue }) => {
    const classes = useStyles();
    const [age, setAge] = React.useState(dropDownValue);
    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setAge(event.target.value);
        onDropDownChange(event.target.value)
    };

    const handleClose = () => {
        setOpen(false);

    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <>

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

                    <MenuItem value={0}>dowolny</MenuItem>
                    <MenuItem value={10}>&lt; 30 minut</MenuItem>
                    <MenuItem value={20}>30-45 minut</MenuItem>
                    <MenuItem value={30}>&gt; 45 minut</MenuItem>
                </Select>
            </FormControl>
        </>
    );
}

export default ControlledOpenSelect