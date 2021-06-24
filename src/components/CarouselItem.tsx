
import React from 'react';
import { Paper, Avatar, Typography } from "@material-ui/core"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

interface IProps {
    src: string,
    p: string,
    p2: string,
    title: string
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        backgroundColor: theme.palette.bg?.main,
        border: `3px`,
        borderStyle: `solid`,
        borderColor: theme.palette.bio?.main,
        width: `70%`,
        height: `70vh`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        justifyContent: `center`,
        [theme.breakpoints.down('xs')]: {
            width: `90%`,
        }

    },
    typography1: {
        marginLeft: `15px`,
        marginRight: `15px`,
        marginTop: `10px`,
        marginBottom: `5px`,
        color: theme.palette.bio?.main,
        [theme.breakpoints.down('xs')]: {
            fontSize: `.9rem`
        }
    },
    typography2: {
        marginLeft: `15px`,
        marginRight: `15px`,
        marginTop: `10px`,
        marginBottom: `5px`,
        color: theme.palette.bio?.main,
        [theme.breakpoints.down('xs')]: {
            fontSize: `.8rem`
        }
    },
    avatar: {
        height: "30vh",
        width: "30vh",
        border: `3px`,
        borderStyle: `solid`,
        marginTop: `15px`,
        marginBottm: `5px`,
        borderColor: theme.palette.bio?.main,
    },
}));

const CarouselItem: React.FC<IProps> = (props): JSX.Element => {

    const classes = useStyles();

    return (
        <Paper className={classes.root} elevation={4}>
            <Avatar className={classes.avatar} src={props.src} variant="rounded" />
            <Typography className={classes.typography1} variant="h6">
                {props.title}
            </Typography>
            <Typography className={classes.typography2} variant="body1">
                {props.p}
            </Typography>
            <Typography className={classes.typography2} variant="body1">
                {props.p2}
            </Typography>
        </Paper>
    )
};

export default CarouselItem;