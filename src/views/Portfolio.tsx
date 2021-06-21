import React from 'react';
import { withRouter } from 'react-router';
import ProjectCard from '../components/ProjectCard'
import projectList from '../static/projects.json'
import { createStyles, makeStyles, Theme, GridList, Container, Grid } from '@material-ui/core';


const useStyles = makeStyles(() =>
    createStyles({
        root: {
            overflow: `hidden`,
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: `95vw`,
            border: `2px`,
            borderStyle: `solid`,
            borderColor: `white`,
            padding: `0px`,
            maxHeight: `100vh`
        },
        img: {
            display: `flex`,
            backgroundSize: "cover",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            height: 'auto',
            minHeight: '100vh',
            justifyContent: `center`,
        },
        gridList: {
            paddingTop: `20px`,
            display: `flex`,
            justifyContent: 'center',
            alignItems: 'top',
            overflowX: 'hidden',
            maxHeight: `100vh`,
            overflow: `auto`,
            width: `100%`
        },
        gridItem: {
            width: `100%`
        },
    }),
);


const Portfolio: React.FC = (): JSX.Element => {
    const classes = useStyles();

    return (
        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
        >    <GridList className={classes.gridList} cellHeight={160} >
                {projectList.map(item => (
                    <ProjectCard key={item.name} props={item} />
                ))}
            </GridList>
        </Grid>
    )
}


export default withRouter(Portfolio)