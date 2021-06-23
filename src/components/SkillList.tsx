

import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, List, Typography } from "@material-ui/core"
import SkillListItem from './SkillListItem'

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
            alignItems: `center`,
            textAlign: 'center',
            padding: `25px`,
            display: `flex`,
            flexDirection: `column`,
            border: `2px`,
            borderStyle: `solid`,
            borderColor: theme.palette.skills?.main,
            [theme.breakpoints.down('xl')]: {
                height: `70vh`,
                maxWidth: `200px`,
                margin: `10px`,
            },
            [theme.breakpoints.down('md')]: {
                height: `92vh`,
                width: `25vw`,
                margin: `10px`,
            }
          },
        typography: {
            marginTop: `20px`,
            color: theme.palette.skills?.main,
        },
    }));

const SkillList: React.FC<IProps> = (props): JSX.Element => {
    const classes = useStyles();

    return (
        <Grid className={classes.root} xl={3} item>
            <Typography className={classes.typography} variant="h6" >
                {props.title}
            </Typography>
            <div>
                <List>
                {props.props.map((item) => (
                    <SkillListItem key={item.language} avatar={item.avatar} language={item.language} />
                ))}
                </List>
            </div>
        </Grid >
    );
}

export default SkillList