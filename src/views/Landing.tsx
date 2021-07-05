import { Container  } from "@material-ui/core";
import Bio from './Bio';
import Portfolio from './Portfolio';
import Technical from './Technical';
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const random: number =  Math.floor(Math.random() * 6)

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: `flex`,
    flexDirection: `column`,
    backgroundSize: `auto`,
    backgroundRepeat: 'intial',
    backgroundPosition: 'center',
    justifyContent: `center`,
    alignItems: `center`,
    backgroundImage: `url(/images/bg${random}.png)`,
    backgroundColor: theme.palette.wayback?.main,
    overflowX: "hidden"
  },
  typography: {
    alignItems: `center`
  }

}));


const App = () => {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.root} maxWidth='xl'>
        <Container id="bio" maxWidth='md' >
          <Bio />
        </Container>
        <Container id="technical" maxWidth='md' >
          <Technical />
        </Container>
        <Container id="portfolio" maxWidth='xl' >
          <Portfolio />
        </Container>
      </Container>
    </>
  );
}

export default App;
