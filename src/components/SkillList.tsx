

import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, GridList, GridListTile, Avatar, Typography } from "@material-ui/core"

interface PropType {
    language: string,
    avatar: string,
}

interface PropTypeArray extends Array<PropType> { }

interface IProps {
    props: PropTypeArray,
    title: string,
}

// interface IPropsArray extends Array<IProps>{}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: theme.palette.bg?.main,
            padding: `25px`,
            border: `2px`,
            borderStyle: `solid`,
            borderColor: theme.palette.skills?.main,
            [theme.breakpoints.down('xl')]: {
                height: `80vh`,
            },
            [theme.breakpoints.down('sm')]: {
                height: `auto`,
            }
        },
        typography1: {
            margin: `20px`,
            flexDirection: `column`,
            color: theme.palette.skills?.main,
        },
        typography2: {
            color: theme.palette.skills?.main,
            [theme.breakpoints.down('xs')]: {
                fontSize: `.8rem`
            }
        },
        listItem: {
            justifyContent: `top`,
            alignItems: `center`,
            display: `flex`,
            flexDirection: `column`,
            width: `100%`,
            [theme.breakpoints.down('md')]: {
                width: `33%`
            }
        },
        justifyAvatar: {
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`,
            alignSelf: `center`
        },
        testGrid: {
            width: `100%`,
        }
    }));

const SkillList: React.FC<IProps> = (props): JSX.Element => {
    const classes = useStyles();

    return (
        <Grid
            item
            container
            xl={4}
            sm={12}
            direction="column"
            justify="flex-start"
            alignItems="center"
            className={classes.testGrid}>
            <Grid item>
                <Typography className={classes.typography1} align="center" variant="h6" >
                    {props.title}
                </Typography>
            </Grid>
            <Grid
                item
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                className={classes.root}
                spacing={2}>
                {props.props.map((item) => (
                    <Grid item key={item.language} xl={12} md={4} className={classes.listItem}>
                        <Avatar src={item.avatar} variant="rounded" />
                        <Typography className={classes.typography2}>
                            {item.language}
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        </Grid >
    );
}

export default SkillList