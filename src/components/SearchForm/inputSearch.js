import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {

            width: '100%',
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