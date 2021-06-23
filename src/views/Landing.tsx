import { Container } from "@material-ui/core";
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
    alignItems: `center`
  },

}));


const App = () => {
  const classes = useStyles();

  return (
      <>
        <Container id="bio" className={classes.root} maxWidth='xl' style={{ backgroundImage: `url(/images/code-Background2.png)` }} >
            <Bio />
        </Container>
        <Container id="technical" className={classes.root} maxWidth='xl' style={{ backgroundImage: `url(/images/mario-Background.png)` }} >
            <Technical />
        </Container>
        <Container id="portfolio" className={classes.root} maxWidth='xl' style={{ backgroundImage: `url(/images/gandalf-vs-the-balrog.png)` }} >
            <Portfolio />
        </Container>
      </>
  );
}

export default App;