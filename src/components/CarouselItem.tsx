
import React from 'react';
import { Paper, Avatar  } from "@material-ui/core"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

interface IProps {
    src: string,
}

const useStyles = makeStyles((theme: Theme) => createStyles({

    avatar: {
        height: "auto",
        width: "auto",
        borderStyle: `solid`,
        borderColor: theme.palette.light?.main,
    },
}));

const CarouselItem: React.FC<IProps> = (props): JSX.Element => {

    const classes = useStyles();

    return (
        <Paper elevation={4}>
            <Avatar className={classes.avatar} src={props.src} variant={`square`} />
        </Paper>
    )
};

export default CarouselItem;