import React from 'react';
import logo from './logo.svg';
import './App.css';


// '¿´

function sumarNumeros() {
  let numero =2+4;
  return (
   numero
  
  )
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/368px-Unofficial_JavaScript_logo_2.svg.png" className="App-logo" alt="logo" />
        <p>
          el numero es .
        </p>
       
        <h1> 
          {sumarNumeros()}
           </h1>
      </header>
    </div>
  );
}

export default App;
