import React, { useState, useEffect } from 'react';
import { Grid, Box } from "@material-ui/core"
import { makeStyles, createStyles } from "@material-ui/core/styles";
import bio from '../static/bio.json';
import BioCardRight from '../components/bioCardRight';
import BioCardLeft from '../components/bioCardLeft';
import Carousel from 'react-material-ui-carousel';
import CarouselItem from '../components/CarouselItem';

const useStyles = makeStyles(() => createStyles({
    root: {
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
    },
    grid: {
        margin: `10px`,
        maxheight: `100vh`,
        marginTop: `70px`,
        justifyContent: `center`,
        alignItems: `center`,

    },
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

    const bioDesktop = () => {
        return (
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
                        bio.indexOf(item) % 2 === 1 ? < BioCardRight key={item.index} src={item.src} p={item.p} /> : < BioCardLeft key={item.index} src={item.src} p={item.p} />
                    ))
                }
            </Grid>
        )
    }

    const bioMobile = () => {
        return (
                <Carousel  animation={"slide"} interval={10000}>
                    {bio.map((item) =>
                        <Box className={classes.root} key={item.index}>
                            <CarouselItem src={item.src} p={item.p} />
                        </Box>)}
                </Carousel>
        )
    }



    return (
        <div>
            {mobileView ? bioMobile() : bioDesktop()}
        </div>
    )


}

export default Bio