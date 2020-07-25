import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '45ch',
        },
    },
}));


const BasicTextFields = (props) => {
    const classes = useStyles()

    const handleOnChange = (event) => {
        props.onFormChange(event.target.value)
    }


    return (
        <form className={classes.root} noValidate autoComplete="off" >

            <TextField id="outlined-basic" label="Wyszukaj przepis" variant="outlined" value={props.filterValue}
                onChange={handleOnChange} />
        </form>
    );
}


export default BasicTextFields