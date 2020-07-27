import React from 'react';
import client from './images/klient.jpeg';
import client2 from './images/klient2.png'
import './Home.css'

export default function Home () {
    return (
        <>
        <h1>NASI FANI</h1>
        <div className="containter">
            <div className="fanContainer">
                <img src={client} className="clientImage" />

                <figure className="quote">

                    <i>" Dzięki ZdrowEat gotowanie stało się przyjemnością, a jedzenie śmieciowego jedzenia poszło w niepamięć. Odnalazłem radość w gotowaniu, a dodatkowo mogę dzielić się moimi eksperymentami w kuchni z innymi użytkownikami aplikacji. Dla mnie bomba! "</i>

                    <figcaption>
                        &mdash; Mateusz Marzęcki, <cite>ISA</cite>  
                    </figcaption>
                </figure>
            </div>
        
            <div className="fanContainer2">
                <img src={client2} className="clientImage" />

                <figure className="quote">

                    <i>" COOL ! Bardzo klawa apka 👍🏿"</i>

                    <figcaption>
                        &mdash; Michał Michalczuk, <cite>ISA</cite>  
                    </figcaption>
                </figure>
            </div>
        </div>
        
        
        </>
    )
}