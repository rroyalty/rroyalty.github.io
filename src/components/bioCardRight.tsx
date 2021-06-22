
import React from 'react';
import { Grid, Avatar } from "@material-ui/core"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Blurb from './Blurb'

interface IProps {
  p: string,
  src: string,
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  grid: {
    position: `relative`,
    justifyContent: `center`,
    alignItems: `center`,
    height: `20vh`,
    display: `flex`,
    margin: '10px'
  },
  avatar: {
    height: "35vh",
    width: "35vh",
    border: `3px`,
    borderStyle: `solid`,
    borderColor: `#C4AC91`,
    marginTop: `-200px`,
    [theme.breakpoints.down('lg')]: {
      height: "20vh",
      width: "20vh",
      marginTop: `0px`,
  }
},
blurbSlide: {
  marginRight: `-150px`,
  [theme.breakpoints.down('lg')]: {
    marginTop: `0px`,
},
}
}));

const BioCardRight: React.FC<IProps> = (props): JSX.Element => {
  const classes = useStyles();

  return (

    <Grid 
      container 
      item 
      spacing={0}
      justify="flex-end"
      >
      <Grid className={classes.grid} item xs >

      </Grid>

      <Grid className={`${classes.grid} ${classes.blurbSlide}`} item xs={8} >
        <Blurb p={props.p} src={props.src} />
      </Grid>

      <Grid className={classes.grid} item xs >
        <Avatar className={classes.avatar} alt={props.src} src={props.src} variant={`rounded`} />
      </Grid>
    </Grid >

  )
};

export default BioCardRight;



