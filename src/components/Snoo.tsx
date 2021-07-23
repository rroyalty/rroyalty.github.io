import React, { useState, useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography, IconButton } from "@material-ui/core";
import API from '../API/API';

import FirstPageIcon from '@material-ui/icons/FirstPage';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import LastPageIcon from '@material-ui/icons/LastPage';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        listGrid: {
            backgroundColor: theme.palette.wayback?.main,
            padding: `25px`,
            border: `6px`,
            borderStyle: `solid`,
            marginTop: `6px`,
            borderColor: theme.palette.light?.main,
            overflowY: `scroll`,
            wordWrap: `normal`
        },
        img: {
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`,
            height: `240px`
        }
    }));


const Snoo: React.FC = (): JSX.Element => {
    const classes = useStyles();

    const getAllPosts = async () => {
        await API.getAllPosts().then((res) => {
            setAllPosts(res.data)
            setLength(allPosts.length);
        })
    }

    console.log(allPosts)

    const [index, setIndex] = useState<number>(0)
    const [length, setLength] = useState<number>(0)
    const [allPosts, setAllPosts] = useState<any>(getAllPosts())
    const [title, setTitle] = useState<string>();
    const [text, setText] = useState<string>();
    // const [date, setDate] = useState<string | null>(null);

    useEffect(() => {
        API.getAllPosts().then((res) => {
            setTitle(allPosts[index].title);
            setText(allPosts[index].selftext);
        })
    }, [index])

    const loadingGrid = () => {
        return (
            <div className={classes.img} >
                <img src="/images/loading-buffering.gif" />
            </div>
        )
    }

    const loadedGrid = () => {
        return (
            <div style={{ height: `240px` }}>
                <Typography style={{ fontWeight: `bold` }}>
                    {title}
                </Typography>
                <Typography>
                    {text}
                </Typography>
            </div>
        )
    }

    return (
        <Grid
            item
            container
            md={4}
            xs={12}
            direction="column"
            justify="center"
            alignItems="stretch"
        >

            <Grid
                item
                xl={12}>
                <Typography style={{ margin: `20px` }} align="center" variant="h4" component="h4" >
                    Dev Blog
                </Typography>
            </Grid>
            <Grid
                item
                xl={12}
                className={classes.listGrid}
                spacing={2}>
                {text ? loadedGrid() : loadingGrid()}
            </Grid>
            <Grid
                item
                container
                xl={12}
                justify="center"
                alignItems="center" >
                <Grid
                    item
                    container
                    xl={3}
                    justify="center">
                    <IconButton onClick={() => setIndex(length)} >
                        <FirstPageIcon style={{ width: `50px`, height: `50px` }} />
                    </IconButton>
                </Grid>
                <Grid
                    item
                    container
                    xl={3}
                    justify="center">
                    <IconButton onClick={() => setIndex(index + 1)}>
                        <NavigateBeforeIcon style={{ width: `50px`, height: `50px` }} />
                    </IconButton>
                </Grid>
                <Grid
                    item
                    container
                    xl={3}
                    justify="center">
                    <IconButton onClick={() => setIndex(index - 1)}>
                        <NavigateNextIcon style={{ width: `50px`, height: `50px` }} />
                    </IconButton>
                </Grid>
                <Grid
                    item
                    container
                    xl={3}
                    justify="center">
                    <IconButton onClick={() => setIndex(0)}>
                        <LastPageIcon style={{ width: `50px`, height: `50px` }} />
                    </IconButton>
                </Grid>

            </Grid>

        </Grid>
    );
}

export default Snoo