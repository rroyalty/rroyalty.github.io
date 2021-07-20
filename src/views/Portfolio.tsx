import React from 'react';
import ProjectCard from '../components/ProjectCard'
import projectList from '../static/projects.json'
import { GridList, Grid, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

interface IItem {
        name: string,        
        description: string, 
        domain: string,
        github: string,
        imgSrc: string,
        tech: Array<string>
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        gridList: {
            display: `flex`,
            justifyContent: 'center',
            alignItems: 'top',
            width: `100%`
        },
        margin: {
            marginBottom: `50px`
        }
    }),
);


const Portfolio: React.FC = (): JSX.Element => {
    const classes = useStyles();

    return (
        <>
            <Typography align="center" variant="h2" component="h2">
                PORTFOLIO
            </Typography>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                className={classes.margin}
            >    <GridList className={classes.gridList} cellHeight={160} cols={3}>
                    {projectList.map((item: IItem, index: number) => (
                        <ProjectCard key={item.name} props={item} index={index} />
                    ))}
                </GridList>
            </Grid>
        </>
    )
}


export default Portfolio