import React from 'react';
import { Container, Grid, Typography } from "@material-ui/core"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import skillLists from '../static/skills.json'
import SkillList from '../components/SkillList'

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        justifyContent: `center`,
        alignItems: `center`,
    },
    typography: {
        color: theme.palette.skills?.main,
        padding: `20px`,
    }
}))

const Technical: React.FC = (): JSX.Element => {
    const classes = useStyles();

    return (
        <>
            <Typography className={classes.typography} align="center" variant="h1">
                Portfolio
            </Typography>

            <Grid className={classes.root} container spacing={1} >
                {skillLists.map((item) => (
                    <SkillList key={item.index} props={item.list} title={item.title} />
                ))}
            </Grid>
        </>
    )
}

export default Technical