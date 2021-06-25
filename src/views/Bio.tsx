import React, { useState, useEffect } from 'react';
import { Grid, Box, Typography, Avatar, Paper } from "@material-ui/core"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import bioPic from '../static/bioPic.json';
import bioText from '../static/bioText.json';
import BioCardRight from '../components/bioCardRight';
import BioCardLeft from '../components/bioCardLeft';
import Carousel from 'react-material-ui-carousel';
import CarouselItem from '../components/CarouselItem';

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
        marginRight: `10px`
    },
    avatar: {
        height: `auto`,
        width: `100%`,
        borderColor: theme.palette.dark?.main,
    },
    bgColor: {
        border: `6px`,
        borderStyle: `solid`,
        borderRadius: 0,
        borderColor: theme.palette.light?.main,
        backgroundColor: theme.palette.wayback?.main,
    },
}));

interface IItem {
    index: string,
    src: string,
    alt: string
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
            return window.innerWidth < 900
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }))
        };
        setResponsiveness();
        window.addEventListener('resize', () => setResponsiveness())
    }, [])

    const bioDesktop = () => {
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
                    spacing={6}
                >

                    <Grid
                        item container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={10} >
                        {bioPic.map((item: IItem) => (
                            <Grid key={item.index} item md={4}>
                                <Paper elevation={20}>
                                    <Avatar className={classes.avatar} alt={item.alt} src={item.src} variant={`square`} />
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                    <Grid item style={{marginTop: `25px`}}>
                        <Paper elevation={4} className={classes.bgColor}>
                            {
                                bioText.map(item => (
                                    <Typography className={classes.typography2} key={item.index}>
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

    // const bioMobile = () => {
    //     return (
    //         <>
    //             <Typography className={classes.typography} align="center" variant="h1">
    //                 Bio
    //             </Typography>
    //             <Carousel animation={"slide"} interval={10000}>
    //                 {bio.map((item) =>
    //                     <Box className={classes.root} key={item.index}>
    //                         <CarouselItem src={item.src} p={item.p} p2={item.p2} title={item.title} />
    //                     </Box>)}
    //             </Carousel>
    //         </>
    //     )
    // }

    return (
        <div>
            {mobileView ? bioDesktop() : bioDesktop()}
        </div>
    )


}

export default Bio