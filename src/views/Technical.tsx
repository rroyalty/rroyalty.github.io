import React from 'react';
import { Container, Grid } from "@material-ui/core"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import skillLists from '../static/skills.json'
import SkillList from '../components/SkillList'

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        justifyContent: `center`,
        alignItems: `center`,
        width: `90vw`
    },
}))

const Technical: React.FC = (): JSX.Element => {
    const classes = useStyles();

    return (
        <Container maxWidth='xl'>
            <div style={{ height: `50px` }} />
            <Grid className={classes.root} container spacing={1} >
                {skillLists.map((item) => (
                    <SkillList key={item.index} props={item.list} title={item.title} />
                ))}
            </Grid>
        </Container >
    )
}

export default Technical