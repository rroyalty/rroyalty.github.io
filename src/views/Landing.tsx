import { Container } from "@material-ui/core";
import Bio from './Bio';
import Portfolio from './Portfolio';
import Technical from './Technical';
import Flair from './Flair';
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useEffect } from "react";

interface IProps {
  stateFunction: (componentState: string) => void
}

const random: number = Math.floor(Math.random() * 3)

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
    overflowX: "hidden",
    overflowY: "hidden"
  }
}));

const isInViewPort = (elem: HTMLElement ) => {
  const distance = elem.getBoundingClientRect();
  return (
    distance.top
  )
}

const App = (props: IProps) => {
  const classes = useStyles();

  const checkEle = () => {
    const windowHeight = window.innerHeight
    const bioEle  = isInViewPort(document.getElementById("bio")!);
    const technicalEle = isInViewPort(document.getElementById("technical")!);
    const portfolioEle = isInViewPort(document.getElementById("portfolio")!);
    const flairEle = isInViewPort(document.getElementById("flair")!);
  
    console.log(`Window Height: ${windowHeight}`)

    switch (true) {
      case (flairEle && flairEle / windowHeight <= .35 && flairEle / windowHeight > 0):
        console.log(`Flair: ${flairEle / windowHeight}`)
        props.stateFunction("flair");
        break;
      case (portfolioEle && portfolioEle / windowHeight <= .35 && portfolioEle / windowHeight > 0):
        console.log(`Portfolio: ${portfolioEle / windowHeight}`)
        props.stateFunction("portfolio");
        break;
      case (technicalEle && technicalEle / windowHeight <= .35 && technicalEle / windowHeight > 0):
        console.log(`Technical: ${technicalEle / windowHeight}`)
        props.stateFunction("technical");
        break;
      case (bioEle && bioEle / windowHeight <= .35 && bioEle / windowHeight > 0):
        props.stateFunction("bio");
        break;
    }
  }

  useEffect(() => {
    document.addEventListener('scroll', checkEle, true)
    return () => document.removeEventListener('scroll', checkEle, true)
  })

  return (
    <>
      <Container className={classes.root} maxWidth='xl'>
        <Container id="bio" maxWidth='md' >
          <Bio />
        </Container>
        <Container id="technical" maxWidth='md' >
          <Technical />
        </Container>
        <Container id="portfolio" maxWidth='md' >
          <Portfolio />
        </Container>
        <Container id="flair" maxWidth='lg' >
          <Flair />
        </Container>
      </Container>
    </>
  );
}

export default App;
