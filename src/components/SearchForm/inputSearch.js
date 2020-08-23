import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '300px',
        },
    },
}));


const BasicTextFields = ({ onFormChange, filterValue }) => {
    const classes = useStyles()

    const handleOnChange = (event) => {
        onFormChange(event.target.value)
    }


    return (
        <form className={classes.root} noValidate autoComplete="off" >

            <TextField id="outlined-basic" label="Wyszukaj przepis" variant="outlined" value={filterValue}
                onChange={handleOnChange} />
        </form>
    );
}


export default BasicTextFields