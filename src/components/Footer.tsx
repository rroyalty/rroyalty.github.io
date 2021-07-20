import { Container, BottomNavigation, Grid, Typography } from '@material-ui/core'
import React from 'react';
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";


const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        display: `flex`,
        flexDirection: `column`,
        backgroundColor: theme.palette.bg?.main,
        borderColor: theme.palette.bg?.main,
        borderStyle: `solid`,
        color: theme.palette.dark?.main,
        justifyContent: `center`,
        alignItems: `center`,
        width: `100%`,
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
        width: `99%`,
        height: `auto`,
        margin: `0`,
        padding: `0`
    },
    anchorColor: {
        color: theme.palette.light?.main,
    },
}));


const Footer: React.FC = (): JSX.Element => {

    const classes = useStyles();

    return (
        <Container className={classes.root} maxWidth='xl'>
            <BottomNavigation className={classes.nav} style={{ paddingTop: "25px", paddingBottom: "25px" }}>
                <Grid
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="flex-start"
                    spacing={1}
                >
                    <Grid item xs={12} sm={4}>
                        <Typography align="center" variant="subtitle2" component="p">
                            This portfolio was created using React, TypeScript and Material UI.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <a className={classes.anchorColor} href="https://github.com/rroyalty/rroyalty.github.io" target="_blank" rel="noreferrer">
                            <Typography align="center" variant="subtitle2" component="p">
                                Portfolio Repository
                            </Typography>
                        </a>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography align="center" variant="subtitle2" component="p">
                            Last Updated: 07/20/2021
                        </Typography>
                    </Grid>

                </Grid>
            </BottomNavigation>
        </Container>
    )
}

export default Footer;