import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import './Form.css'
import UploadButton from './UploadButton'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Backdrop from '@material-ui/core/Backdrop'
import done from './images/done.gif'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Auth from '../Auth'
import { DATABASE_URL } from '../../index'
import firebase from 'firebase'

// const useStyles = makeStyles((theme) => ({
//   button: {
//     margin: theme.spacing(1),
//   },
//   backdrop: {
//     zIndex: theme.zIndex.drawer + 1,
//     color: "#fff",
//   },
// }));

const initialState = {
  file: null,
  name: '',
  servings: '',
  readyInMinutes: '',
  price: '',
  recipe: '',
  photoURL: '',
  type: '',
  setOpenDropdown: false,
}

class Form extends React.Component {
  state = initialState

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  resetForm = () => {
    this.setState(initialState)
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    fetch(`${DATABASE_URL}/recipes.json`, {
      method: 'POST',
      body: JSON.stringify(this.state),
    }).then(() => {
      this.resetForm()
    })
  }

  handleOnInputFile = (event) => {
    this.setState({
      file: event.target.files[0],
    })
  }

  fetchFile = () => {
    firebase
      .storage()
      .ref('recipes/')
      .getDownloadURL()
      .then((photoURL) => {
        this.setState({
          photoURL,
        })
      })
  }

  handleOnAddFile = () => {
    firebase
      .storage()
      .ref('recipes/')
      .put(this.state.file)
      .then(() => this.fetchFile())
  }
  handleCloseDropdown = () => {
    this.setState({
      setOpenDropdown: false,
    })
  }

  handleOpenDropdown = () => {
    this.setState({
      setOpenDropdown: true,
    })
  }

  render() {
    return (
      <Auth>
        <div className="mainContainer">
          <h1>PODZIEL SIĘ SWOIM PRZEPISEM</h1>
          <form
            className="formContainer"
            noValidate
            autoComplete="off"
            onSubmit={this.handleOnSubmit}
          >
            <div className="formContainer_block">
              <TextField
                className="input"
                name="name"
                label="Podaj nazwę potrawy"
                variant="outlined"
                value={this.state.name}
                onChange={this.handleOnChange}
              />
              <TextField
                className="input"
                name="servings"
                type="number"
                variant="outlined"
                label="Podaj liczbę porcji"
                value={this.state.servings}
                onChange={this.handleOnChange}
              />
              <TextField
                className="input"
                name="readyInMinutes"
                type="number"
                variant="outlined"
                label="Czas przygotowania"
                value={this.state.readyInMinutes}
                onChange={this.handleOnChange}
              />
              <TextField
                className="input"
                name="price"
                type="number"
                variant="outlined"
                label="Koszt porcji w PLN"
                value={this.state.price}
                onChange={this.handleOnChange}
              />

              <FormControl>
                <InputLabel id="demo-controlled-open-select-label">
                  Typ dania
                </InputLabel>
                <Select
                  name="type"
                  value={this.state.type}
                  onChange={this.handleOnChange}
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  onClose={this.handleCloseDropdown}
                  onOpen={this.handleOpenDropdown}
                >
                  <MenuItem value="wege">wege</MenuItem>
                  <MenuItem value="wegańskie">wegańskie</MenuItem>
                  <MenuItem value="mięso">mięso</MenuItem>
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
                value={this.state.recipe}
                onChange={this.handleOnChange}
              />
              <div className="photo">
                <input type="file" onChange={this.handleOnInputFile} />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleOnAddFile}
                >
                  Dodaj zdjęcie
                </Button>
              </div>
              <Button type="submit" variant="contained" color="primary">
                Prześlij przepis
              </Button>
              {/* <Backdrop
                className={classes.backdrop}
                open={open}
                onClick={handleClose}
              >
                <div className="backdropMessage">
                  <div>
                    <img src={done} alt="success icon" height="60px" />
                  </div>
                  <h2>
                    Dziękujemy za przesłanie przepisu na {values.name}{" "}
                  </h2>
                </div>
              </Backdrop> */}
            </div>
          </form>
        </div>
      </Auth>
    )
  }
}

// export default function Form () {
//     const classes = useStyles();
//     const [values, setValues] = useState ({recipeName: '', servings: '', readyInMinutes: '', price: '', recipe:''});

//     const [open, setOpen] = React.useState(false);
//     const handleClose = () => {
//         setOpen(false);
//     };
//      const handleOnClick = () => {
//         setOpen(!open);
//     };

//     const handleChange = (event) => {
//         const { name , value } = event.target;
//         setValues(values => ({...values, [name]: value }))
//     }

//     return
// }

export default Form
