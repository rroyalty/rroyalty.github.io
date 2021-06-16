import React from 'react';
// import background from '/images/code-Background.jpg';
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './views/Home';
import Bio from './views/Bio';
import Portfolio from './views/Portfolio';
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import './App.css';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: `flex`,
    backgroundSize: "cover",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: "100vw",
    justifyContent: `center`,

  },
  footer: {
    backgroundColor: theme.palette.primary.main,
    display: `flex`,
  }
}));


const App = () => {
  const classes = useStyles();

  return (
    <Router>
        <>
          <Navbar />
          <Container id="bio" className={classes.root} maxWidth='xl' style={{ backgroundImage: `url(/backgrounds/code-Background.jpg)` }} >
            <Bio />
          </Container>
          <Container id="portfolio" className={classes.root} maxWidth='xl' style={{ backgroundImage: `url(/backgrounds/code-Background.jpg)` }} >
            <Portfolio />
          </Container>
        </>
    </Router>
  );
}

export default App;
