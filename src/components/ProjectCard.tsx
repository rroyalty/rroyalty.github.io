import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Grid, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'

interface IProps {
  props: {
    name: string,
    description: string,
    domain: string,
    github: string,
    imgSrc: string,
    tech: Array<string>
    deploymentState: string
  },
  index: number
}

// interface IPropsArray extends Array<IProps>{}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.wayback?.main,
      justifyContent: 'center',
      textAlign: 'center',
      height: `320px`,
      borderStyle: `solid`,
      border: `6px`,
      borderRadius: `0px`,
      borderColor: theme.palette.light?.main,
      alignItems: `stretch`
    },
    media: {
      position: 'relative',
      justifyContent: 'center',
      textAlign: 'center',
    },
    content: {
      padding: `0px`,
    },
    justify: {
      justifyContent: `center`,
      alignItems: `stretch`,
      margin: `0px`,
      padding: `0px`
    }
  }));

const ProjectCard: React.FC<IProps> = (props): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid 
      item
      container
      alignItems="stretch"
      justifyContent="space-around"
      direction="column"
      lg={6} 
      sm={12}
      style={{width: "100%"}} >
      <Typography gutterBottom variant="h4" component="h4" align="center">
        {props.props.name}
      </Typography>
      <Card className={classes.root}>
        <CardContent className={classes.content}>
          <CardMedia
            component="img"
            height="143"
            className={classes.media}
            image={props.props.deploymentState === "expired" ? "/images/expiredStamp.png" : props.props.deploymentState === "wip" ? "/images/wip.png" : props.props.imgSrc}
            title={props.props.name}
          />
          <Typography variant="h3" component="h3" style={{margin: `5px`}}>
            {props.props.description}
          </Typography>
          <Typography style={{textDecoration: `underline`}} variant="subtitle2" component="p">
            {`Technologies Used:`}
          </Typography>
          <Typography variant="subtitle2" component="p" style={{paddingLeft: `10px`, paddingRight: `10px`}}>
            {props.props.tech.join(', ')}
          </Typography>
        </CardContent>
        <CardActions className={classes.justify}>
          <a href={props.props.github} target="_blank" rel="noreferrer">
            <CardActionArea>
              <Button>
                GitHub
              </Button>
            </CardActionArea>
          </a>
          {props.props.deploymentState === "live" && <a href={props.props.domain} target="_blank" rel="noreferrer">
            <CardActionArea>
              <Button>
                Deployment
              </Button>
            </CardActionArea>
          </a>}
        </CardActions>
      </Card>
    </Grid>
  );
}

export default ProjectCard
