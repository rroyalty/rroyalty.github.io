
import React from 'react';
import { Grid } from "@material-ui/core"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Blurb from './Blurb'
import Avatar from './AvatarComp'

interface IProps {
  p: string,
  src: string,
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  grid: {
    position: `relative`,
    justifyContent: `center`,
    alignItems: `center`,
    height: `16vh`,
    display: `flex`,
    [theme.breakpoints.down('xl')]: {
      margin: `10px`,
    },
    [theme.breakpoints.down('sm')]: {
      margin: `0px`,
    }
  }
}));

const BioCardLeft: React.FC<IProps> = (props): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid className={classes.grid} container item xs={12} spacing={3}>
      <Avatar p={props.p} src={props.src} />
      <Blurb p={props.p} src={props.src} />
    </Grid>
  )
};

export default BioCardLeft;



