import React from 'react';
import Landing from "./views/Landing"
import Navbar from "./components/Navbar";


const App: React.FC = (): JSX.Element => {

  return (
      <>
        <Navbar />
        <Landing />
      </>

  );
}

export default App;

