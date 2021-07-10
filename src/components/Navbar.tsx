import React, { useState, useEffect } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton'
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { AppBar, Toolbar, Drawer, Typography } from "@material-ui/core"
import NavbarList from './NavbarList'

const useStyles = makeStyles((theme: Theme) => createStyles({
    navbarDesktop: {
        display: `inline-flex`,
        justifyContent: `space-between`
    },
    navbar: {
        display: `flex`,
        backgroundColor: theme.palette.bg?.main,
        borderColor: theme.palette.dark?.main,
        color: theme.palette.dark?.main,
        height: `66px`,
        marginLeft: `auto`,
        [theme.breakpoints.down('md')]: {
            marginRight: -12,
          },
    },
    icon: {
        display: `inline-flex`,
        height: `48px`,
        width: `48px`,
    },
    rightAppBar: {
        marginLeft: `auto`,
        marginRight: -12,
    },
    justifyContent: {
        display: `flex`,
        justifyContent: `center`
    },
    hamburger: {
        display: `flex`,
        flexDirection: `column`,
        textDecoration: `none`,
        textTransform: `uppercase`,
        justifyContent: `flex-end`,

    },
    drawer: {
        backgroundColor: theme.palette.bg?.main,
        border: `0px`,
        borderLeftWidth: `2px`,
        borderColor: theme.palette.dark?.main,
        borderStyle: `solid`,
        color: theme.palette.dark?.main,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        height: "100vh",
        width: `45vw`,
    },
    appBar: {
        backgroundColor: theme.palette.bg?.main,
    }
}))


const Navbar: React.FC = (): JSX.Element => {
    const classes = useStyles();

    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false
    })

    const { mobileView, drawerOpen } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }))
        };
        setResponsiveness();
        window.addEventListener('resize', () => setResponsiveness())
    }, [])

    const displayMobile = () => {
        const handleDrawerOpen = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: false }));

        return (
            <AppBar className={classes.appBar} >
                <Toolbar className={classes.navbar}>
                    <IconButton
                        edge='start'
                        color='inherit'
                        onClick={handleDrawerOpen}
                        className={classes.hamburger}
                    >
                        <MenuIcon className={classes.icon} />
                    </IconButton>
                </Toolbar>
                <Drawer
                    {...{
                        anchor: 'right',
                        open: drawerOpen,
                        onClose: handleDrawerClose,
                    }}>
                    <NavbarList classProp={classes.drawer} />
                </Drawer>
            </AppBar>
        )

    }

    const displayDesktop = () => {
        return (
            <AppBar className={classes.navbar}>
                <Toolbar className="nav-style">
                    <Typography className={classes.justifyContent} component="h3">
                        RYAN ROYALTY
                    </Typography>
                    <section className={classes.rightAppBar}>
                        <NavbarList classProp={classes.navbarDesktop} />
                    </section>
                </Toolbar>
            </AppBar>
        )
    }

    return (
        <>
            {mobileView ? displayMobile() : displayDesktop()}
        </>
    )
}

export default Navbar
