

import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { ListItem, ListItemAvatar, ListItemText, Avatar } from "@material-ui/core"

interface IProps {
    language: string,
    avatar: string,
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        typography: {
            color: theme.palette.skills?.main,
            [theme.breakpoints.down('sm')]: {
                display: `none`
            }
        },
        listItem: {
            justifyContent: `top`,
            alignItems: `center`,
            display: `flex`,
            flexDirection: `row`,
            [theme.breakpoints.down('md')]: {
                flexDirection: `column`,
            }
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

        <ListItem className={classes.listItem}>
            <ListItemAvatar className={classes.justifyAvatar}>
                <Avatar src={props.avatar} variant="rounded" />
            </ListItemAvatar>
            <ListItemText
                primary={props.language}
                className={classes.typography}
            />
        </ListItem>

    );
}

export default SkillListItem