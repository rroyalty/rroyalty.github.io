import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Avatar, Typography } from "@material-ui/core"
import current from '../static/current.json'


// interface IPropsArray extends Array<IProps>{}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: theme.palette.wayback?.main,
            padding: `25px`,
            border: `6px`,
            borderStyle: `solid`,
            borderColor: theme.palette.light?.main,

        },
        typography1: {
            margin: `20px`,
            flexDirection: `column`,
        },
        listItem: {
            justifyContent: `top`,
            alignItems: `center`,
            display: `flex`,
            flexDirection: `column`,
            width: `50%`,
            height: `80px`,
            [theme.breakpoints.down('md')]: {
                width: `33%`,
                height: `auto`
            }
        },
        justifyAvatar: {
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`,
            alignSelf: `center`
        },
        grid: {
            width: `100%`,

        }
    }));

const Current: React.FC = (): JSX.Element => {
    const classes = useStyles();

    return (
        <div />
    );
}

export default Current