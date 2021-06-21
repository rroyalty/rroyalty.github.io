import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Fade } from '@material-ui/core';

interface IProps {
  props: {
    name: string,
    description: string,
    domain: string,
    github: string,
    imgSrc: string
  }
}

// interface IPropsArray extends Array<IProps>{}

const useStyles = makeStyles((theme: Theme) => 
createStyles({
  root: {
    backgroundColor: theme.palette.primary.main,
    justifyContent: 'center',
    textAlign: 'center',
    margin: `10px`,
    padding: `25px`,
    display: `flex`,
    flexDirection: `column`,
    border: `2px`,
    borderStyle: `solid`,
    borderColor: `#C4AC91`,
    [theme.breakpoints.down('xl')]: {
        width: `20vw`,
    },
    [theme.breakpoints.down('lg')]: {
        width: `25vw`,
    },
    [theme.breakpoints.down('md')]: {
        width: `30vw`,
    },
    [theme.breakpoints.down('sm')]: {
        width: `50vw`,
    },
    [theme.breakpoints.down('xs')]: {
        width: `60vw`,
    },
  },
  media: {
    height: 140,
    border: `2px`,
    borderStyle: `solid`,
    borderColor: `#C4AC91`,
  },
  typography: {
    color: `#C4AC91`
  }
}));

const ProjectCard: React.FC<IProps> = (props): JSX.Element => {
  const classes = useStyles();
  console.log(props)

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.props.imgSrc}
          title={props.props.name}
        />
        <CardContent>
          <Typography className={classes.typography} gutterBottom variant="h5" component="h2">
            {props.props.name}
          </Typography>
          <Typography className={classes.typography} variant="body2" component="p">
            {props.props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <a href={props.props.github} target="_blank" rel="noreferrer">
          <Button className={classes.typography} size="small">
            GitHub
        </Button>
        </a>
        <a href={props.props.domain} target="_blank" rel="noreferrer">
          <Button className={classes.typography} size="small">
            Deployment
        </Button>
        </a>
      </CardActions>
    </Card>
  );
}

export default ProjectCard
