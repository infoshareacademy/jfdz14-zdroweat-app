import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import './Form.css'
import UploadButton from './UploadButton'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Backdrop from '@material-ui/core/Backdrop'
import done from './images/done.gif'
import Auth from '../Auth'

import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}))

export default function Form() {
  const classes = useStyles()
  const [values, setValues] = useState({
    recipeName: '',
    servings: '',
    readyInMinutes: '',
    price: '',
    recipe: '',
    type: '',
  })

  const [open, setOpen] = React.useState(false)
  const [openDropdown, setOpenDropdown] = React.useState(false)

  const handleClose = () => {
    setOpen(false)
  }
  const handleOnClick = () => {
    setOpen(!open)
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((values) => ({ ...values, [name]: value }))
  }

  const handleCloseDropdown = () => {
    setOpenDropdown(false)
  }

  const handleOpenDropdown = () => {
    setOpenDropdown(true)
    console.log('click')
  }
  return (
    <Auth>
      <div className="mainContainer">
        <h1>PODZIEL SIĘ SWOIM PRZEPISEM</h1>
        <form className="formContainer" noValidate autoComplete="off">
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
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-controlled-open-select-label">
                Typ dania
              </InputLabel>
              <Select
                name="type"
                value={values.type}
                onChange={handleChange}
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={openDropdown}
                onClose={handleCloseDropdown}
                onOpen={handleOpenDropdown}
              >
                <MenuItem value={0}>wege</MenuItem>
                <MenuItem value={10}>wegańskie</MenuItem>
                <MenuItem value={20}>mięso</MenuItem>
              </Select>
            </FormControl>
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
            <Backdrop
              className={classes.backdrop}
              open={open}
              onClick={handleClose}
            >
              <div className="backdropMessage">
                <div>
                  <img src={done} alt="success icon" height="60px" />
                </div>
                <h2>
                  Dziękujemy za przesłanie przepisu na {values.recipeName}{' '}
                </h2>
              </div>
            </Backdrop>
          </div>
        </form>
      </div>
    </Auth>
  )
}
