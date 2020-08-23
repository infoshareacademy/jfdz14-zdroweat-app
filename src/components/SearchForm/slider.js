import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
        width: '300px'
    },
});

function valuetext(value) {
    return `${value} PLN`;
}

const RangeSlider = ({ onSliderChange, priceMin, priceMax }) => {
    const classes = useStyles();
    const [value, setValue] = React.useState([priceMin, priceMax]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        onSliderChange(newValue);
    };


    return (
        <div className={classes.root}>

            <Typography style={{ textAlign: "center" }} id="range-slider" gutterBottom>
                zakres cen
            </Typography>

            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="on"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}

            />
        </div >
    );
}

export default RangeSlider