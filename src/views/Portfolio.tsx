import React from 'react';
import ProjectCard from '../components/ProjectCard'
import projectList from '../static/projects.json'
import { Grid, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

interface IItem {
    name: string,        
    description: string, 
    domain: string,
    github: string,
    imgSrc: string,
    tech: Array<string>,
    deploymentState: string
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        gridList: {
            display: `flex`,
            justifyContent: 'center',
            alignItems: 'top',
            width: `100%`
        },
    }),
);


const Portfolio: React.FC = (): JSX.Element => {
    const classes = useStyles();

    return (
        <>
            <Typography align="center" variant="h2" component="h2">
                PROJECTS
            </Typography>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="stretch"
                spacing={4}
            >    
                    {projectList.map((item: IItem, index: number) => (
                        <ProjectCard key={item.name} props={item} index={index} />
                    ))}
            </Grid>
        </>
    )
}


export default Portfolio