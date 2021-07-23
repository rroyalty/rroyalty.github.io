import React, { useState, useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography } from "@material-ui/core";
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
            overflowY: `scroll` 
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

    const [length, setLength] = useState<number>(1)
    const [allPosts, setAllPosts] = useState<JSON | null>(null)
    const [title, setTitle] = useState<string | null>(null);
    const [text, setText] = useState<string | null>(null);
    // const [date, setDate] = useState<string | null>(null);

    useEffect(() => {
        API.getAllPosts().then(async (res) => { 
            setAllPosts(await res.data);
            setLength(await res.data.length);
            setTitle(await res.data[length - 1].title);
            setText(await res.data[length - 1].selftext) 
        })
    })

    const loadingGrid = () => {
        return (
            <Grid
                item
                xl={12}
                className={classes.listGrid}
                spacing={2}>
                <div className={classes.img} >
                    <img src="/images/loading-buffering.gif" />
                </div>
            </Grid>
        )
    }

    const loadedGrid = () => {
        return (
            <Grid
                item
                xl={12}
                className={classes.listGrid}
                spacing={2}>
                <div style={{ height: `240px` }}>
                    <Typography style={{ fontWeight: `bold` }}>
                        {title}
                    </Typography>
                    <Typography>
                        {text}
                    </Typography>
                </div>
            </Grid>
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

            {text ? loadedGrid() : loadingGrid()}

            <Grid
                item
                container
                xl={12}
                justify="center" >

            </Grid>

        </Grid>
    );
}

export default Snoo