import React from 'react';
import client from './images/klient.jpeg';
import './Home.css';


export default function Home () {
    return (
        <div className="containter">
            <div className="fanContainer">
                <img src={client} className="clientImage" />
                <div className="quote">
                    <h1 className="clientQuote">"Dzięki ZdrowEat gotowanie stało się przyjemnością, a jedzenie śmieciowego jedzenia poszło w niepamięć"</h1>
                    <p> - Mateusz Marzęcki</p>
                </div>

            
            </div>



        </div>
    )
}