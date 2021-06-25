
import React from 'react';
import { Paper, Typography } from "@material-ui/core"
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
        border: `3px`,
        borderStyle: `solid`,
        borderColor: theme.palette.dark?.main,
        width: `100%`,
        justifyContent: `center`,
        display: `flex`,
        flexDirection: `column`
    },
    typography: {
        padding: `5px`,
        paddingLeft: `20px`,
        paddingRight: `20px`,
        color: theme.palette.light?.main,
        [theme.breakpoints.down('lg')]: {
            fontSize: `.85rem`
        },
        [theme.breakpoints.down('md')]: {
            fontSize: `.7rem`
        },
    }
}));

const Blurb: React.FC<IProps> = (props): JSX.Element => {
    const classes = useStyles();

    return (
        <Paper className={classes.paper} elevation={4}>
            {/* <Typography className={classes.typography} variant="h6">
                {props.title}
            </Typography> */}
            <Typography className={classes.typography}>
                {props.p}
            </Typography>
            <Typography className={classes.typography}>
                {props.p2}
            </Typography>
        </Paper>
    )
};

export default Blurb;
