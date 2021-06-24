

import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Avatar, Typography, Grid } from "@material-ui/core"

interface IProps {
    language: string,
    avatar: string,
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        typography: {
            color: theme.palette.skills?.main,
        },
        listItem: {
            justifyContent: `top`,
            alignItems: `center`,
            display: `flex`,
            flexDirection: `column`,
        },
        justifyAvatar: {
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`,
            alignSelf: `center`
        }

    }));

const SkillListItem: React.FC<IProps> = (props): JSX.Element => {
    const classes = useStyles();

    return (
        <Grid item xl={1} className={classes.listItem}>
            <Avatar src={props.avatar} variant="rounded" />
            <Typography className={classes.typography}>
                {props.language}
            </Typography>

       </Grid>

    );
}

export default SkillListItem