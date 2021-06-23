
import React from 'react';
import { Paper, Avatar, Typography } from "@material-ui/core"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

interface IProps {
    src: string,
    p: string
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        backgroundColor: theme.palette.bg?.main,
        border: `3px`,
        borderStyle: `solid`,
        borderColor: theme.palette.bio?.main,
        width: `70%`,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        justifyContent: `center`,
        [theme.breakpoints.down('xs')]: {
            width: `100%`,
            maxWidth: `100%`,
        }

    },
    typography: {
        marginLeft: `15px`,
        marginRight: `15px`,
        marginTop: `10px`,
        marginBottom: `5px`,
        color: theme.palette.bio?.main,
        [theme.breakpoints.down('sm')]: {
            fontSize: `.8rem`
        },
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
        <Paper className={classes.root}>
            <Avatar className={classes.avatar} src={props.src} variant="rounded" />
            <Typography className={classes.typography}>
                {props.p}
            </Typography>
        </Paper>
    )
};

export default CarouselItem;