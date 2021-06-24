
import React from 'react';
import { Grid, Paper, Typography } from "@material-ui/core"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

interface IProps {
    src: string,
    p: string,
    p2: string,
    title: string
}

const useStyles = makeStyles((theme: Theme) => createStyles({

    paper: {
        height: "20vh",
        backgroundColor: theme.palette.bg?.main,
        border: `2px`,
        borderStyle: `solid`,
        borderColor: theme.palette.bio?.main,
        width: `100%`
    },
    typography: {
        padding: `5px`,
        color: theme.palette.bio?.main,
        [theme.breakpoints.down('lg')]: {
            fontSize: `.85rem`
        },
        [theme.breakpoints.down('md')]: {
            fontSize: `.7rem`
        },
    },
    gridBits: {
        justifyContent: `center`,
        alignItems: `center`,
        display: `flex`
    }
}));

const Blurb: React.FC<IProps> = (props): JSX.Element => {
    const classes = useStyles();

    return (
        <Paper className={classes.paper} elevation={4}>
            <Typography className={classes.typography} variant="h6">
                {props.title}
            </Typography>
            <Typography className={classes.typography} variant="body1">
                {props.p}
            </Typography>
            <Typography className={classes.typography} variant="body1">
                {props.p2}
            </Typography>
        </Paper>
    )
};

export default Blurb;
