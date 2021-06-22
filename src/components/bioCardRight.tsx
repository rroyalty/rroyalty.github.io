
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
    margin: `10px`,
    display: `flex`
  }
}));

const BioCardRight: React.FC<IProps> = (props): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid className={classes.grid} container item xs={12} spacing={3}>
      <Blurb  p={props.p} src={props.src} />
      <Avatar p={props.p} src={props.src} />
    </Grid>
  )
};

export default BioCardRight;



