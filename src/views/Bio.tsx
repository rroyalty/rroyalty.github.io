import React, { useState, useEffect } from 'react';
import { Grid, Box, Typography } from "@material-ui/core"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import bio from '../static/bio.json';
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
    grid: {
        margin: `10px`,
        maxheight: `100vh`,
        justifyContent: `center`,
        alignItems: `center`,
    },
    typography: {
        color: theme.palette.bio?.main,
        margin: `10px`,
        paddingTop: `70px`
    }
}));

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

    console.log(bio)

    const bioDesktop = () => {
        return (
            <>
                <Typography className={classes.typography} align="center" variant="h1">
                    Bio
                </Typography>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    className={classes.grid}
                    spacing={1}
                >
                    {
                        bio.map(item => (
                            bio.indexOf(item) % 2 === 1 ? < BioCardRight key={item.index} src={item.src} p={item.p} p2={item.p2} title={item.title} /> : < BioCardLeft key={item.index} src={item.src} p={item.p} p2={item.p2} title={item.title} />
                        ))
                    }
                </Grid>
            </>
        )
    }

    const bioMobile = () => {
        return (
            <>
                <Typography className={classes.typography} align="center"  variant="h1">
                    Bio
                </Typography>
                <Carousel animation={"slide"} interval={10000}>
                    {bio.map((item) =>
                        <Box className={classes.root} key={item.index}>
                            <CarouselItem src={item.src} p={item.p} p2={item.p2} title={item.title} />
                        </Box>)}
                </Carousel>
            </>
        )
    }

    return (
        <div>
            {mobileView ? bioMobile() : bioDesktop()}
        </div>
    )


}

export default Bio