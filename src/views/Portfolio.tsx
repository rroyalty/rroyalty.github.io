import React from 'react';
import { withRouter } from 'react-router';
import ProjectCard from '../components/ProjectCard'
import projectList from '../static/projects.json'
import { createStyles, makeStyles, Theme, GridList, Container, Grid } from '@material-ui/core';


const useStyles = makeStyles(() =>
    createStyles({
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