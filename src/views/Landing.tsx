import React from 'react';
// import background from '/images/code-Background.jpg';
import { Container, Fade } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Bio from './Bio';
import Portfolio from './Portfolio';
import Technical from './Technical';
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";


const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: `flex`,
    backgroundSize: "cover",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: "100vh",
    justifyContent: `center`,

  },
}));


const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <>
        <Container id="bio" className={classes.root} maxWidth='xl' style={{ backgroundImage: `url(/images/code-Background.jpg)` }} >
          <Fade in={true}>
            <Bio />
          </Fade>
        </Container>
        <Container id="technical" className={classes.root} maxWidth='xl' style={{ backgroundImage: `url(/images/mario-Background.jpg)` }} >
          <Fade in={true}>
            <Technical />
          </Fade>
        </Container>
        <Container id="portfolio" className={classes.root} maxWidth='xl' style={{ backgroundImage: `url(/images/gandalf-vs-the-balrog.jpg)` }} >
          <Fade in={true}>
            <Portfolio />
          </Fade>
        </Container>
      </>
    </Router>
  );
}

export default App;
