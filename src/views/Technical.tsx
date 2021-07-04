import React from 'react';
import { Grid, Typography } from "@material-ui/core"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import skillLists from '../static/skills.json'
import SkillList from '../components/SkillList'

interface IList {
    language: string,
    avatar: string
}

interface IListArray extends Array<IList>{}

interface IItem {
    title: string,
    list: IListArray
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    typography: {
        color: theme.palette.dark?.main,
        margin: `30px`,
        paddingTop: `70px`
    },
}))

const Technical: React.FC = (): JSX.Element => {
    const classes = useStyles();

    return (
        <>
            <Typography className={classes.typography} align="center" variant="h2">
                SKILLS
            </Typography>

            <Grid
                container
                direction="row"
                alignItems="flex-start"
                justify="center"
                spacing={3}>
                    
                {skillLists.map((item: IItem, index: number) => (
                    <SkillList key={index} props={item.list} title={item.title} />
                ))}
            </Grid>
        </>
    )
}

export default Technical