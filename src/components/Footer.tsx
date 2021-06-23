import { Container, BottomNavigation, Grid, Typography } from '@material-ui/core'
import React from 'react';
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";


const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        display: `flex`,
        flexDirection: `column`,
        backgroundColor: theme.palette.bg?.main,
        borderTopWidth: `2px`,
        borderColor: theme.palette.portfolio?.main,
        borderStyle: `solid`,
        color: theme.palette.portfolio?.main,
        justifyContent: `center`,
        alignItems: `center`,
        width: `auto`,
        height: `auto`,
        margin: `0`,
        padding: `0`
    },
    nav: {
        display: `flex`,
        flexDirection: `column`,
        backgroundColor: theme.palette.bg?.main,
        justifyContent: `center`,
        alignItems: `center`,
        width: `90vw`,
        height: `auto`,
        margin: `0`,
        padding: `0`
    },
    typography: {
        display: `flex`,
        color: theme.palette.portfolio?.main,
        alignItems: `center`,
        justifyContent: `center`,
        flexDirection: `row`,
    },
    iconLinks: {
        display: `flex`,
        flexDirection: `row`,
        height: `48px`,
        width: `48px`,
    },
    anchorColor: {
        color: theme.palette.portfolio?.main,
    },
}));


const Footer: React.FC = (): JSX.Element => {

    const classes = useStyles();

    return (
        <Container className={classes.root} maxWidth='xl'>
            <BottomNavigation className={classes.nav} style={{ padding: "25px" }}>
                <Grid
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="flex-start"
                    spacing={1}
                >
                    <Grid item xs={12} sm={4}>
                        <Typography className={classes.typography} style={{ fontSize: ".8rem" }}>
                            This portfolio was created using React, Typescript and Material UI.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <a className={classes.anchorColor} href="https://github.com/rroyalty/rroyalty.github.io" target="_blank" rel="noreferrer">
                            <Typography className={classes.typography}>
                                Portfolio Repository
                            </Typography>
                        </a>
                    </Grid>
                    <Grid item xs={12} sm={4}>

                    </Grid>

                </Grid>
            </BottomNavigation>
        </Container>
    )
}

export default Footer;