import React from 'react';
import Landing from "./views/Landing"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Landing />
      <Footer />
    </>

  );
}

export default App;

