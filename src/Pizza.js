import React from 'react';
import logo from './logo.svg';
import './App.css';
import Background from './undraw_breakfast_psiw.svg'

function Pizza() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Background} className='background' />
        <img src={'http://www.pngmart.com/files/1/Pepperoni-Pizza.png'} className="App-logo" alt="logo"  />
        
      
      </header>
    </div>
  );
}

export default Pizza;
