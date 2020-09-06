import React from "react";
import "./Form.css";
import UploadButton from "./UploadButton";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Auth from "../Auth";
import { DATABASE_URL } from "../../index";
import firebase from "firebase";



const initialState = {
  file: '',
  name: "",
  servings: "",
  readyInMinutes: "",
  price: "",
  recipe: "",
  photoURL: "",
  type: "",
  setOpenDropdown: false,
};

class Form extends React.Component {
  state = initialState;

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  resetForm = () => {
    this.setState(initialState);
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    fetch(`${DATABASE_URL}/recipes.json`, {
      method: "POST",
      body: JSON.stringify(this.state),
    }).then(() => {
      this.resetForm();
    });
  };

  handleOnInputFile = (event) => {
    console.log(event.target)
    this.setState({
      file: event.target.files[0],
    });
  };

  handleOnAddFile = () => {
    firebase
      .storage()
      .ref("recipes/" + Math.floor(Math.random() * 1000))
      .put(this.state.file)
      .then((snapshot) => {
        snapshot.ref.getDownloadURL().then((photoURL) => {
          this.setState({
            photoURL,
          });
        });
      });
  };

  handleCloseDropdown = () => {
    this.setState({
      setOpenDropdown: false,
    });
  };

  handleOpenDropdown = () => {
    this.setState({
      setOpenDropdown: true,
    });
  };

  handleOnClick = () => {
    alert('Dziękujemy za wysłanie przepisu')
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
                <input  type="file" onChange={this.handleOnInputFile} />
                <Button
                  className="button"
                  variant="contained"
                  color="primary"
                  onClick={this.handleOnAddFile}
                >
                  Dodaj zdjęcie
                </Button>
              </div>
              <Button
                className="button"
                type="submit"
                variant="contained"
                color="primary"
                onClick={this.handleOnClick}
              >
                Prześlij przepis
              </Button>
              
            </div>
          </form>
        </div>
      </Auth>
    );
  }
}

export default Form;
