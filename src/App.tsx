import React, { useState, useRef, useEffect } from 'react';
import Landing from "./views/Landing"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App: React.FC = (): JSX.Element => {

  const [currentComponent, setCurrentComponent] = useState<string>("bio")
  const handleState = (stateUpdate: string) => {
      setCurrentComponent(stateUpdate)
  }


  console.log(currentComponent)

  return (
    <>
      <Navbar stateFunction={() => handleState} componentState={currentComponent} />
      <Landing stateFunction={() => handleState} />
      <Footer />
    </>

  );
}

export default App;

