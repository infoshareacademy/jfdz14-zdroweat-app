import React, { useState } from 'react';
import './Form.css';
import UploadButton from './UploadButton'


export default function Form () {
    const [values, setValues] = useState ({name: '', servings: '', readyInMinutes: '', price: '', recipe:''});

    const handleChange = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);
        setValues({
        ...values,
        [event.target.name]: event.target.value
        })
    }

    return(
        <div className="formContainer">
            <h1>Dodaj swój własny przepis</h1>

            <form noValidate>
                <div className="recipeName">
                    <label>Nazwa przepisu</label>
                    <div className="input">
                        <input 
                            name="recipeName" 
                            type="text" 
                            placeholder="wpisz nazwę przepisu" 
                            value={values.name}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="recipeServings">
                    <label>Ilość porcji</label>
                    <div>
                        <input 
                            name="servings" 
                            type="number" 
                            placeholder="podaj liczbę porcji" 
                            value={values.servings}
                            onChange={handleChange}
                        />
                            
                    </div>
                </div>
                <div className="recipeTime">
                    <label>Czas przygotowania</label>
                    <div>
                        <input 
                            name="readyInMinutes" 
                            type="number" 
                            placeholder="...minut" 
                            value={values.readyInMinutes}
                            onChange={handleChange} 
                            />
                    </div>
                </div>
                <div className="recipePrice">
                    <label>Szacowany koszt</label>
                    <div>
                        <input 
                            name="price" 
                            type="number" 
                            placeholder="...zł" 
                            value={values.price} 
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="recipeText">
                    <label>Przepis</label>
                    <div>
                        <input 
                            name="recipe" 
                            type="text" 
                            value={values.recipe}
                            onChange={handleChange} 
                        />
                    </div>
                </div>
                <div className="recipeText">
                    <label>Dodaj zdjęcie</label>
                    <UploadButton />
                </div>
                <button>Prześlij</button>
            </form>
        </div>

    )
}

// { id: 21, name: "Kokosowy deser z tapioką", servings: 6, readyInMinutes: 20, price: 30, recipe: "Tapiokę zalać mlekiem kokosowym, odstawić na godzinę. Po upływie tego czasu dodać cukier, wanilię oraz szczyptę soli i zagotować. Gotować na małym ogniu przez 12 – 15 minut, czyli do czasu, aż perełki tapioki staną się przezroczyste i miękkie", photoURL: "https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/kokosowy_pudding_z_tapioki_z_musem_mango_01.jpg" },
