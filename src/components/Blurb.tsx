
import React from 'react';
import { Grid, Paper, Typography } from "@material-ui/core"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

interface IProps {
    src: string,
    p: string
}

const useStyles = makeStyles((theme: Theme) => createStyles({

    paper: {
        height: "14vh",
        backgroundColor: theme.palette.primary.main,
        border: `3px`,
        borderStyle: `solid`,
        borderColor: `#C4AC91`,
        width: `100%`
    },
    typography: {
        padding: `15px`,
        color: `#C4AC91`,
        [theme.breakpoints.down('md')]: {
            fontSize: `.8rem`
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: `.7rem`
        }
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
