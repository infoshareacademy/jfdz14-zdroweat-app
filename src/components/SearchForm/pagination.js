import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function BasicPagination({ recipesPerPage, recipesLength, updatePage }) {
    const classes = useStyles();
    const [page, setPage] = useState(1);

    const handleChange = (event, value) => {
        updatePage(value)
        setPage(value)
        window.scrollTo(0, 0);
    }


    return (
        <div className={classes.root}>

            <Pagination
                count={Math.ceil(recipesLength / recipesPerPage)}
                onChange={handleChange}
                color="primary"
                defaultPage={1}
                page={page}
            />

        </div>
    );
}