import { Container, Typography } from "@material-ui/core";
import Bio from './Bio';
import Portfolio from './Portfolio';
import Technical from './Technical';
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";


const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    position: `static`,
    display: `flex`,
    flexDirection: `column`,
    backgroundSize: `auto`,
    backgroundRepeat: 'intial',
    backgroundPosition: 'center',
    justifyContent: `center`,
    alignItems: `center`
  },
  spacing: {
    alignItems: `center`,
    justifyContent: `center`,
    alignText: `center`,
  },
  typography: {
    alignItems: `center`
  }

}));


const App = () => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.root} maxWidth='xl' style={{ backgroundImage: `url(/images/seamless-cogwheels-pattern-2532.png)` }}>
        <Container className={classes.spacing} id="bio" maxWidth='md' >
          <Bio />
        </Container>
        <Container className={classes.spacing} id="technical" maxWidth='md' >
          <Technical />
        </Container>
        <Container className={classes.spacing} id="portfolio" maxWidth='xl' >
          <Portfolio />
        </Container>
      </Container>
    </>
  );
}

export default App;
