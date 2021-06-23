
import React from 'react';
import { Grid, Paper, Typography } from "@material-ui/core"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

interface IProps {
    src: string,
    p: string
}

const useStyles = makeStyles((theme: Theme) => createStyles({

    paper: {
        height: "20vh",
        backgroundColor: theme.palette.bg?.main,
        border: `3px`,
        borderStyle: `solid`,
        borderColor: theme.palette.bio?.main,
        width: `100%`
    },
    typography: {
        padding: `15px`,
        color: theme.palette.bio?.main,
        [theme.breakpoints.down('md')]: {
            fontSize: `.8rem`
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
        <Grid className={classes.gridBits} item xs={9}>
            <Paper className={classes.paper}>
                <Typography className={classes.typography}>
                    {props.p}
                </Typography>
            </Paper>
        </Grid>
    )
};

export default Blurb;
