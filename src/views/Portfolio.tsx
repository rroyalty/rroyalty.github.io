import React from 'react';
import ProjectCard from '../components/ProjectCard'
import projectList from '../static/projects.json'
import { GridList, Grid, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        gridList: {
            display: `flex`,
            justifyContent: 'center',
            alignItems: 'top',
            width: `100%`
        },
        typography: {

            color: theme.palette.portfolio?.main,
            margin: `10px`,
            paddingTop: `70px`

        },
        margin: {
            marginBottom: `50px`
        }
    }),
);


const Portfolio: React.FC = (): JSX.Element => {
    const classes = useStyles();
    const length: number = projectList.length

    return (
        <>
            <Typography className={classes.typography} align="center" variant="h1">
                Portfolio
            </Typography>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                className={classes.margin}
            >    <GridList className={classes.gridList} cellHeight={160} cols={4}>
                    {projectList.map((item, index: number) => (
                        <ProjectCard key={item.name} props={item} index={index} length={length} />
                    ))}
                </GridList>
            </Grid>
        </>
    )
}


export default Portfolio