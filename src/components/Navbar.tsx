import React, { useState, useEffect } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton'
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { AppBar, Toolbar, Drawer } from "@material-ui/core"
import NavbarList from './NavbarList'

const useStyles = makeStyles((theme: Theme) => createStyles({
    navDisplayFlex: {
        display: `inline-flex`,
        justifyContent: `space-between`
    },
    navbar: {
        backgroundColor: theme.palette.bg?.main,
        borderColor: theme.palette.dark?.main,
        color: theme.palette.light?.main,
        height: `66px`
    },
    iconLinks: {
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
    mobileNav: {
        display: `flex`,
        flexDirection: `column`,
        textDecoration: `none`,
        textTransform: `uppercase`,
        justifyContent: `flex-end`,

    },
    menu: {
        backgroundColor: theme.palette.bg?.main,
        border: `0px`,
        borderLeftWidth: `2px`,
        borderColor: theme.palette.dark?.main,
        borderStyle: `solid`,
        color: theme.palette.light?.main,
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        height: "100vh",
        width: `40vw`,
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
            <AppBar position="fixed" className={classes.navbar}>
                <IconButton
                    {...{
                        edge: 'start',
                        color: 'inherit',
                        'aria-label': 'menu',
                        'aria-haspopup': 'true',
                        onClick: handleDrawerOpen,

                    }}
                    className={classes.mobileNav}
                >
                    <MenuIcon className={classes.iconLinks} />
                </IconButton>
                <Drawer
                    {...{
                        anchor: 'right',
                        open: drawerOpen,
                        onClose: handleDrawerClose,
                    }}>
                        <NavbarList classprop = {classes.menu} />
                </Drawer>
            </AppBar>
        )

    }

    const displayDesktop = () => {
        return (
            <AppBar position="fixed" className={classes.navbar}>
                <Toolbar className="nav-style">
                    <h3 className={classes.justifyContent}>{`RYAN ROYALTY`}</h3>
                    <section className={classes.rightAppBar}>
                        <NavbarList classprop = {classes.navDisplayFlex} />
                    </section>
                </Toolbar>
            </AppBar>
        )
    }

    return (
        <div>
            {mobileView ? displayMobile() : displayDesktop()}
        </div>
    )
}

export default Navbar
