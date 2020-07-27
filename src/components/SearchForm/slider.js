import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
        width: 300,
    },
});

function valuetext(value) {
    return `${value} PLN`;
}




const RangeSlider = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState([props.initialValueMin, props.initialValueMax]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        props.onSliderChange(newValue);

    };

    console.log(value)

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