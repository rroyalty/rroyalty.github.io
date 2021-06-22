import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import { Grid, GridList, Container } from "@material-ui/core"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import bio from '../static/bio.json'
import BioCardRight from '../components/bioCardRight'
import BioCardLeft from '../components/bioCardLeft'

const useStyles = makeStyles(() => createStyles({
    root: {
        overflow: `hidden`,
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: `95vw`,
        border: `2px`,
        borderStyle: `solid`,
        borderColor: `white`,
        padding: `0px`,
        maxHeight: `100vh`
    },
    grid: {
        margin: `10px`,
        maxheight: `100vh`,
        marginTop: `70px`
    },
    gridList: {
        paddingTop: `20px`,
        display: `flex`,
        justifyContent: 'center',
        alignItems: 'top',
        overflowX: 'hidden',
        maxHeight: `100vh`,
        overflow: `auto`,
        width: `100%`
    }
}));




const Bio: React.FC = (): JSX.Element => {
    const classes = useStyles();

    const [state, setState] = useState({
        mobileView: false
    })

    const { mobileView } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }))
        };
        setResponsiveness();
        window.addEventListener('resize', () => setResponsiveness())
    }, [])

        return (
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                className={classes.grid}
            >
                {
                    bio.map(item => (
                        bio.indexOf(item) % 2 === 0 ? < BioCardRight key={item.index} src={item.src} p={item.p} /> : < BioCardLeft key={item.index} src={item.src} p={item.p} />
                    ))
                }
            </Grid>
        )
    


}

export default withRouter(Bio)