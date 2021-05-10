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
    <Router>
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

          <Switch>
            <Route exact path="/index" component={Home} />
            <Route exact path="/bio" component={Bio} />
            <Route exact path="/portfolio" component={Portfolio}/>
            <Route exact path="/" component={Home} />
          </Switch>

        </Container>

      </>
    </Router>
  );
}

export default App;
