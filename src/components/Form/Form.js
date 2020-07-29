import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './Form.css';
import UploadButton from './UploadButton'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import done from './images/done.gif'

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
  }));

export default function Form () {
    const classes = useStyles();
    const [values, setValues] = useState ({recipeName: '', servings: '', readyInMinutes: '', price: '', recipe:''});

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
     const handleOnClick = () => {
        setOpen(!open);
    };

    const handleChange = (event) => {
        const { name , value } = event.target;
        setValues(values => ({...values, [name]: value }))
    }

    // const  handleOnClick = () => {
    //     alert('Sukces! Przepis został wysłany do bazy danych')
    // }

    return(
        <div className="mainContainer">
        <h1>PODZIEL SIĘ SWOIM PRZEPISEM</h1>  
        <form className="formContainer" noValidate autoComplete="off" >
        <div className="formContainer_block">
            <TextField 
                className="input"
                name="recipeName"
                label="Podaj nazwę potrawy" 
                variant="outlined" 
                value={values.recipeName}
                onChange={handleChange} 
            />
            <TextField 
                className="input"
                name="servings" 
                type="number"
                variant="outlined"  
                label="Podaj liczbę porcji" 
                value={values.servings}
                onChange={handleChange}
            />
            <TextField 
                className="input"
                name="readyInMinutes" 
                type="number" 
                variant="outlined"  
                label="Czas przygotowania" 
                value={values.readyInMinutes}
                onChange={handleChange}
            />
            <TextField 
                className="input"
                name="price" 
                type="number" 
                variant="outlined"  
                label="Koszt porcji w PLN" 
                value={values.price} 
                onChange={handleChange}
            />
            </div>
            <div className="formContainer_block">
            <TextField 
                    className="recipeInput"
                    name="recipe"
                    multiline
                    rows={12} 
                    type="text" 
                    variant="outlined"  
                    label="Treść przepisu" 
                    value={values.recipe}
                    onChange={handleChange} 
                />
            <UploadButton />
            <Button
                onClick={handleOnClick}
                variant="contained"
                color="primary"
                className={classes.button}
            >
                Prześlij przepis
            </Button>
            <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                <div className="backdropMessage">
                    <div>
                        <img src={done} alt="success icon" height='60px'/>
                    </div>
                    <h2>Dziękujemy za przesłanie przepisu na {values.recipeName} </h2>
                </div>
            </Backdrop>

            </div>
        </form> 
    </div>

    )
}

// { id: 21, name: "Kokosowy deser z tapioką", servings: 6, readyInMinutes: 20, price: 30, recipe: "Tapiokę zalać mlekiem kokosowym, odstawić na godzinę. Po upływie tego czasu dodać cukier, wanilię oraz szczyptę soli i zagotować. Gotować na małym ogniu przez 12 – 15 minut, czyli do czasu, aż perełki tapioki staną się przezroczyste i miękkie", photoURL: "https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/kokosowy_pudding_z_tapioki_z_musem_mango_01.jpg" },
