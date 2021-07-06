import React, { useState, useEffect } from 'react';
import { Grid, Box, Typography, Avatar, Paper } from "@material-ui/core"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import bioPic from '../static/bioPic.json';
import bioText from '../static/bioText.json';
import Carousel from 'react-material-ui-carousel';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
    },
    typography1: {
        color: theme.palette.dark?.main,
        margin: `30px`,
        paddingTop: `70px`
    },
    typography2: {
        color: theme.palette.dark?.main,
        padding: `15px`,
        marginLeft: `10px`,
        marginRight: `10px`,
        fontSize: "1.2rem",
        [theme.breakpoints.down('md')]: {
            fontSize: "1rem"
        }
    },
    avatar: {
        height: `auto`,
        width: `100%`,
        borderColor: theme.palette.dark?.main,
    },
    bgColor: {
        border: `6px`,
        padding: `10px`,
        borderStyle: `solid`,
        borderRadius: 0,
        borderColor: theme.palette.light?.main,
        backgroundColor: theme.palette.wayback?.main,
    },
}));

interface IPictureItem {
    src: string,
    alt: string
}

interface ITextItem {
    p: string
}

const Bio: React.FC = (): JSX.Element => {
    const classes = useStyles();

    const [state, setState] = useState({
        mobileView: false
    })

    const { mobileView } = state;

    useEffect(() => {
        return () => {
            console.log(`component unmounted`)
        };
    }, []);

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 600
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }))
        };
        setResponsiveness();
        window.addEventListener('resize', () => setResponsiveness())
    }, [])

    const bioDesktop = () => {
        return (

            <Grid
                item
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={6}
                
            >
                {bioPic.map((item: IPictureItem, index: number) => (
                    <Grid key={index} item sm={4} >
                        <Paper elevation={4}>
                            <Avatar className={classes.avatar} alt={item.alt} src={item.src} variant={`square`} />
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        )
    }

    const bioMobile = () => {
        return (
            <Grid
                item
                spacing={10}
                 >
                <Carousel animation={"slide"} interval={5000} navButtonsAlwaysInvisible={true}>
                    {bioPic.map((item: IPictureItem, index: number) =>
                        <Box className={classes.root} key={index}>
                            <Paper elevation={4}>
                                <Avatar className={classes.avatar} src={item.src} variant={`square`} />
                            </Paper>
                        </Box>)}
                </Carousel>
            </Grid>
        )
    }

    return (
        <>
            <Typography className={classes.typography1} align="center" variant="h2">
                BIO
            </Typography>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={10}
            >
                {mobileView ? bioMobile() : bioDesktop()}
                <Grid item style={{ marginLeft: `-10px`, marginRight: `-10px` }}>
                    <Paper elevation={4} className={classes.bgColor}>
                        {
                            bioText.map((item: ITextItem, index: number) => (
                                <Typography className={classes.typography2} key={index}>
                                    {item.p}
                                </Typography>
                            ))
                        }
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}

export default Bio