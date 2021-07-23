import React, { useState, useEffect } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Grid, Typography } from "@material-ui/core";
import API from '../API/API'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        listGrid: {
            backgroundColor: theme.palette.wayback?.main,
            padding: `25px`,
            border: `6px`,
            borderStyle: `solid`,
            borderColor: theme.palette.light?.main,

        },
    }));


const Snoo: React.FC = (): JSX.Element => {
    const classes = useStyles();

    const [title, setTitle] = useState<string>("");
    const [text, setText] = useState<string>("");
    const [date, setDate] = useState<string>("");

    useEffect(() => {
        API.getNewestTitle().then(async (res) => {setTitle(await res.data)})
        API.getNewestText().then(async (res) => {setText(await res.data)})
        API.getNewestDate().then(async (res) => {setDate(await res.data)})
    })


    return (
        <Grid
            item
            container
            md={6}
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
                <Typography style={{fontWeight: `bold`}}>
                    {title}
                </Typography>
                <Typography>
                    {text}
                </Typography>

            </Grid>

        </Grid>
    );
}

export default Snoo