import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Landing from "./views/Landing"
import Navbar from "./components/Navbar";


const App: React.FC = (): JSX.Element => {

  return (
    <Router>
        <>
          <Navbar />
          <Landing /> 
        </>
    </Router>

  );
}

export default App;

