
import React from 'react';
import { Grid, Avatar, Paper } from "@material-ui/core"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Blurb from './Blurb';

interface IProps {
  p: string,
  src: string,
  p2: string,
  title: string,
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  grid: {
    justifyContent: `center`,
    alignItems: `center`,
    height: `20vh`,
    display: `flex`,
    margin: '10px',
  },
  avatar: {
    height: "20vh",
    width: "20vh",
    border: `2px`,
    borderStyle: `solid`,
    borderColor: theme.palette.bio?.main,

  },
}));

const BioCardLeft: React.FC<IProps> = (props): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid
      container
      item
      spacing={0}
      justify="flex-start"
    >

      <Grid className={classes.grid} item xs={3} >
        <Paper elevation={10}>
          <Avatar className={classes.avatar} alt={props.src} src={props.src} variant={`rounded`} />
        </Paper>
      </Grid>

      <Grid className={classes.grid} item xs={8} >
        <Blurb p={props.p} p2={props.p2} title={props.title} src={props.src} />
      </Grid>
    </Grid >
  )
};

export default BioCardLeft;



