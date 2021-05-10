import React from 'react';
import logo from './logo.svg';
import background from './images/code-Background.jpg'

import './App.css';

function App() {
  return (
    <div className="App bg" style={{ 
        backgroundImage: `url(${background})`, 
        backgroundSize: "cover",  
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: "93.7vh",
        width: "100vw",
      }}>

    </div>
  );
}

export default App;
