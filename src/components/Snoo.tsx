import React, { useState, useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography, IconButton } from "@material-ui/core";
import API from '../API/API';

import FirstPageIcon from '@material-ui/icons/FirstPage';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import LastPageIcon from '@material-ui/icons/LastPage';
import { AxiosResponse } from 'axios';

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
            maxWidth: `100%`,
            width: `100%`
        },
        img: {
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`,
            height: `240px`,
        },
        hidden: {
            visibility: `hidden`
        }
    }));


const Snoo: React.FC = (): JSX.Element => {
    const classes = useStyles();

    const [staticResponse, setResponse] = useState<AxiosResponse>()
    const [length, setLength] = useState<number>(0)
    const [title, setTitle] = useState<string | null>(null);
    const [text, setText] = useState<string | null>(null);
    const [date, setDate] = useState<string | null>(null);
    const [index, setIndex] = useState<number>(0)

    // const [date, setDate] = useState<string | null>(null);

    useEffect(() => {
        API.getAllPosts().then((res) => {
            setResponse(res);
            setLength(res.data.length);
            setIndex(0);
            setTitle(res.data[0].title);
            setText(res.data[0].selftext);
            const date = new Date(res.data[0].created * 1000)
            setDate(`${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`);
        }).catch((err) => {
            console.log(err)
            setLength(0);
            setIndex(0);
        })
    }, [])

    useEffect(() => {
        if (staticResponse?.data[index] !== null && staticResponse?.data[index] !== undefined) {
            setTitle(staticResponse?.data[index].title);
            setText(staticResponse?.data[index].selftext);
            const date = new Date(staticResponse?.data[index].created * 1000)
            setDate(`${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`);
        } else {
            setTitle(null);
            setText(null);
            setDate(null)
        }
    }, [index])

    const loadingGrid = () => {
        return (
            <div className={classes.img} >
                <img style={{ height: `240px` }} src="/images/expiredStamp.png" />
            </div>
        )
    }

    const loadedGrid = () => {
        return (
            <div style={{ height: `240px` }}>
                <Grid
                    container
                    justifyContent="space-between"
                    style={{marginBottom: `5px`}}>
                    <Grid
                        item>
                        <Typography style={{ fontWeight: `bold` }}>
                            {title}
                        </Typography>
                    </Grid>
                    <Grid
                        item>
                        <Typography style={{ fontWeight: `bold` }}>
                            {date}
                        </Typography>
                    </Grid>
                </Grid>
                <Typography style={{ wordWrap: `break-word` }}>
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
            justifyContent="center"
            alignItems="center"
            direction="column"
            style={{ marginBottom: "200px" }}
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
                justifyContent="center"
                alignItems="center"
                direction="row">
                <Grid
                    item
                    container
                    xs={3}
                    justifyContent="center"
                    className={index === length - 1 || !text ? classes.hidden : ""}>
                    <IconButton onClick={() => setIndex(length - 1)} >
                        <FirstPageIcon style={{ width: `50px`, height: `50px` }} />
                    </IconButton>
                </Grid>
                <Grid
                    item
                    container
                    xs={3}
                    justifyContent="center"
                    className={index === length - 1 || !text ? classes.hidden : ""}>
                    <IconButton onClick={() => setIndex(index + 1)}>
                        <NavigateBeforeIcon style={{ width: `50px`, height: `50px` }} />
                    </IconButton>
                </Grid>
                <Grid
                    item
                    container
                    xs={3}
                    justifyContent="center"
                    className={index === 0 || !text ? classes.hidden : ""}>
                    <IconButton onClick={() => setIndex(index - 1)}>
                        <NavigateNextIcon style={{ width: `50px`, height: `50px` }} />
                    </IconButton>
                </Grid>
                <Grid
                    item
                    container
                    xs={3}
                    justifyContent="center"
                    className={index === 0 || !text ? classes.hidden : ""}>
                    <IconButton onClick={() => setIndex(0)}>
                        <LastPageIcon style={{ width: `50px`, height: `50px` }} />
                    </IconButton>
                </Grid>

            </Grid>

        </Grid>
    );
}

export default Snoo