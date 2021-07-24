import React, { useState, useRef, useEffect } from 'react';
import Landing from "./views/Landing"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App: React.FC = (): JSX.Element => {

  const [currentComponent, setCurrentComponent] = useState<string>("bio")

  console.log(currentComponent)

  return (
    <>
      <Navbar stateFunction={setCurrentComponent} componentState={currentComponent} />
      <Landing stateFunction={setCurrentComponent} />
      <Footer />
    </>

  );
}

export default App;

