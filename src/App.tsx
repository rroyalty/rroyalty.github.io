import React from 'react';
import background from './images/code-Background.jpg';
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './views/Home';
import Bio from './views/Bio';
import Portfolio from './views/Portfolio';

import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth='xl' className="App bg" style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: "100vh",
        width: "100vw"
      }}>
        <Router>
          <Switch>
            <Route path="/index" exact render={() => <Home />} />
            <Route path="/bio" exact render={() => <Bio />} />
            <Route path="/portfolio" exact render={() => <Portfolio />} />
            <Route path="/" exact render={() => <Home />} />
          </Switch>
        </Router>
      </Container>

    </>
  );
}

export default App;
