

import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Avatar, Typography } from "@material-ui/core"

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
            backgroundColor: theme.palette.wayback?.main,
            padding: `25px`,
            border: `6px`,
            borderStyle: `solid`,
            borderColor: theme.palette.dark?.main,
            [theme.breakpoints.down('xl')]: {
                height: `65vh`,
            },
            [theme.breakpoints.down('xs')]: {
                height: `auto`,
            }
        },
        typography1: {
            margin: `20px`,
            flexDirection: `column`,
            color: theme.palette.dark?.main,
        },
        typography2: {
            color: theme.palette.light?.main,
            [theme.breakpoints.down('xs')]: {
                fontSize: `.8rem`
            }
        },
        listItem: {
            justifyContent: `top`,
            alignItems: `center`,
            display: `flex`,
            flexDirection: `column`,
            width: `50%`,
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
            xs={12}
            direction="column"
            justify="flex-start"
            // alignItems="center"
            className={classes.testGrid}>
            <Grid
                item>
                <Typography className={classes.typography1} align="center" variant="h6" >
                    {props.title}
                </Typography>
            </Grid>
            <Grid
                item
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                className={classes.root}
                spacing={2}>
                {props.props.map((item) => (
                    <Grid
                        item
                        key={item.language}
                        className={classes.listItem}>
                        {item.avatar ? <Avatar src={item.avatar} variant="rounded" /> : <div />}
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