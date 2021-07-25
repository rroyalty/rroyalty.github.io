import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton'
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { AppBar, Toolbar, Drawer } from "@material-ui/core";
import NavbarList from './NavbarList';
import { Link as ScrollLink } from "react-scroll";
import { ListItem, ListItemText } from "@material-ui/core"

interface IProps {
    stateFunction: Dispatch<SetStateAction<string>>
    componentState: string
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    navbarDesktop: {
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`
    },
    navbar: {
        backgroundColor: theme.palette.bg?.main,
        borderColor: theme.palette.dark?.main,
        color: theme.palette.dark?.main,
        justifyContent: `center`,
        height: `80px`,
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
        width: `178px`,
    },
    appBar: {
        backgroundColor: theme.palette.bg?.main,
    },
    linkText: {
        textDecoration: `none`,
        textTransform: `uppercase`,
        backgroundColor: theme.palette.bg?.main,
        [theme.breakpoints.down('md')]: {
            border: `0px`,
            borderLeftWidth: `2px`,
            borderColor: theme.palette.light?.main,
            borderStyle: `solid`,
        },        
    },
    buttonBorder: {
        textDecoration: `underline`,
        textUnderlineOffset: `5px`
    },
}))


const Navbar: React.FC<IProps> = (props): JSX.Element => {
    const classes = useStyles();
    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false
    })

    const { mobileView, drawerOpen } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 960
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
                    }} style={{alignItems: "center"}}>
                    <ScrollLink smooth={true} duration={500} to="bio" className={classes.linkText}>
                        <ListItem button style={{textAlign: "center"}} className={"bio" === props.componentState ? classes.buttonBorder : "" }>
                            <ListItemText primary="RYAN ROYALTY" />
                        </ListItem>
                    </ScrollLink>
                    <NavbarList classProp={classes.drawer} componentState={props.componentState} stateFunction={props.stateFunction} />
                </Drawer>
            </AppBar>
        )
    }

    const displayDesktop = () => {
        return (
            <AppBar className={classes.navbar}>
                <Toolbar className="nav-style">
                    <ScrollLink smooth={true} duration={500} to="bio" className={classes.linkText}>
                        <ListItem button className={"bio" === props.componentState ? classes.buttonBorder : "" }>
                            <ListItemText primary="RYAN ROYALTY" />
                        </ListItem>
                    </ScrollLink>
                    <section className={classes.rightAppBar}>
                        <NavbarList classProp={classes.navbarDesktop} componentState={props.componentState} stateFunction={props.stateFunction} />
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
