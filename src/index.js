import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA20AR9dxSQA0-K1QG-aWT9vmlkEoVw2CA",
    authDomain: "zdroweat-7d0b0.firebaseapp.com",
    databaseURL: "https://zdroweat-7d0b0.firebaseio.com",
    projectId: "zdroweat-7d0b0",
    storageBucket: "zdroweat-7d0b0.appspot.com",
    messagingSenderId: "393455586281",
    appId: "1:393455586281:web:0bdf3a21dac60c67f6d978"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


