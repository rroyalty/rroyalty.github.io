

import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, List, Typography } from "@material-ui/core"
import SkillListItem from './SkillListItem'

interface PropType {
    language: string,
    avatar: string,
}

interface PropTypeArray extends Array<PropType> { }

interface IProps {
    props: PropTypeArray,
    title: string,
}

// interface IPropsArray extends Array<IProps>{}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: theme.palette.bg?.main,
            padding: `25px`,
            border: `2px`,
            borderStyle: `solid`,
            borderColor: theme.palette.skills?.main,
            [theme.breakpoints.down('xl')]: {
                height: `70vh`,
                maxWidth: `300px`,
                margin: `10px`,
            },
            [theme.breakpoints.down('md')]: {
                height: `auto`,
                margin: `10px`,
            }
        },
        typography: {
            marginTop: `20px`,
            flexDirection: `column`,
            color: theme.palette.skills?.main,
        },
    }));

const SkillList: React.FC<IProps> = (props): JSX.Element => {
    const classes = useStyles();

    return (
        <Grid
            item
            container
            xl={3}
            direction="column"
            justify="center"
            alignItems="center">
            <Typography className={classes.typography} align="center" variant="h6" >
                {props.title}
            </Typography>
            <Grid item>
                <Grid
                    container
                    direction="column"
                    justify="flex-start"
                    alignItems="center"
                    className={classes.root}>
                    {props.props.map((item) => (
                        <SkillListItem key={item.language} avatar={item.avatar} language={item.language} />
                    ))}
                </Grid >
            </Grid >
        </Grid>
    );
}

export default SkillList