

import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { ListItem, ListItemAvatar, ListItemText, Avatar, Typography } from "@material-ui/core"

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

        <div className={classes.listItem}>
            {/* <ListItemAvatar className={classes.justifyAvatar}> */}
                <Avatar src={props.avatar} variant="rounded" />
            {/* </ListItemAvatar> */}
            <Typography className={classes.typography}>
                {props.language}
            </Typography>
            {/* <ListItemText
                primary={props.language}
                className={classes.typography}
            /> */}
        </div>

    );
}

export default SkillListItem