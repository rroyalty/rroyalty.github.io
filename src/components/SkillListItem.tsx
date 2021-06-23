

import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { ListItem, ListItemAvatar, ListItemText, Avatar } from "@material-ui/core"

interface IProps {
    language: string,
    avatar: string,
}

// interface IPropsArray extends Array<IProps>{}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        typography: {
            color: theme.palette.skills?.main,
        },
    }));

const SkillListItem: React.FC<IProps> = (props): JSX.Element => {
    const classes = useStyles();

    return (

        <ListItem>
            <ListItemAvatar>
                <Avatar src={props.avatar} variant="rounded" />
            </ListItemAvatar>
            <ListItemText
                primary={props.language}
                className = {classes.typography}
            />
        </ListItem>

    );
}

export default SkillListItem