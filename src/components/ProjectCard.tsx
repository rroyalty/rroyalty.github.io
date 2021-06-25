import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { GridListTile, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'

interface IProps {
  props: {
    name: string,
    description: string,
    domain: string,
    github: string,
    imgSrc: string,
  },
  index: number,
  length: number
}

// interface IPropsArray extends Array<IProps>{}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.wayback?.main,
      justifyContent: 'center',
      textAlign: 'center',
      padding: `25px`,
      display: `flex`,
      flexDirection: `column`,
      border: `5px`,
      borderStyle: `solid`,
      borderRadius: 0,
      borderColor: theme.palette.light?.main,
      height: `70%`,
      [theme.breakpoints.down('xl')]: {
        width: `20vw`,
      },
      [theme.breakpoints.down('lg')]: {
        width: `20vw`,
      },
      [theme.breakpoints.down('md')]: {
        width: `25vw`,
      },
      [theme.breakpoints.down('sm')]: {
        width: `30vw`,
      },
      [theme.breakpoints.down('xs')]: {
        width: `60vw`,
      },
    },
    media: {
      height: 140,
      border: `3px`,
      borderStyle: `solid`,
      borderColor: theme.palette.light?.main,
    },
    typography: {
      color: theme.palette.dark?.main,
    },
    firstTile: {
      margin: `10px`,
      maxWidth: `95%`,
      [theme.breakpoints.down('sm')]: {
        marginTop: `10px`,
      },
    },
    lastTile: {
      margin: `10px`,
      maxWidth: `95%`,
      [theme.breakpoints.down('sm')]: {
        marginBottom: `100px`,
      },
    },
    allTiles: {
      maxWidth: `95%`,
      margin: `10px`,
    }
  }));

const ProjectCard: React.FC<IProps> = (props): JSX.Element => {
  const classes = useStyles();

  return (
    <GridListTile className={props.index !== props.length - 1 ? (props.index === 0 ? classes.firstTile : classes.allTiles) : classes.lastTile}>
      <Card className={classes.root}>

        <CardMedia
          className={classes.media}
          image={props.props.imgSrc}
          title={props.props.name}
        />
        <CardContent>
          <Typography className={classes.typography} gutterBottom variant="h6" component="h3">
            {props.props.name}
          </Typography>
          <Typography className={classes.typography} variant="body2" component="p">
            {props.props.description}
          </Typography>
        </CardContent>

        <CardActionArea>
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
        </CardActionArea>
      </Card>
    </GridListTile>
  );
}

export default ProjectCard
