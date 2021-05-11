import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

interface IProps {
  props: {
    name: string,
    description: string,
    domain: string,
    github: string,
    imgSrc: string,
    icon: string
  }
}

// interface IPropsArray extends Array<IProps>{}

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

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
          <Typography gutterBottom variant="h5" component="h2">
            {props.props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          GitHub
        </Button>
        <Button size="small" color="primary">
          Deployment
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard
