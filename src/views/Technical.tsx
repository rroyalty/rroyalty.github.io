import React from 'react';
import { Container, Grid } from "@material-ui/core"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import skillLists from '../static/skills.json'
import SkillList from '../components/SkillList'

const useStyles = makeStyles((theme: Theme) => createStyles({
    imageDim: {
        width: '100%',
        height: 'auto',
        borderWidth: `2px`,
        borderColor: `#C4AC91`,
        borderStyle: `solid`,
        borderRadius: 16,
        margin: `15px`
    },
    bioText: {
        fontSize: `16
        px`,
        textAlign: `left`,
        padding: "20px",
        borderWidth: `2px`,
        borderColor: theme.palette.skills?.main,
        borderStyle: `solid`,
        borderRadius: 16,
        backgroundColor: theme.palette.bg?.main,
        color: theme.palette.skills?.main,
        maxHeight: `100vh`,
        margin: `15px`
    },
    grid: {
        margin: `10px`,
        maxheight: `100vh`
    }
}))

const Technical: React.FC = (): JSX.Element => {
    const classes = useStyles();

    return (
        <Container maxWidth='lg'>
            <div style={{ height: `70px` }} />
            <Grid container spacing={1} >
                {skillLists.map((item) => (
                    <SkillList key={item.index} props={item.list} title={item.title} />
                ))}
            </Grid>
        </Container >
    )
}

export default Technical