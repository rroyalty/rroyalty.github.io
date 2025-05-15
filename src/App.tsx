import React, { useState } from 'react';
import Landing from "./views/Landing"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App: React.FC = (): JSX.Element => {

  const [currentComponent, setCurrentComponent] = useState<string>("bio")

  return (
    <>
      <Navbar componentState={currentComponent} />
      <Landing stateFunction={setCurrentComponent} />
      <Footer />
    </>

  );
}

export default App;

