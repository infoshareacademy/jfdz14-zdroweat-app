
import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RadioButtonsGroup({ onRecipesPerPageChanged }) {
    const [value, setValue] = React.useState('female');


    const handleChange = (event) => {
        setValue(event.target.value);
        onRecipesPerPageChanged(event.target.value)
    }
    return (
        <FormControl component="fieldset">
            <FormLabel component="legend">Liczba przepisów na stronie</FormLabel>
            <RadioGroup row aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                <FormControlLabel value="8" control={<Radio />} label="8" />
                <FormControlLabel value="12" control={<Radio />} label="12" />
                <FormControlLabel value="16" control={<Radio />} label="16" />
            </RadioGroup>
        </FormControl>
    )


}
