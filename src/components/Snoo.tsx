import React, { useState, useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography } from "@material-ui/core";
import API from '../API/API';
import RefreshIcon from '@material-ui/icons/Refresh';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        listGrid: {
            backgroundColor: theme.palette.wayback?.main,
            padding: `25px`,
            border: `6px`,
            borderStyle: `solid`,
            marginTop: `6px`,
            borderColor: theme.palette.light?.main,

        },
    }));


const Snoo: React.FC = (): JSX.Element => {
    const classes = useStyles();

    const [title, setTitle] = useState<string | null>(null);
    const [text, setText] = useState<string | null>(null);
    const [date, setDate] = useState<string | null>(null);

    useEffect(() => {
        API.getNewestTitle().then(async (res) => { setTitle(await res.data) })
        API.getNewestText().then(async (res) => { setText(await res.data) })
        API.getNewestDate().then(async (res) => { setDate(await res.data) })
    })

    const loadingGrid = () => {
        return (
            <Grid
                item
                xl={12}
                className={classes.listGrid}
                spacing={2}>
                <div style={{ height: `240px` }}>
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